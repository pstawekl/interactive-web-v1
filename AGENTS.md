# Codex instructions for Interactive website

This repository contains the current Interactive company website.

The folder `/interactive-design-system` contains the official Interactive Design System. Treat it as the primary visual and component reference.

Before making UI changes, inspect:
- `/interactive-design-system`
- `docs/INTERACTIVE_DESIGN_SYSTEM.md`
- `src/index.css`
- `tailwind.config.js`
- `src/routes/__root.tsx`
- `src/views/index.tsx`
- relevant components in `src/components`

## Goal

Refactor the current website so it visually matches the Interactive Design System as closely as possible.

## Keep

Do not break:
- React + Vite + TypeScript stack
- TanStack Router routing
- existing routes
- SEOHead
- structured data
- translations
- EmailJS contact form
- reCAPTCHA
- Leaflet map
- local SEO pages
- build process

Do not manually edit:
- `src/routeTree.gen.ts`

## Design rules

Use the design system as source of truth.

Prioritize:
- dark slate visual identity
- premium software-house look
- blue → purple → pink UI gradients
- violet → indigo → blue → teal brand accents where appropriate
- Space Grotesk for display/headings if available
- Manrope for body/UI if available
- JetBrains Mono for technical labels, prices and `//` eyebrow labels
- large section spacing
- rounded 16–24px cards
- glass overlays sparingly
- Lucide icons in gradient circular chips
- strong CTA hierarchy
- business-first Polish copywriting

Avoid:
- generic shadcn default look
- light-mode-first styling
- random gradients
- excessive playful animations
- emoji
- removing SEO content
- large rewrites without need

## Work style

Make changes in small steps:
1. global tokens and CSS
2. core UI components
3. header/footer
4. homepage hero
5. homepage sections
6. service pages
7. contact page
8. cleanup/build

After each step, run:

```bash
npm run build