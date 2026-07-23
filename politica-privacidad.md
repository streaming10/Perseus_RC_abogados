---
layout: default
title: Sin Conexión
description: Esta página se muestra cuando no hay conexión a internet
permalink: /offline.html
sitemap: false
---

<style>
.offline-container {
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px 20px;
  background: var(--primary-light, #fafbfc);
}

.offline-icon {
  font-size: 4rem;
  margin-bottom: 2rem;
  color: var(--accent-gold, #c9a96a);
  opacity: 0.8;
}

.offline-title {
  font-size: 2.5rem;
  font-weight: 300;
  color: var(--navy-blue, #1a2332);
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.offline-message {
  font-size: 1.2rem;
  color: var(--text-secondary, #4a5568);
  margin-bottom: 3rem;
  max-width: 500px;
  line-height: 1.6;
  font-weight: 300;
}

.offline-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 3rem;
}

.offline-button {
  background: var(--accent-gold, #c9a96a);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.offline-button:hover {
  background: var(--navy-blue, #1a2332);
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

.offline-button.secondary {
  background: transparent;
  color: var(--navy-blue, #1a2332);
  border: 2px solid var(--navy-blue, #1a2332);
}

.offline-button.secondary:hover {
  background: var(--navy-blue, #1a2332);
  color: white;
}

.cached-pages {
  margin-top: 2rem;
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(26, 35, 50, 0.08);
  max-width: 600px;
  width: 100%;
}

.cached-pages h3 {
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: var(--navy-blue, #1a2332);
  font-weight: 300;
  text-align: center;
}

.pages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;
}

.page-link {
  display: block;
  padding: 1rem;
  background: var(--secondary-light, #f5f7fa);
  border-radius: 6px;
  color: var(--navy-blue, #1a2332);
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 500;
  text-align: center;
}

.page-link:hover {
  background: var(--accent-gold, #c9a96a);
  color: white;
  text-decoration: none;
  transform: translateY(-2px);
}

.connection-status {
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 500;
  text-align: center;
}

.connection-status.online {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}

.connection-status.offline {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}

@media (max-width: 768px) {
  .offline-title {
    font-size: 2rem;
  }
  
  .offline-message {
    font-size: 1.1rem;
  }
  
  .offline-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .pages-grid {
    grid-template-columns: 1fr;
  }
  
  .cached-pages {
    margin: 2rem 1rem 0 1rem;
    padding: 1.5rem;
  }
}
</style>

<div class="offline-container">
  <div class="offline-icon">📡</div>
  
  <h1 class="offline-title">Sin Conexión a Internet</h1>
  
  <p class="offline-message">
    No se puede conectar con el servidor en este momento. Verifica tu conexión a internet 
    o intenta recargar la página cuando tengas conectividad.
  </p>
  
  <div class="offline-actions">
    <button class="offline-button" onclick="window.location.reload()">
      🔄 Intentar de Nuevo
    </button>
    <a href="{{ '/' | relative_url }}" class="offline-button secondary">
      🏠 Ir al Inicio
    </a>
  </div>
  
  <div class="connection-status offline" id="connectionStatus">
    🔴 Sin conexión a internet
  </div>
  
  <div class="cached-pages">
    <h3>Páginas Disponibles sin Conexión</h3>
    <p style="color: var(--text-secondary, #4a5568); margin-bottom: 1.5rem; font-size: 0.95rem;">
      Estas páginas están guardadas en tu dispositivo y se pueden ver sin conexión:
    </p>
    
    <div class="pages-grid">
      <a href="{{ '/' | relative_url }}" class="page-link">🏠 Inicio</a>
      <a href="{{ '/servicios/delitos-informaticos/' | relative_url }}" class="page-link">💻 Delitos Informáticos</a>
      <a href="{{ '/servicios/recuperacion-deudas/' | relative_url }}" class="page-link">💰 Recuperación Deudas</a>
      <a href="{{ '/servicios/derecho-civil/' | relative_url }}" class="page-link">⚖️ Derecho Civil</a>
      <a href="{{ '/servicios/derecho-penal/' | relative_url }}" class="page-link">🏛️ Derecho Penal</a>
      <a href="{{ '/servicios/derecho-laboral/' | relative_url }}" class="page-link">👥 Derecho Laboral</a>
      <a href="{{ '/blog/' | relative_url }}" class="page-link">📝 Blog</a>
    </div>
  </div>
</div>

<script>
// Estado de conectividad
function updateConnectionStatus() {
  const statusEl = document.getElementById('connectionStatus');
  
  if (navigator.onLine) {
    statusEl.textContent = '🟢 Conexión restaurada';
    statusEl.className = 'connection-status online';
    
    // Auto-recargar después de 2 segundos si hay conexión
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  } else {
    statusEl.textContent = '🔴 Sin conexión a internet';
    statusEl.className = 'connection-status offline';
  }
}

// Verificar conectividad inicialmente
updateConnectionStatus();

// Escuchar cambios de conectividad
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

// Verificar conectividad cada 30 segundos
setInterval(function() {
  // Hacer un ping ligero al servidor
  fetch('{{ "/" | relative_url }}', { 
    method: 'HEAD',
    cache: 'no-cache',
    mode: 'no-cors'
  }).then(() => {
    if (!navigator.onLine) {
      // Si fetch funciona pero navigator dice offline, forzar online
      updateConnectionStatus();
    }
  }).catch(() => {
    // Si fetch falla, mantener estado offline
  });
}, 30000);

// Manejar enlaces a páginas que pueden no estar en caché
document.addEventListener('click', function(e) {
  if (e.target.matches('a[href^="{{ site.baseurl }}/"]')) {
    if (!navigator.onLine) {
      e.preventDefault();
      alert('Esta página requiere conexión a internet. Por favor, verifica tu conectividad e inténtalo de nuevo.');
    }
  }
});

// Mensaje de Service Worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', function(event) {
    if (event.data && event.data.type === 'CACHE_UPDATED') {
      console.log('Caché actualizado con nueva versión');
    }
  });
}
</script>
