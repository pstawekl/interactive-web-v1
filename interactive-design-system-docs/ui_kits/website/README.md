# Website UI kit — interactive.net.pl

A high-fidelity recreation of the Interactive marketing homepage, built entirely
from the design-system components. Bilingual (PL default / EN) with a live
language toggle, sticky glass nav, animated FAQ accordion and a fake contact form.

## Files
- `index.html` — assembles the full page; owns language + scroll state. Open this.
- `data.js` — `window.IN_DATA` — PL/EN copy lifted from the production translations.
- `sections.jsx` — `Nav`, `Hero`, `Offer`, `Stats`, `Process`, `About`, `Testimonials`, `Faq`, `Contact`, `Footer`.

## Components used
Button, Badge, Card, Input, Textarea, SectionHeading (core) ·
ServiceCard, StatCard, ProcessStep, TestimonialCard (marketing).

## Conventions demonstrated
- Dark theme as default; full-saturation `--gradient-band` stats section.
- Gradient display headings (`--gradient-brand`), mono `//` eyebrows.
- Hover = lift + purple-glow border; CTA = gradient + glow.
- Lucide icons (matching the production `lucide-react` usage).

## Notes
- Icons load from the Lucide UMD CDN and are hydrated via `lucide.createIcons()`.
- Source of truth: `pstawekl/interactive-web-v1` (`src/components/*`). This kit is a
  cosmetic recreation — it does not copy the production component implementations.
