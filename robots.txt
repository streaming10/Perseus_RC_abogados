# Perseus & RC Abogados

Sitio web del despacho de abogados Perseus & RC Abogados, optimizado para Jekyll, GitHub Pages con soporte completo para español e inglés.

## 🌍 Características Multiidioma

- ✅ **Soporte completo ES/EN** con plugin jekyll-multiple-languages
- ✅ **SEO optimizado** con hreflang tags automáticos
- ✅ **URLs amigables** (/es/servicios/, /en/services/)
- ✅ **Structured Data** en ambos idiomas
- ✅ **Sitemap multiidioma** automático
- ✅ **Selector de idioma** responsive

## 🚀 Configuración y Despliegue

### Estructura del Proyecto Multiidioma

```
/
├── _config.yml                    # Configuración con soporte multiidioma
├── _i18n/                        # 📁 Traducciones
│   ├── es.yml                     # Traducciones español
│   ├── en.yml                     # Traducciones inglés
│   ├── es/                        # Contenido específico ES
│   │   ├── legal.md              # Páginas legales en español
│   │   └── privacy.md
│   └── en/                        # Contenido específico EN
│       ├── legal.md              # Páginas legales en inglés
│       └── privacy.md
├── _layouts/
│   └── default.html              # Layout con soporte multiidioma
├── _includes/
│   ├── head.html                 # SEO + hreflang tags
│   ├── header.html               # Navegación + selector idioma
│   ├── footer.html               # Footer multiidioma
│   └── scripts.html              # JavaScript optimizado
├── assets/
│   ├── css/main.scss             # Estilos con variables multiidioma
│   └── images/                   # Imágenes optimizadas
├── index.md                      # Página principal con traducciones
├── sitemap.xml                   # Sitemap multiidioma
├── robots.txt                    # Robots.txt optimizado
├── Gemfile                       # Dependencias con plugins i18n
└── README.md                     # Esta documentación
```

### 📝 Personalización de Contenido Multiidioma

#### Traducciones
Edita los archivos en `_i18n/`:

**Español (`_i18n/es.yml`):**
```yaml
site:
  title: "Tu Despacho de Abogados"
  description: "Descripción en español"

nav:
  about: "Nosotros"
  services: "Servicios"
```

**Inglés (`_i18n/en.yml`):**
```yaml
site:
  title: "Your Law Firm"
  description: "Description in English"

nav:
  about: "About Us"
  services: "Services"
```

#### Usar traducciones en plantillas
```liquid
<h1>{% t site.title %}</h1>
<p>{% t site.description %}</p>
```

### 🎨 Selector de Idiomas

El sitio incluye un selector de idiomas automático que:
- ✅ Mantiene la página actual al cambiar idioma
- ✅ Incluye hreflang tags para SEO
- ✅ Es responsive y accesible
- ✅ Funciona con y sin JavaScript

### 📊 Optimización SEO/SEM Multiidioma

#### SEO Automático Incluido:
- **Hreflang tags** automáticos en todas las páginas
- **Meta descriptions** específicas por idioma
- **Structured Data** localizado
- **Open Graph** con locale correcto
- **Sitemap multiidioma** automático
- **URLs amigables** (/es/, /en/)

#### SEM (Google Ads) Optimizado:
- **Landing pages** específicas por idioma
- **Meta keywords** localizadas
- **Call-to-actions** traducidos
- **Formularios** con idioma detectado
- **Analytics** con tracking por idioma

#### Configuración Google Analytics:
```yaml
# _config.yml
google_analytics: "G-XXXXXXXXXX"
```

El tracking incluye automáticamente:
- Idioma del usuario
- País de origen
- Páginas visitadas por idioma

### 🌐 Estructura de URLs

```
Español (idioma por defecto):
- Inicio: /
- Servicios: /servicios/
- Contacto: /contacto/
- Blog: /blog/

Inglés:
- Home: /en/
- Services: /en/services/
- Contact: /en/contact/
- Blog: /en/blog/
```

