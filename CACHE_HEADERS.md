# Konfiguracja Cache Headers dla statycznych plików

## Wymagania

Aby naprawić audyt PageSpeed "Używaj efektywnego czasu przechowywania w pamięci podręcznej", należy skonfigurować odpowiednie nagłówki HTTP Cache-Control dla różnych typów plików.

## Konfiguracja dla różnych serwerów

### Nginx

Dodaj do konfiguracji Nginx (`/etc/nginx/sites-available/interactive.net.pl`):

```nginx
server {
    # ... inne ustawienia ...

    # Obrazy - długoterminowe cache (1 rok)
    location ~* \.(jpg|jpeg|png|gif|ico|svg|webp)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # CSS i JavaScript - długoterminowe cache (1 rok)
    location ~* \.(css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # Fonty - długoterminowe cache (1 rok)
    location ~* \.(woff|woff2|eot|ttf|otf)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # HTML - krótkoterminowe cache (1 godzina) lub no-cache dla dynamicznych
    location ~* \.html$ {
        expires 1h;
        add_header Cache-Control "public, must-revalidate";
    }
}
```

### Apache (.htaccess)

Dodaj do pliku `.htaccess` w katalogu głównym:

```apache
# Obrazy - długoterminowe cache (1 rok)
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType image/x-icon "access plus 1 year"
</IfModule>

# CSS i JavaScript - długoterminowe cache (1 rok)
<IfModule mod_expires.c>
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType text/javascript "access plus 1 year"
</IfModule>

# Fonty - długoterminowe cache (1 rok)
<IfModule mod_expires.c>
    ExpiresByType font/woff "access plus 1 year"
    ExpiresByType font/woff2 "access plus 1 year"
    ExpiresByType application/font-woff "access plus 1 year"
    ExpiresByType application/font-woff2 "access plus 1 year"
</IfModule>

# HTML - krótkoterminowe cache (1 godzina)
<IfModule mod_expires.c>
    ExpiresByType text/html "access plus 1 hour"
</IfModule>

# Cache-Control headers
<IfModule mod_headers.c>
    # Obrazy, CSS, JS, Fonty - immutable cache
    <FilesMatch "\.(jpg|jpeg|png|gif|ico|svg|webp|css|js|woff|woff2|eot|ttf|otf)$">
        Header set Cache-Control "public, max-age=31536000, immutable"
    </FilesMatch>
    
    # HTML - must-revalidate
    <FilesMatch "\.html$">
        Header set Cache-Control "public, max-age=3600, must-revalidate"
    </FilesMatch>
</IfModule>
```

### Vercel (vercel.json)

Dodaj do pliku `vercel.json` w katalogu głównym:

```json
{
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.(jpg|jpeg|png|gif|ico|svg|webp|css|js|woff|woff2|eot|ttf|otf)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*)\\.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, must-revalidate"
        }
      ]
    }
  ]
}
```

### Netlify (_headers)

Utwórz plik `public/_headers`:

```
/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.jpg
  Cache-Control: public, max-age=31536000, immutable

/*.jpeg
  Cache-Control: public, max-age=31536000, immutable

/*.png
  Cache-Control: public, max-age=31536000, immutable

/*.gif
  Cache-Control: public, max-age=31536000, immutable

/*.svg
  Cache-Control: public, max-age=31536000, immutable

/*.webp
  Cache-Control: public, max-age=31536000, immutable

/*.css
  Cache-Control: public, max-age=31536000, immutable

/*.js
  Cache-Control: public, max-age=31536000, immutable

/*.woff
  Cache-Control: public, max-age=31536000, immutable

/*.woff2
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=3600, must-revalidate
```

## Wyjaśnienie

- **Obrazy, CSS, JS, Fonty**: `max-age=31536000` (1 rok) + `immutable` - pliki te mają hashe w nazwach dzięki Vite, więc można bezpiecznie cache'ować je długoterminowo
- **HTML**: `max-age=3600` (1 godzina) + `must-revalidate` - HTML może się zmieniać, więc potrzebuje krótszego cache z możliwością rewalidacji

## Weryfikacja

Po wdrożeniu sprawdź nagłówki w DevTools (Network tab):
- Obrazy, CSS, JS powinny mieć `Cache-Control: public, max-age=31536000, immutable`
- HTML powinien mieć `Cache-Control: public, max-age=3600, must-revalidate`

