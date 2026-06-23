The offer card from the homepage "Czego szukasz?" row — gradient title, gradient icon chip, from-price, description, CTA. Lifts with a brand wash on hover.

```jsx
import { TbWorldWww } from 'react-icons/tb';
<ServiceCard
  title="E-commerce"
  icon={<TbWorldWww size={32} />}
  price={1699}
  description="Sklepy internetowe, które zwielokrotnią Twoją sprzedaż."
  ctaLabel="Sprawdź"
/>
```

`align` controls text/icon alignment (the homepage staggers left/center/right). Price renders as `od 1699 zł` with gradient digits.