### 📋 Páginas Legales Multiidioma

Crear estas páginas para cada idioma:

**Español:**
- `/aviso-legal/` 
- `/politica-privacidad/`
- `/politica-cookies/`

**Inglés:**
- `/en/legal-notice/`
- `/en/privacy-policy/`
- `/en/cookies-policy/`

### 🔧 Funcionalidades Avanzadas

#### Formularios Multiidioma
```html
<!-- Formulario con idioma detectado -->
<form action="https://formspree.io/f/tu-id" method="POST">
  <input type="hidden" name="_language" value="{{ site.lang }}">
  <input type="text" name="name" placeholder="{% t contact.form.name %}">
  <button type="submit">{% t contact.form.submit %}</button>
</form>
```

#### Blog Multiidioma
```
_posts/
├── es/
│   └── 2024-01-01-articulo-espanol.md
└── en/
    └── 2024-01-01-english-article.md
```

#### Redirecciones Automáticas
```yaml
# En front matter
redirect_from:
  - /old-url/
  - /another-old-url/
```

### 🚀 Optimización de Rendimiento

- **CSS/JS minificado** automáticamente
- **Imágenes lazy loading** incluido
- **Service Worker** para PWA
- **Compresión GZIP** habilitada
- **CDN ready** (CloudFlare compatible)

### 📱 Responsive y Accesibilidad

- ✅ **Mobile-first** design
- ✅ **WCAG 2.1 AA** compliant
- ✅ **Contraste** optimizado
- ✅ **Navegación por teclado**
- ✅ **Screen readers** compatible

### 🔍 Testing y Validación

Antes del lanzamiento, verificar:

**SEO:**
- [ ] Google PageSpeed Insights (>90 puntos)
- [ ] Structured Data Testing Tool
- [ ] Google Search Console
- [ ] Hreflang tags validator

**Multiidioma:**
- [ ] Todas las traducciones correctas
- [ ] Selector de idioma funcional
- [ ] URLs correctas en ambos idiomas
- [ ] Formularios traducidos

**Técnico:**
- [ ] Validador HTML W3C
- [ ] Links internos funcionando
- [ ] Imágenes con alt text
- [ ] Sitemap.xml accesible

### 📈 Analytics y Conversión

#### Configuración Google Analytics 4:
```javascript
gtag('config', 'G-XXXXXXXXXX', {
  'language': '{{ site.lang }}',
  'country': 'ES',
  'custom_map': {
    'custom_parameter_1': 'language'
  }
});
```

#### Eventos personalizados:
- Cambio de idioma
- Envío de formularios por idioma
- Clicks en teléfono/email
- Tiempo en página por idioma

### 🆘 Solución de Problemas Multiidioma

**Las traducciones no aparecen:**
- Verifica la sintaxis YAML en `_i18n/es.yml` y `_i18n/en.yml`
- Asegúrate de usar `{% t key %}` correctamente

**URLs no funcionan:**
- Revisa la configuración `languages` en `_config.yml`
- Verifica que `default_lang` esté configurado

**Hreflang errors:**
- Comprueba que todas las páginas existan en ambos idiomas
- Verifica la estructura de URLs

### 📞 Soporte y Recursos

- [Jekyll Multiple Languages Plugin](https://github.com/kurtsson/jekyll-multiple-languages-plugin)
- [Jekyll SEO Tag](https://github.com/jekyll/jekyll-seo-tag)
- [Google Search Console](https://search.google.com/search-console)
- [Hreflang Testing Tool](https://hreflang.org/)

---

**🎯 Resultado Final:**
- Sitio web profesional en ES/EN
- SEO optimizado para ambos idiomas  
- Conversión mejorada con contenido localizado
- Rendimiento superior (>90 PageSpeed)
- Hosting gratuito en GitHub Pages

**Desarrollado para Perseus & RC Abogados**  
*Sitio web multiidioma optimizado para máximo alcance y conversión*
