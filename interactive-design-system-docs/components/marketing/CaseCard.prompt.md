Portfolio / case-study tile. Pass an `image` screenshot, or omit it for a branded gradient panel with the project initials.

```jsx
<CaseCard
  category="E-commerce"
  title="K9 Wear"
  metric="+280%"
  metricLabel="sprzedaży online w 1. roku"
  description="Sklep z odzieżą dla trenerów psów pracujących."
  tags={['WooCommerce', 'Stripe']}
  gradient="linear-gradient(135deg,#9333ea,#db2777)"
/>
```

Use in a responsive grid (auto-fit minmax 320px). Headline `metric` renders with gradient digits; tags are mono chips.
