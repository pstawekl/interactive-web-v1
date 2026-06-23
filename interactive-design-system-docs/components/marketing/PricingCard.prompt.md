Package / pricing tier card. The `featured` tier gets a gradient border, glow, lift and ribbon. Compose the feature list with `<FeatureRow>`.

```jsx
<PricingCard name="Standard" price={2999} period="/ projekt" featured
  description="Dla większości firm — do 5 podstron." ctaLabel="Wybierz pakiet">
  <FeatureRow>Do 5 podstron</FeatureRow>
  <FeatureRow>Zaawansowane SEO</FeatureRow>
  <FeatureRow>Panel administracyjny</FeatureRow>
  <FeatureRow muted>Integracja z ERP</FeatureRow>
</PricingCard>
```

Price renders as `od 2999 zł` with gradient digits; set `priceLabel=""` to drop the "od". Put 3 cards in a row with the middle one `featured`.
