# Interactive — Design System

Brand, tokens, components and a website UI kit for **Interactive** — a Polish
software house (Zduńska Wola, founded 2017) building modern web apps, online
stores, learning platforms and AI-driven solutions. Tagline energy: *solid
engineering with a business-first mindset — products that perform, scale and
deliver value from day one.*

Consumers link one file: **`styles.css`** (imports every token + font-face).
Components are exposed at runtime on `window.InteractiveDesignSystem_1f5bed`.

---

## Sources (for deeper recreation)

- **GitHub — production website:** `pstawekl/interactive-web-v1` (branch `master`)
  — Vite + React + TypeScript + Tailwind + shadcn/ui + framer-motion. The visual
  language, copy and component contracts here are lifted from `src/components/*`,
  `src/lib/translations.ts`, `tailwind.config.js` and `src/index.css`.
  Explore it to recreate screens with higher fidelity.
- **Live site:** https://interactive.net.pl/ (Polish; bilingual PL/EN).
- **Brand assets (uploaded):** `assets/logo-horizontal.png`, `assets/logo-mark.png`.
- **Founder / contact:** Jakub Stawski — jakub.stawski@interactive.net.pl.

---

## Brand at a glance

The identity is a **spectral gradient wordmark** — angular, technical, monospaced-
feeling letterforms running **violet → indigo → blue → teal** (sampled exact:
`#AF14F7 → #6366F1 → #548EC1 → #2EC1AB`). The product UI layers a second signature
gradient for headings and CTAs: **blue → purple → pink** (`#2563EB → #9333EA →
#DB2777`). Everything sits on a **near-black neutral** (shadcn "slate", hue 240);
**dark is the default theme** (the site forces it on load).

---

## CONTENT FUNDAMENTALS

**Voice.** Confident, results-led, plain-spoken. Copy leads with the business
outcome, not the technology: *"strona zwiększyła liczbę zapytań o 200%"*, *"średni
wzrost konwersji o 150%"*. Specific numbers everywhere (7+ lat, 45+ projektów, 98%
zadowolonych, 99.9% uptime, 4–6 tygodni, 24–48h wycena). Credibility is built with
concrete proof points (critical national infrastructure, a top-10k-user European
ERP), never vague adjectives.

**Person.** First-person plural **"my / we"** for the company ("Łączymy…",
"Dostarczamy…", "We combine…"); direct second-person **"Ty / you"** to the reader
("Twój sukces", "Czego szukasz?", "your business"). Warm but professional —
addresses the client as a partner.

**Language.** **Polish is primary** (target market), with a full **English** mirror.
Polish is informal-professional (per-Ciebie tone, no stiff formality). Keep both
locales in sync when adding copy — see `ui_kits/website/data.js`.

**Casing & punctuation.** Sentence case for body and most headings; display
headings are short statements/questions ("Czego szukasz?", "Liczby, które mówią
same za siebie"). Prices read **"od 1699 zł"** (lowercase "od", currency after the
number). A monospace **`//` eyebrow** prefixes section labels (a dev-tool wink).

**No emoji.** The brand never uses emoji. Iconography is line icons (see below).
Tone stays technical and trustworthy — emoji would undercut the enterprise message.

**Vibe.** "A serious engineering studio that talks like a growth partner." Young +
experienced, fast + safe, modern + enterprise-grade.

---

## VISUAL FOUNDATIONS

**Color.** Neutral base is shadcn slate (hue 240): `--background #09090B`, cards
`#0E0E11`/`#18181B`, borders `#27272A`. Brand colour arrives almost exclusively as
**gradient**, rarely as flat fills — purple `#9333EA` is the single "primary" solid
(focus rings, links, icon accents). Status: green/amber/red/blue. Light theme exists
(`.light` / `[data-theme="light"]`) but dark is canonical. A second, softer **pastel
gradient** (`--gradient-pastel`, lilac→periwinkle→aqua — sampled from the printed
business cards, `assets/business-cards.jpg`) carries the more *advertising/marketing*
surfaces: CTA bands, brand cards, early-bird banners — used sparingly with `#16161a`
text for a premium-print feel.

**Type.** Display **Space Grotesk** (geometric, squared — mirrors the angular logo),
body/UI **Manrope**, technical accents **JetBrains Mono** (eyebrows, code, prices).
Headings are big and bold (700–800), tightened tracking (`-0.015em`), line-height
~1.05; body is lighter (400) and airy (1.6–1.7). The hero/section H2s use the brand
gradient clipped to text — the single most recognisable type move.
*(Substitution note — see Caveats: the production site ships no custom font; these
three Google families were chosen to fit the mark.)*

**Spacing & layout.** 4px grid. Sections breathe: `py-24` desktop / `py-16` mobile.
Content caps at `max-w-7xl` (80rem), centered, generous gutters. Grids use `gap`
(not margins); auto-fit minmax for card rows.

**Backgrounds.** No photography in chrome; instead **soft radial brand glows** bleed
behind the hero (purple + blue + teal blobs at low opacity), and one **full-bleed
saturated gradient band** carries the stats ("Liczby…"). A faint **dotted grid**
texture (`radial-gradient … 40px`) overlays the band/footer at ~10% opacity. Section
transitions are subtle vertical gradients between `--background` and `--surface-card`.
Imagery, when present (case studies), is full-colour and modern, lightly darkened on
hover.

**Corner radii.** shadcn base **8px** for buttons/inputs; cards round harder —
**16px** (xl) standard, **24px** (2xl) for feature / pricing / stat / testimonial
cards; pills (`full`) for badges, icon chips and avatars.

