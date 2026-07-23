source "https://rubygems.org"

# Usar la versión oficial de GitHub Pages
gem "github-pages", group: :jekyll_plugins

# Solo plugins oficialmente soportados por GitHub Pages
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.15"
  gem "jekyll-sitemap", "~> 1.4"
  gem "jekyll-seo-tag", "~> 2.8"
end

# Windows y JRuby - dependencias del sistema
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Optimización de rendimiento para Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
