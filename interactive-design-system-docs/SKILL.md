---
name: interactive-design
description: Use this skill to generate well-branded interfaces and assets for Interactive (a Polish software house — websites, online stores, web apps and AI solutions), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `readme.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets
out and create static HTML files for the user to view. If working on production code,
you can copy assets and read the rules here to become an expert in designing with this
brand.

Key starting points:
- `styles.css` — link this one file to pick up all tokens (colors, type, spacing,
  effects). Dark is the default theme.
- `tokens/` — CSS custom properties. Brand colour is delivered as gradient
  (`--gradient-brand` blue→purple→pink, `--gradient-cta`, `--gradient-logo`).
- `components/core/` + `components/marketing/` — React components, exposed at runtime
  on `window.InteractiveDesignSystem_1f5bed`. Read each `<Name>.prompt.md` for usage.
- `ui_kits/website/` — a full bilingual (PL/EN) homepage recreation to copy from.
- `assets/` — logos (`logo-horizontal.png`, `logo-mark.png`).

Brand essentials: angular spectral-gradient wordmark; near-black slate neutrals;
Space Grotesk display / Manrope body / JetBrains Mono accents; gradient headings;
mono `//` eyebrows; line icons (Lucide) in circular gradient chips; results-led,
numbers-heavy copy in Polish-first (EN mirror); **no emoji**; soft neutral shadows
with brand glow reserved for CTAs.

If the user invokes this skill without any other guidance, ask them what they want to
build or design, ask some questions, and act as an expert designer who outputs HTML
artifacts _or_ production code, depending on the need.
