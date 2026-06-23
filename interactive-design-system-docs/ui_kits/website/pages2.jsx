/* Interactive — UI-kit pages, part 2 (E-commerce, Contact, Case studies).
   Reuses the design-system components + Nav/Footer chrome. */
const _NS2 = window.InteractiveDesignSystem_1f5bed;
const { Button: _Btn2, Badge: _Bdg2, Card: _Crd2, Input: _Inp2, Textarea: _Txa2,
        SectionHeading: _SH2, PricingCard: _PC2, FeatureRow: _FR2, CaseCard: _CC2 } = _NS2;
const _Ic2 = window.INIcon;

const PAGE_DATA2 = {
  pl: {
    ecommerce: {
      eyebrow: '// Sklepy internetowe',
      title: 'Sklepy online, które sprzedają',
      desc: 'Profesjonalne sklepy z intuicyjnym panelem, szybkie i bezpieczne. Integracja z płatnościami i ERP w standardzie.',
      services: [
        { icon: 'shopping-cart', title: 'Intuicyjny panel', desc: 'Setki zamówień dziennie bez problemów. Średni wzrost sprzedaży o 250%.' },
        { icon: 'gauge', title: 'Wydajność', desc: 'Czas ładowania < 2 s. Wyższa konwersja dzięki lepszemu UX (+180%).' },
        { icon: 'shield-check', title: 'Bezpieczeństwo', desc: 'SSL, zgodność z RODO/GDPR. Buduje zaufanie i konwersję (+120%).' },
        { icon: 'credit-card', title: 'Płatności', desc: 'Wszystkie bramki w jednym miejscu. Finalizacja zakupów +200%.' },
      ],
      packages: [
        { name: 'Basic', price: 2499, period: '/ sklep', description: 'Dla małych sklepów.',
          features: [['Do 100 produktów', 1], ['Responsywny design', 1], ['Integracja z płatnościami', 1], ['Powiadomienia email', 1], ['System lojalnościowy', 0], ['Integracja z ERP', 0]] },
        { name: 'Standard', price: 4999, period: '/ sklep', featured: true, description: 'Dla średnich sklepów — 500+ zamówień/mies.',
          features: [['Do 1000 produktów', 1], ['Integracja z płatnościami', 1], ['Powiadomienia email + SMS', 1], ['System lojalnościowy', 1], ['Panel administracyjny', 1], ['Integracja z ERP', 0]] },
        { name: 'Premium', price: 9999, period: '/ sklep', description: 'Dla dużych sklepów. Skaluje się z biznesem.',
          features: [['Nielimitowane produkty', 1], ['Integracja z ERP', 1], ['System lojalnościowy', 1], ['Wsparcie 24/7', 1], ['Monitoring 99.9% uptime', 1], ['Dedykowany opiekun', 1]] },
      ],
      tech: ['WooCommerce', 'PrestaShop', 'Shopify', 'Stripe', 'Przelewy24', 'PayU'],
      cta: 'Wybierz pakiet',
    },
    cases: {
      eyebrow: '// Realizacje',
      title: 'Projekty, które przynoszą wyniki',
      desc: '45+ zrealizowanych projektów, 98% zadowolonych klientów. Oto kilka z nich.',
      filters: ['Wszystkie', 'Strony WWW', 'E-commerce', 'Aplikacje'],
      items: [
        { title: 'Premium Auto', category: 'Strony WWW', metric: '+250%', metricLabel: 'zapytań o ofertę', image: '../../assets/case-premium-auto.png', tags: ['React', 'TypeScript', 'SEO'], filter: 'Strony WWW' },
        { title: 'K9 Wear', category: 'E-commerce', metric: '+280%', metricLabel: 'sprzedaży online', icon: 'shopping-bag', gradient: 'linear-gradient(135deg,#9333ea,#db2777)', tags: ['WooCommerce', 'Stripe'], filter: 'E-commerce', desc: 'Sklep z odzieżą dla trenerów psów pracujących. Setki zamówień miesięcznie.' },
        { title: 'System ERP', category: 'Aplikacje', metric: '99.9%', metricLabel: 'uptime · 10k+ użytkowników', icon: 'server', gradient: 'linear-gradient(135deg,#2563eb,#6366f1)', tags: ['Enterprise', '.NET', 'MSSQL'], filter: 'Aplikacje', desc: 'Jeden z najpopularniejszych systemów ERP w Europie. Tysiące użytkowników jednocześnie.' },
        { title: 'OjLala', category: 'Strony WWW', metric: '+200%', metricLabel: 'więcej klientów', icon: 'sparkles', gradient: 'linear-gradient(135deg,#db2777,#f59e0b)', tags: ['Rezerwacje', 'React'], filter: 'Strony WWW', desc: 'Rezerwacja terminów w salonie kosmetycznym online — 24/7.' },
        { title: 'eButik', category: 'E-commerce', metric: '+220%', metricLabel: 'konwersji', icon: 'shopping-cart', gradient: 'linear-gradient(135deg,#06b6d4,#2563eb)', tags: ['PrestaShop', 'ERP'], filter: 'E-commerce', desc: 'Sklep z odzieżą premium. Integracja z ERP automatyzuje procesy.' },
        { title: 'Danusia', category: 'Strony WWW', metric: '+300%', metricLabel: 'rezerwacji w Q1', icon: 'mountain', gradient: 'linear-gradient(135deg,#2ec1ab,#2563eb)', tags: ['Rezerwacje 24/7'], filter: 'Strony WWW', desc: 'Wynajem apartamentu w Zakopanem. System rezerwacji online działa non-stop.' },
      ],
    },
    contact: {
      eyebrow: '// Kontakt',
      title: 'Porozmawiajmy o Twoim projekcie',
      desc: 'Masz pytanie, potrzebujesz wyceny lub wsparcia? Napisz lub zadzwoń — odpowiadamy w 24–48 godzin.',
      info: [
        { icon: 'mail', label: 'Email', value: 'jakub.stawski@interactive.net.pl', href: 'mailto:jakub.stawski@interactive.net.pl' },
        { icon: 'phone', label: 'Telefon', value: '+48 518 275 470', href: 'tel:+48518275470' },
        { icon: 'map-pin', label: 'Lokalizacja', value: 'Zduńska Wola, Polska', href: null },
        { icon: 'clock', label: 'Odpowiedź', value: '24–48 godzin', href: null },
      ],
      formTitle: 'Napisz do nas',
      name: 'Imię i nazwisko', email: 'Email', subject: 'Temat', message: 'Wiadomość',
      send: 'Wyślij wiadomość', sent: 'Dziękujemy! Odezwiemy się w ciągu 24–48 godzin.',
      mapLabel: 'Zduńska Wola',
    },
  },
  en: {
    ecommerce: {
      eyebrow: '// Online stores',
      title: 'Online stores that sell',
      desc: 'Professional stores with an intuitive panel — fast and secure. Payment and ERP integration as standard.',
      services: [
        { icon: 'shopping-cart', title: 'Intuitive panel', desc: 'Hundreds of orders a day, no problems. Average 250% sales lift.' },
        { icon: 'gauge', title: 'Performance', desc: 'Load time < 2s. Higher conversion through better UX (+180%).' },
        { icon: 'shield-check', title: 'Security', desc: 'SSL, GDPR compliance. Builds trust and conversion (+120%).' },
        { icon: 'credit-card', title: 'Payments', desc: 'All gateways in one place. Checkout completion +200%.' },
      ],
      packages: [
        { name: 'Basic', price: 2499, period: '/ store', description: 'For small stores.',
          features: [['Up to 100 products', 1], ['Responsive design', 1], ['Payment integration', 1], ['Email notifications', 1], ['Loyalty system', 0], ['ERP integration', 0]] },
        { name: 'Standard', price: 4999, period: '/ store', featured: true, description: 'For medium stores — 500+ orders/mo.',
          features: [['Up to 1000 products', 1], ['Payment integration', 1], ['Email + SMS notifications', 1], ['Loyalty system', 1], ['Admin panel', 1], ['ERP integration', 0]] },
        { name: 'Premium', price: 9999, period: '/ store', description: 'For large stores. Scales with your business.',
          features: [['Unlimited products', 1], ['ERP integration', 1], ['Loyalty system', 1], ['24/7 support', 1], ['99.9% uptime monitoring', 1], ['Dedicated manager', 1]] },
      ],
      tech: ['WooCommerce', 'PrestaShop', 'Shopify', 'Stripe', 'Przelewy24', 'PayU'],
      cta: 'Choose package',
    },
    cases: {
      eyebrow: '// Case studies',
      title: 'Projects that drive results',
      desc: '45+ completed projects, 98% satisfied clients. Here are a few of them.',
      filters: ['All', 'Websites', 'E-commerce', 'Apps'],
      items: [
        { title: 'Premium Auto', category: 'Websites', metric: '+250%', metricLabel: 'inquiries', image: '../../assets/case-premium-auto.png', tags: ['React', 'TypeScript', 'SEO'], filter: 'Websites' },
        { title: 'K9 Wear', category: 'E-commerce', metric: '+280%', metricLabel: 'online sales', icon: 'shopping-bag', gradient: 'linear-gradient(135deg,#9333ea,#db2777)', tags: ['WooCommerce', 'Stripe'], filter: 'E-commerce', desc: 'Clothing for working-dog trainers. Hundreds of orders a month.' },
        { title: 'ERP System', category: 'Apps', metric: '99.9%', metricLabel: 'uptime · 10k+ users', icon: 'server', gradient: 'linear-gradient(135deg,#2563eb,#6366f1)', tags: ['Enterprise', '.NET', 'MSSQL'], filter: 'Apps', desc: 'One of the most popular ERP systems in Europe. Thousands of concurrent users.' },
        { title: 'OjLala', category: 'Websites', metric: '+200%', metricLabel: 'more clients', icon: 'sparkles', gradient: 'linear-gradient(135deg,#db2777,#f59e0b)', tags: ['Booking', 'React'], filter: 'Websites', desc: 'Online beauty-salon appointment booking — 24/7.' },
        { title: 'eButik', category: 'E-commerce', metric: '+220%', metricLabel: 'conversion', icon: 'shopping-cart', gradient: 'linear-gradient(135deg,#06b6d4,#2563eb)', tags: ['PrestaShop', 'ERP'], filter: 'E-commerce', desc: 'Premium clothing store. ERP integration automates processes.' },
        { title: 'Danusia', category: 'Websites', metric: '+300%', metricLabel: 'bookings in Q1', icon: 'mountain', gradient: 'linear-gradient(135deg,#2ec1ab,#2563eb)', tags: ['24/7 booking'], filter: 'Websites', desc: 'Apartment rental in Zakopane. Online booking runs non-stop.' },
      ],
    },
    contact: {
      eyebrow: '// Contact',
      title: "Let's talk about your project",
      desc: 'Question, quote or support? Write or call — we reply within 24–48 hours.',
      info: [
        { icon: 'mail', label: 'Email', value: 'jakub.stawski@interactive.net.pl', href: 'mailto:jakub.stawski@interactive.net.pl' },
        { icon: 'phone', label: 'Phone', value: '+48 518 275 470', href: 'tel:+48518275470' },
        { icon: 'map-pin', label: 'Location', value: 'Zduńska Wola, Poland', href: null },
        { icon: 'clock', label: 'Response', value: '24–48 hours', href: null },
      ],
      formTitle: 'Write to us',
      name: 'Full name', email: 'Email', subject: 'Subject', message: 'Message',
      send: 'Send message', sent: 'Thank you! We will be in touch within 24–48 hours.',
      mapLabel: 'Zduńska Wola',
    },
  },
};

