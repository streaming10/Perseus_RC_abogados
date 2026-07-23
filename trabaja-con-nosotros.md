---
layout: null
---

// Service Worker ultra optimizado para Perseus & RC
const CACHE_NAME = 'perseus-rc-v2.2';
const OFFLINE_PAGE = '{{ "/offline.html" | relative_url }}';

// Recursos críticos mínimos
const CRITICAL_RESOURCES = [
  '{{ "/" | relative_url }}',
  '{{ "/assets/css/main.css" | relative_url }}'
];

// Solo cachear recursos esenciales
const shouldCache = url => {
  return /\.(css|woff2|webp|jpg|png)$/.test(url) || 
         url.includes('/assets/') ||
         url === '{{ "/" | relative_url }}';
};

// Instalación simplificada
self.addEventListener('install', event => {
  if ('caches' in self) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(cache => cache.addAll(CRITICAL_RESOURCES))
        .then(() => self.skipWaiting())
        .catch(() => self.skipWaiting())
    );
  } else {
    self.skipWaiting();
  }
});

// Activación simplificada
self.addEventListener('activate', event => {
  if ('caches' in self) {
    event.waitUntil(
      caches.keys()
        .then(names => Promise.all(
          names.map(name => name !== CACHE_NAME ? caches.delete(name) : null)
        ))
        .then(() => self.clients.claim())
        .catch(() => self.clients.claim())
    );
  } else {
    self.clients.claim();
  }
});

// Fetch estrategia mínima
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Solo GET requests del mismo origen
  if (request.method !== 'GET' || 
      !request.url.startsWith(self.location.origin) ||
      !('caches' in self)) {
    return;
  }
  
  // Navegación: Network first
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request, { timeout: 3000 })
        .then(response => {
          if (response.ok) {
            caches.open(CACHE_NAME).then(cache => 
              cache.put(request, response.clone()).catch(() => {})
            );
          }
          return response;
        })
        .catch(() => 
          caches.match(request)
            .then(cached => cached || caches.match(OFFLINE_PAGE))
            .catch(() => new Response('Offline', { status: 503 }))
        )
    );
    return;
  }
  
  // Recursos estáticos: Cache first
  if (shouldCache(request.url)) {
    event.respondWith(
      caches.match(request)
        .then(cached => {
          if (cached) return cached;
          
          return fetch(request)
            .then(response => {
              if (response.ok) {
                caches.open(CACHE_NAME).then(cache => 
                  cache.put(request, response.clone()).catch(() => {})
                );
              }
              return response;
            });
        })
        .catch(() => fetch(request))
    );
  }
});

// Mensaje handling mínimo
self.addEventListener('message', event => {
  if (event.data?.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
