# Interactive Design System

Prywatny rejestr shadcn/ui dla ekosystemu Interactive Apps. Ten katalog jest samodzielnym źródłem komponentów i tokenów marki, przeznaczonym do późniejszego wydzielenia jako osobne repozytorium Git.

Rejestr nie jest klasycznym pakietem npm i nie wymaga bundlowania. Pliki w `registry/` są dystrybuowane jako źródła `.tsx` i `.css` przez mechanizm shadcn registry.

## Elementy rejestru

- `brand` (`registry:base`) - fundament marki: zmienne CSS, fonty z Google Fonts CDN, rozszerzenia Tailwind, style bazowe i utility klasy Interactive.
- `space-grotesk` (`registry:font`) - font display/headings.
- `manrope` (`registry:font`) - font body/UI.
- `jetbrains-mono` (`registry:font`) - font techniczny dla etykiet, cen i kodu.
- `utils` (`registry:lib`) - funkcja `cn()` oparta o `clsx` i `tailwind-merge`.
- `button` (`registry:ui`) - przycisk z wariantami shadcn/new-york oraz gradientowym CTA `interactive`.
- `card` (`registry:ui`) - karta z wariantami `default`, `feature`, `glass`, `elevated` i opcją `hoverable`.
- `input` (`registry:ui`) - pole tekstowe dopasowane do tokenów Interactive.
- `badge` (`registry:ui`) - mała etykieta statusu/kategorii z wariantami `neutral`, `brand`, `gradient`, `success`, `outline`.
- `switch` (`registry:ui`) - przełącznik Radix z gradientowym stanem aktywnym.
- `textarea` (`registry:ui`) - wielowierszowe pole formularza.
- `section-heading` (`registry:ui`) - nagłówek sekcji z eyebrow, opisem i opcjonalnym gradientem tytułu.

## Instalacja w appce-konsumencie

Po opublikowaniu rejestru skonfiguruj namespace:

```bash
npx shadcn@latest registry add @interactive=https://twoj-host/r/{name}.json
```

Instalacja fundamentu marki:

```bash
npx shadcn@latest add @interactive/brand
```

Instalacja atomów:

```bash
npx shadcn@latest add @interactive/button
npx shadcn@latest add @interactive/card
npx shadcn@latest add @interactive/input
npx shadcn@latest add @interactive/badge
npx shadcn@latest add @interactive/switch
npx shadcn@latest add @interactive/textarea
npx shadcn@latest add @interactive/section-heading
```

Do lokalnego testu można wskazać adres serwowanego katalogu registry albo item JSON wygenerowany/obsługiwany przez shadcn registry server:

```bash
npx shadcn@latest list http://localhost:3000/r/registry.json
npx shadcn@latest add http://localhost:3000/r/button.json
```

## Świadomie wykluczone

Te komponenty są specyficzne dla strony marketingowej Interactive i nie są częścią atomów UI dla aplikacji produktowych:

- `ServiceCard` - karta oferty marketingowej.
- `StatCard` - blok metryk marketingowych.
- `ProcessStep` - element procesu sprzedażowego/usługowego.
- `TestimonialCard` - komponent opinii klientów.
- `PricingCard` - karta pakietu cenowego strony.
- `CaseCard` - karta realizacji/case study.
- `FeatureRow` - wiersz cech używany w sekcjach marketingowych.
- Sekcje hero, nawigacja, footer, formularz kontaktowy, mapy i widoki lokalnego SEO - zawierają treść, routing lub logikę konkretnej strony.

Do rozważenia później:

- `Select`, `Tooltip`, `Spinner`, `ScrollDownButton` - istnieją w produkcji, ale nie były częścią bieżącego zakresu atomów.

## Jak dodać nowy element

1. Dodaj plik źródłowy do `registry/default/ui`, `registry/default/lib` albo innego odpowiedniego katalogu.
2. Używaj aliasów shadcn, np. `@/lib/utils`, zamiast ścieżek względnych do aplikacji źródłowej.
3. Dodaj wpis w `registry.json` z poprawnym `name`, `type`, `title`, `description`, `files` i `target`.
4. Jeśli element wymaga paczek npm, dodaj je w `dependencies`.
5. Jeśli element wymaga tokenów marki lub `cn()`, dodaj `registryDependencies`: `["brand", "utils"]`.
6. Zweryfikuj JSON i ścieżki plików przed publikacją.

## Uwagi źródłowe

Komponenty `button`, `card`, `input`, `switch`, `textarea` i `section-heading` zostały przeniesione z produkcyjnego `src/components/ui`. W produkcyjnym kodzie nie było `src/components/ui/badge.tsx`, więc `badge` został odtworzony jako shadcn/new-york TSX na podstawie `interactive-design-system-docs/components/core/Badge.jsx` i tokenów z `src/index.css`.
