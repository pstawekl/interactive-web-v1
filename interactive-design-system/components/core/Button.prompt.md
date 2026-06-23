A clickable action control; use `variant="interactive"` for the primary gradient CTA and `outline`/`secondary`/`ghost` for lower-emphasis actions.

```jsx
<Button variant="interactive" size="lg">Dowiedz się więcej</Button>
<Button variant="outline">Sprawdź</Button>
<Button variant="interactive" rightIcon={<ArrowRight size={16} />}>Skontaktuj się</Button>
```

Variants: `default` (solid foreground), `interactive` (blue→purple gradient + glow on hover), `outline`, `secondary`, `ghost`, `link`.
Sizes: `sm` · `default` · `md` · `lg` · `icon`.
Hover lifts + glows (CTA) or tints (ghost/outline); press scales to 0.97. Pass `leftIcon`/`rightIcon` for lucide icons.