/* ----------------------------------------------------- E-commerce page */
function EcommercePage({ lang }) {
  const e = PAGE_DATA2[lang].ecommerce;
  return (
    <React.Fragment>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 56px' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle at 20% 18%, rgba(147,51,234,0.24), transparent 44%), radial-gradient(circle at 82% 26%, rgba(37,99,235,0.20), transparent 46%)' }} />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <_SH2 eyebrow={e.eyebrow} title={e.title} description={e.desc} />
        </div>
      </section>

      <section style={{ padding: '10px 24px 70px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
          {e.services.map((s, i) => (
            <_Crd2 key={i} hoverable padding={24}>
              <div style={{ display: 'inline-flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-full)', background: 'var(--gradient-cta)', color: '#fff', marginBottom: 16 }}>
                <_Ic2 n={s.icon} size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, margin: '0 0 6px', color: 'var(--text-body)' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{s.desc}</p>
            </_Crd2>
          ))}
        </div>
      </section>

      <section style={{ padding: '54px 24px 40px', background: 'var(--surface-card)' }}>
        <div style={{ maxWidth: 820, margin: '0 auto 44px' }}>
          <_SH2 eyebrow={lang === 'pl' ? '// Cennik sklepów' : '// Store pricing'} title={lang === 'pl' ? 'Pakiety sklepów' : 'Store packages'} />
        </div>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
          {e.packages.map((tier, i) => (
            <_PC2 key={i} name={tier.name} price={tier.price} period={tier.period} featured={tier.featured} description={tier.description} ctaLabel={e.cta}>
              {tier.features.map((f, j) => <_FR2 key={j} muted={!f[1]} icon={f[1] ? '✓' : '×'}>{f[0]}</_FR2>)}
            </_PC2>
          ))}
        </div>
        <div style={{ maxWidth: 1120, margin: '48px auto 0', display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
          {e.tech.map((tg, i) => <_Bdg2 key={i} variant="neutral">{tg}</_Bdg2>)}
        </div>
      </section>
    </React.Fragment>
  );
}

/* ----------------------------------------------------- Case studies page */
function CaseStudiesPage({ lang }) {
  const c = PAGE_DATA2[lang].cases;
  const [filter, setFilter] = React.useState(c.filters[0]);
  const all = c.filters[0];
  const visible = c.items.filter(it => filter === all || it.filter === filter);
  return (
    <React.Fragment>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 40px' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle at 22% 16%, rgba(196,169,232,0.18), transparent 44%), radial-gradient(circle at 80% 24%, rgba(127,210,207,0.14), transparent 46%)' }} />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
          <_SH2 eyebrow={c.eyebrow} title={c.title} description={c.desc} />
        </div>
      </section>

      <section style={{ padding: '8px 24px 90px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 40 }}>
            {c.filters.map(f => {
              const on = filter === f;
              return (
                <button key={f} onClick={() => setFilter(f)} style={{
                  padding: '8px 18px', borderRadius: 'var(--radius-full)', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600,
                  border: '1px solid ' + (on ? 'transparent' : 'var(--border)'),
                  color: on ? '#fff' : 'var(--text-muted)',
                  background: on ? 'var(--gradient-cta)' : 'transparent',
                  transition: 'all .2s',
                }}>{f}</button>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
            {visible.map((it, i) => (
              <_CC2 key={it.title} title={it.title} category={it.category} metric={it.metric} metricLabel={it.metricLabel}
                description={it.desc} image={it.image} gradient={it.gradient} tags={it.tags}
                icon={it.icon ? <_Ic2 n={it.icon} size={22} /> : null} />
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ----------------------------------------------------- Contact page */
function ContactPage({ lang }) {
  const k = PAGE_DATA2[lang].contact;
  const [sent, setSent] = React.useState(false);
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 90px' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 16% 14%, rgba(147,51,234,0.20), transparent 42%), radial-gradient(circle at 86% 20%, rgba(46,193,171,0.14), transparent 46%)' }} />
      <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto' }}>
        <div style={{ maxWidth: 760, marginBottom: 48 }}>
          <_SH2 align="left" eyebrow={k.eyebrow} title={k.title} description={k.desc} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 32, alignItems: 'start' }}>
          {/* left: info + map */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
              {k.info.map((it, i) => {
                const inner = (
                  <React.Fragment>
                    <div style={{ display: 'inline-flex', width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius)', background: 'var(--surface-elevated)', border: '1px solid var(--border)', color: 'var(--brand-purple)', marginBottom: 12 }}>
                      <_Ic2 n={it.icon} size={18} />
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-subtle)', marginBottom: 3 }}>{it.label}</div>
                    <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--text-body)', wordBreak: 'break-word' }}>{it.value}</div>
                  </React.Fragment>
                );
                const cardStyle = { padding: 18, borderRadius: 'var(--radius-xl)', background: 'var(--surface-card)', border: '1px solid var(--border)', textDecoration: 'none', display: 'block' };
                return it.href
                  ? <a key={i} href={it.href} style={cardStyle}>{inner}</a>
                  : <div key={i} style={cardStyle}>{inner}</div>;
              })}
            </div>
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '1px solid var(--border)', height: 260, position: 'relative' }}>
              <iframe title={k.mapLabel} width="100%" height="100%" style={{ border: 0, filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg) contrast(0.9)' }} loading="lazy"
                src="https://maps.google.com/maps?q=Zdu%C5%84ska%20Wola%2C%20Poland&t=&z=13&ie=UTF8&iwloc=&output=embed"></iframe>
            </div>
          </div>

          {/* right: form */}
          <_Crd2 padding={30}>
            {sent ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, minHeight: 360, textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--gradient-cta)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><_Ic2 n="check" size={30} /></div>
                <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 19, color: 'var(--text-body)', margin: 0, maxWidth: 320 }}>{k.sent}</p>
              </div>
            ) : (
              <form onSubmit={(ev) => { ev.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, margin: 0, color: 'var(--text-body)' }}>{k.formTitle}</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                  <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{k.name}</label><_Inp2 required placeholder="Jan Kowalski" /></div>
                  <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{k.email}</label><_Inp2 required type="email" placeholder="jan@firma.pl" /></div>
                </div>
                <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{k.subject}</label><_Inp2 placeholder={lang === 'pl' ? 'Nowy sklep internetowy' : 'New online store'} /></div>
                <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{k.message}</label><_Txa2 required rows={5} placeholder="…" /></div>
                <_Btn2 variant="interactive" size="lg" type="submit" rightIcon={<_Ic2 n="send" size={16} />}>{k.send}</_Btn2>
              </form>
            )}
          </_Crd2>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { EcommercePage, CaseStudiesPage, ContactPage });
