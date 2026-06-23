# Interactive Design System

## Brand direction

Interactive is a premium software / digital services brand. The visual style should be dark, modern, technical, business-first and results-driven.

The canonical theme is dark slate. Light mode is not the main identity and should not drive component design.

## Colors

Use dark slate backgrounds:
- page background: #09090B
- elevated card: #0E0E11 / #18181B
- borders: #27272A
- muted text: zinc/slate grays
- primary text: white / near-white

Brand gradients:
- Wordmark / spectral brand gradient: violet → indigo → blue → teal
- UI / CTA gradient: blue → purple → pink

Use gradients for:
- headings
- CTA buttons
- icon chips
- active/focus states
- selected badges

Avoid flat generic blue as the only brand color.

## Typography

Use:
- Space Grotesk for display/headings
- Manrope for body/UI
- JetBrains Mono for technical accents, eyebrow labels, prices, code-like labels and `//` prefixes

Headings should feel bold, premium, spacious and technical.

## Layout

Use:
- 4px spacing grid
- large vertical section spacing
- desktop sections around py-24
- mobile sections around py-16
- max-width around 80rem
- rounded cards: 16px–24px
- generous whitespace
- glass overlays sparingly

## Components

Core components:
- Button
- Badge
- Card
- Input
- Textarea
- Switch
- SectionHeading

Marketing components:
- ServiceCard
- StatCard
- ProcessStep
- TestimonialCard
- FeatureRow
- PricingCard
- CaseCard

Use Lucide-style line icons in circular gradient icon chips.

## Buttons

Primary CTA:
- gradient blue → purple → pink
- rounded-xl or rounded-2xl
- subtle glow
- strong hover lift
- no childish effects

Secondary CTA:
- transparent / glass / dark card
- zinc border
- hover border purple/blue

## Copywriting

Language: Polish-first.

Tone:
- confident
- concrete
- business-first
- informal-professional
- per “Ty”
- results-led
- numbers-heavy where possible

Avoid:
- emoji
- generic startup fluff
- overly soft wording
- too many vague promises

Use:
- konkrety
- czas realizacji
- wzrost konwersji
- liczby
- dowody
- technologie
- bezpieczeństwo
- skalowalność

## Current website migration goals

The current website should be refactored to match this design system as closely as possible.

Priorities:
1. Make dark slate the default visual identity.
2. Replace generic shadcn defaults with Interactive tokens.
3. Standardize gradients, cards, buttons and sections.
4. Improve homepage sections to look premium and consistent.
5. Keep React + Vite + TanStack Router architecture.
6. Keep current routing, SEO, translations and contact form behavior.
7. Do not break build.