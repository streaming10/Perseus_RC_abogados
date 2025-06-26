---
layout: null
---

// Service Worker optimizado para Perseus & RC Abogados
const CACHE_NAME = 'perseus-rc-v2.1';
const OFFLINE_PAGE = '{{ "/offline.html" | relative_url }}';

// Recursos críticos para caché inmediato
const CRITICAL_RESOURCES = [
  '{{ "/" | relative_url }}',
  '{{ "/assets/css/main.css" | relative_url }}',
  '{{ "/offline.html" | relative_url }}'
];

// Patrones para recursos que deben cachearse
const CACHE_PATTERNS = [
  /\/assets\/css\//,
  /\/assets\/js\//,
  /\/assets\/images\//,
  /\.woff2$/,
  /\.woff$/,
  /\.ttf$/,
  /\.webp$/,
  /\.jpg$/,
  /\.png$/,
  /\.svg$/
];

// URLs que NO deben ser cacheadas
const SKIP_CACHE = [
  /\/admin\//,
  /\.json$/,
  /google-analytics/,
  /googletagmanager/,
  /gtag/,
  /analytics\.js/,
  /gtm\.js/
];

// Instalación del Service Worker
self.addEventListener('install', event => {
  console.log('SW: Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('SW: Caching critical resources');
        return cache.addAll(CRITICAL_RESOURCES.map(url => new Request(url, {cache: 'reload'})));
      })
      .then(() => {
        console.log('SW: Installation complete');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('SW: Installation failed', error);
      })
  );
});

// Activación del Service Worker
self.addEventListener('activate', event => {
  console.log('SW: Activating...');
  
  event.waitUntil(
    Promise.all([
      // Limpiar cachés antiguos
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME) {
              console.log('SW: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Reclamar todos los clientes
      self.clients.claim()
    ]).then(() => {
      console.log('SW: Activation complete');
    })
  );
});

// Estrategia de fetch optimizada
self.addEventListener('fetch', event => {
  const { request } = event;
  const { url, method } = request;
  
  // Solo manejar requests GET
  if (method !== 'GET') return;
  
  // Saltar URLs que no deben cachearse
  if (SKIP_CACHE.some(pattern => pattern.test(url))) {
    return;
  }
  
  // Saltar requests de otros dominios (excepto fonts y CDNs necesarios)
  if (!url.startsWith(self.location.origin) && 
      !url.includes('fonts.googleapis.com') &&
      !url.includes('fonts.gstatic.com')) {
    return;
  }
  
  // Estrategia para navegación (HTML)
  if (request.mode === 'navigate') {
    event.respondWith(handleNavigate(request));
    return;
  }
  
  // Estrategia para recursos estáticos
  if (shouldCache(url)) {
    event.respondWith(handleStatic(request));
    return;
  }
  
  // Para todo lo demás, ir a la red directamente
});

// Manejar navegación con estrategia Network First
async function handleNavigate(request) {
  try {
    // Intentar red primero con timeout
    const networkResponse = await fetchWithTimeout(request, 3000);
    
    if (networkResponse && networkResponse.ok) {
      // Cachear la respuesta exitosa
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    throw new Error('Network response not ok');
    
  } catch (error) {
    console.log('SW: Network failed for navigation, trying cache');
    
    // Si falla la red, intentar caché
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Si no hay caché, mostrar página offline
    const offlinePage = await caches.match(OFFLINE_PAGE);
    return offlinePage || new Response('Offline', { status: 503 });
  }
}

// Manejar recursos estáticos con estrategia Cache First
async function handleStatic(request) {
  try {
    // Intentar caché primero
    const cachedResponse = await caches.match(request);
    
    if (cachedResponse) {
      // Si está en caché, actualizar en background
      updateInBackground(request);
      return cachedResponse;
    }
    
    // Si no está en caché, ir a la red
    const networkResponse = await fetchWithTimeout(request, 5000);
    
    if (networkResponse && networkResponse.ok) {
      // Cachear la respuesta exitosa
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    }
    
    return networkResponse;
    
  } catch (error) {
    console.log('SW: Static resource failed', error);
    
    // Si todo falla, intentar servir desde caché una vez más
    const fallbackResponse = await caches.match(request);
    if (fallbackResponse) {
      return fallbackResponse;
    }
    
    // Respuesta de fallback para imágenes
    if (request.destination === 'image') {
      return new Response('', { status: 404 });
    }
    
    throw error;
  }
}

// Fetch con timeout
function fetchWithTimeout(request, timeout) {
  return Promise.race([
    fetch(request),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Fetch timeout')), timeout)
    )
  ]);
}

// Actualizar recurso en background
function updateInBackground(request) {
  fetchWithTimeout(request, 5000)
    .then(response => {
      if (response && response.ok) {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(request, response);
        });
      }
    })
    .catch(() => {
      // Fallar silenciosamente en background
    });
}

// Verificar si un recurso debe ser cacheado
function shouldCache(url) {
  return CACHE_PATTERNS.some(pattern => pattern.test(url));
}

// Manejar mensajes del cliente
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAN_CACHE') {
    cleanOldCache();
  }
});

// Limpiar caché periódicamente
async function cleanOldCache() {
  try {
    const cache = await caches.open(CACHE_NAME);
    const requests = await cache.keys();
    
    // Mantener solo los últimos 100 recursos
    if (requests.length > 100) {
      const toDelete = requests.slice(0, requests.length - 100);
      await Promise.all(toDelete.map(request => cache.delete(request)));
      console.log(`SW: Cleaned ${toDelete.length} old cache entries`);
    }
  } catch (error) {
    console.error('SW: Cache cleaning failed', error);
  }
}

// Limpiar caché automáticamente cada hora
setInterval(cleanOldCache, 60 * 60 * 1000);