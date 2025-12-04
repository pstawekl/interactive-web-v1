# Plan Optymalizacji Obrazów

## Cel
Zoptymalizować wszystkie obrazy w projekcie pod kątem wydajności i SEO, konwertując je do formatu WebP i zmniejszając rozmiary plików.

## Obrazy do zoptymalizowania

### 1. Obrazy zewnętrzne (do pobrania i konwersji)

#### `src/components/headings.tsx`
- **Obraz 1**: `https://media.istockphoto.com/id/910422618/photo/software-developer.jpg`
  - Pobierz jako: `src/assets/software-developer.jpg`
  - Konwertuj do: `src/assets/software-developer.webp`
  - Docelowy rozmiar: max 800x800px, < 100KB

- **Obraz 2**: `https://img.freepik.com/free-photo/data-server-racks-hub-room-with-big-data-computer-center-blue-interior-hosting-storage-hardware_90220-1033.jpg`
  - Pobierz jako: `src/assets/data-server.jpg`
  - Konwertuj do: `src/assets/data-server.webp`
  - Docelowy rozmiar: max 1200x900px, < 150KB

#### `src/views/login.tsx` i `src/views/register.tsx`
- **Obraz**: `https://images.unsplash.com/photo-1628717341663-0007b0ee2597`
  - Pobierz jako: `src/assets/login-background.jpg`
  - Konwertuj do: `src/assets/login-background.webp`
  - Docelowy rozmiar: max 1920x1080px, < 200KB

### 2. Obrazy lokalne (do konwersji)

#### Logo
- `src/assets/logo-horizontal.png` → `logo-horizontal.webp` (zachowaj PNG jako fallback)
- `src/assets/logo.png` → `logo.webp` (zachowaj PNG jako fallback)
- Docelowy rozmiar: < 50KB każdy

#### Inne obrazy
- `src/assets/premium-auto-website.png` → `premium-auto-website.webp`
- Docelowy rozmiar: max 1200px szerokość, < 150KB

## Kroki implementacji

### Krok 1: Pobranie obrazów zewnętrznych
```bash
# Utwórz folder na tymczasowe pliki
mkdir temp-images

# Pobierz obrazy (użyj przeglądarki lub narzędzi online)
# Zapisz je w temp-images/
```

### Krok 2: Konwersja do WebP

#### Opcja A: Użyj narzędzi online
1. Squoosh.app (https://squoosh.app/)
2. CloudConvert (https://cloudconvert.com/)
3. ImageOptim (https://imageoptim.com/)

#### Opcja B: Użyj narzędzi CLI
```bash
# Instalacja sharp (jeśli jeszcze nie zainstalowane)
npm install --save-dev sharp

# Skrypt do konwersji (utwórz scripts/convert-images.js)
```

### Krok 3: Aktualizacja komponentów

#### `src/components/headings.tsx`
```tsx
// Zmień zewnętrzne URL na lokalne importy
import softwareDeveloperImg from '@/assets/software-developer.webp';
import dataServerImg from '@/assets/data-server.webp';

// W komponencie zaktualizuj src:
<motion.img
  className="w-full rounded-lg"
  src={softwareDeveloperImg}
  alt="office content 1"
  width={612}
  height={612}
  loading="lazy"
  style={{ aspectRatio: '1/1' }}
/>

<motion.img
  className="w-full rounded-lg"
  src={dataServerImg}
  alt="office content 2"
  width={800}
  height={600}
  loading="lazy"
  style={{ aspectRatio: '4/3' }}
/>
```

#### `src/views/login.tsx` i `src/views/register.tsx`
```tsx
import loginBackgroundImg from '@/assets/login-background.webp';

// W komponencie:
<img 
  src={loginBackgroundImg} 
  alt="Login" 
  className="object-cover h-full w-full"
  loading="lazy"
  width={1920}
  height={1080}
/>
```

### Krok 4: Fallback dla przeglądarek bez wsparcia WebP (opcjonalnie)

Dla logo możesz użyć `<picture>` element:
```tsx
<picture>
  <source srcSet={LogoHorizontalWebP} type="image/webp" />
  <img src={LogoHorizontalPNG} alt="Logo" />
</picture>
```

## Checklist optymalizacji

- [ ] Pobrano wszystkie obrazy zewnętrzne
- [ ] Skonwertowano wszystkie obrazy do WebP
- [ ] Zoptymalizowano rozmiary (maksymalna szerokość: 1920px dla desktop, 800px dla mobile)
- [ ] Sprawdzono rozmiary plików (logo < 50KB, obrazy hero < 200KB, inne < 150KB)
- [ ] Zaktualizowano importy w komponentach
- [ ] Dodano width/height do wszystkich obrazów
- [ ] Użyto lazy loading dla obrazów poniżej folda
- [ ] Użyto `fetchpriority="high"` tylko dla LCP asset (logo w hero)
- [ ] Przetestowano działanie na różnych przeglądarkach

## Narzędzia pomocnicze

### Sprawdzanie rozmiaru plików
```bash
# Windows PowerShell
Get-ChildItem -Path src/assets -Recurse -Include *.webp,*.png,*.jpg | Select-Object Name, @{Name="Size(KB)";Expression={[math]::Round($_.Length/1KB,2)}}
```

### Skrypt do konwersji (Node.js)
```javascript
// scripts/convert-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../src/assets');
const files = fs.readdirSync(imagesDir).filter(f => /\.(png|jpg|jpeg)$/i.test(f));

files.forEach(file => {
  const inputPath = path.join(imagesDir, file);
  const outputPath = path.join(imagesDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
  
  sharp(inputPath)
    .webp({ quality: 85 })
    .toFile(outputPath)
    .then(() => console.log(`Converted ${file} to WebP`))
    .catch(err => console.error(`Error converting ${file}:`, err));
});
```

## Uwagi

1. **Zachowaj oryginalne pliki PNG** jako fallback dla przeglądarek bez wsparcia WebP
2. **Jakość WebP**: Użyj quality 80-85 dla dobry balans między jakością a rozmiarem
3. **Responsive images**: Rozważ użycie `srcset` dla różnych rozdzielczości ekranu
4. **Lazy loading**: Wszystkie obrazy poniżej folda powinny mieć `loading="lazy"`
5. **LCP optimization**: Logo w hero powinno mieć `loading="eager"` i `fetchpriority="high"`

## Po optymalizacji

Po wykonaniu wszystkich kroków:
1. Sprawdź rozmiar bundle'a: `npm run build` i sprawdź rozmiar folderu `dist/assets/images/`
2. Przetestuj na PageSpeed Insights: https://pagespeed.web.dev/
3. Sprawdź Core Web Vitals w Google Search Console