**Cards.** Solid `--surface-card`, **1px** border (feature/offer cards use **2px**),
soft neutral shadow (`--shadow-lg`). On hover: **lift −6 to −10px**, shadow deepens
to `--shadow-2xl`, border tints to **purple at 40% alpha**, and a faint
`--gradient-wash` (10% brand tint) fades in. Overlay/floating cards use **glass**
(translucent `--glass-bg` + 10px backdrop-blur + hairline white border).

**Shadows & glow.** Elevation is neutral and soft (no coloured drop-shadows on
content). **Brand glow is reserved** for intent: CTAs (`--glow-cta`), feature icon
chips (`--glow-purple`) and hover. Don't glow ordinary cards.

**Borders.** Hairline `#27272A` default, `#3F3F46` strong. Inputs show a 1px border
that turns purple on focus with a **3px purple ring** (`rgba(147,51,234,.25)`).

**Iconography in chips.** Feature/value/step icons sit in a **circular gradient
chip** (CTA gradient fill, white icon), 44–64px.

**Motion.** framer-motion springs + expo easing (`cubic-bezier(0.19,1,0.22,1)`).
Entrances: fade + small translate/scale (opacity 0→1, y 20–50→0, scale 0.9→1),
staggered ~0.1s. Hover: `scale(1.03–1.05)` + lift; icon chips do a playful wobble
(`rotate [0,-10,10,0]`). Press: `scale(0.95–0.97)`. Counters spring up. Links get a
**gradient underline that scales-x 0→1 from the left**. Durations 150ms (fast) /
300ms (base) / 600ms (slow). Respect `prefers-reduced-motion`.

**Transparency & blur.** Used purposefully: sticky nav becomes glass on scroll;
overlay cards and the mobile menu use backdrop-blur; brand glows are low-opacity
radials. Never blur primary reading surfaces.

---

## ICONOGRAPHY

- **System:** line icons, ~2px stroke, rounded — **Lucide** (`lucide-react` in
  production) plus **Tabler** (`react-icons/tb`) for a few marketing glyphs
  (`TbWorldWww`, `TbBrandReact`, `TbBook2`). This DS standardises on **Lucide**,
  loaded from the Lucide UMD CDN in cards/kits and hydrated with
  `lucide.createIcons()`.
- **Usage:** icons live in circular gradient chips for features/values/steps; bare
  (currentColor) in nav, contact rows and footer socials. Common set: `globe`,
  `atom`, `graduation-cap`, `calendar`, `code`, `users`, `clock`, `message-square`,
  `palette`, `rocket`, `award`, `shield`, `zap`, `target`, `mail`, `phone`,
  `map-pin`, `check`, `send`, `arrow-down`, `facebook`, `instagram`, `linkedin`,
  `github`.
- **Emoji:** never. **Unicode glyphs:** only `★` (rating stars), `✓` (feature
  checks) and `+`/`×` (FAQ toggle) — small functional marks, not decoration.
- **Logos:** `assets/logo-horizontal.png` (primary wordmark) and
  `assets/logo-mark.png` (bracket `[IN]` mark). Both are full-colour gradient on
  transparent — place on dark (preferred) or white; keep clear space ≈ the bracket
  height. Don't recolour or place on busy imagery.
- To use a different icon set, match the 2px rounded-stroke line style and flag it.

---

## Index / manifest

**Root**
- `styles.css` — entry point (imports only). Link this.
- `readme.md` — this guide. · `SKILL.md` — portable Agent-Skill wrapper.

**`tokens/`** — `fonts.css` · `colors.css` · `typography.css` · `spacing.css` ·
`effects.css` (radii/shadows/glow/glass/motion) · `base.css` (resets + brand helpers
`.in-gradient-text`, `.in-eyebrow`, `.in-glass`).

**`guidelines/`** — 19 specimen cards (Colors, Type, Spacing, Brand) shown in the
Design System tab.

**`components/core/`** — `Button`, `Badge`, `Card`, `Input`, `Textarea`, `Switch`,
`SectionHeading`. Card: `core.card.html`.
**`components/marketing/`** — `ServiceCard`, `StatCard`, `ProcessStep`,
`TestimonialCard`, `FeatureRow`, `PricingCard`, `CaseCard`. Cards: `marketing.card.html`,
`pricing.card.html`, `cases.card.html`.
Each component ships `<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`.

**`ui_kits/website/`** — bilingual recreation: `index.html` (homepage),
`ecommerce.html` (Sklepy), `pricing.html` (Strony WWW packages), `courses.html`
(Szkolenia IT), `cases.html` (Realizacje), `contact.html` (Kontakt + map), plus shared
`data.js`, `sections.jsx`, `pages.jsx`, `pages2.jsx`, `README.md`.

**`assets/`** — `logo-horizontal.png`, `logo-mark.png`, `case-premium-auto.png`,
`business-cards.jpg` (printed brand reference).

### Using a component (in a card / kit)
```html
<link rel="stylesheet" href="/styles.css">
<script src="/_ds_bundle.js"></script>
<script type="text/babel">
  const { Button, ServiceCard } = window.InteractiveDesignSystem_1f5bed;
</script>
```

---

## Caveats / substitutions

- **Fonts are substitutions.** The production app ships no custom typeface
  (Tailwind/system default). Space Grotesk + Manrope + JetBrains Mono were chosen to
  match the angular, technical wordmark and are loaded via **Google Fonts CDN** (so
  the compiler reports 0 bundled `@font-face`). If you have licensed brand fonts,
  drop the `.woff2` files in `assets/fonts` and replace the `@import` in
  `tokens/fonts.css` with local `@font-face` rules.
- **Icons** load from the Lucide CDN; for offline/production use, install
  `lucide-react` (already a site dependency).
