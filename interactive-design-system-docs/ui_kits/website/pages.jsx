/* Interactive — additional UI-kit pages (Pricing, Courses).
   Reuses Nav/Footer from sections.jsx and the design-system components. */
const _NS = window.InteractiveDesignSystem_1f5bed;
const { Button: _Button, Badge: _Badge, Card: _Card, SectionHeading: _SH,
        PricingCard, FeatureRow: _FR, ServiceCard: _SC } = _NS;
const _Icon = window.INIcon;

const PAGE_DATA = {
  pl: {
    pricing: {
      eyebrow: '// Cennik · Strony WWW',
      title: 'Wybierz pakiet dla swojej firmy',
      desc: 'Przejrzyste pakiety bez ukrytych kosztów. Poprawki i 12 miesięcy wsparcia w cenie.',
      tiers: [
        { name: 'Basic', price: 1699, period: '/ projekt', description: 'Idealny dla małych firm i freelancerów.',
          features: [['Strona One Page', 1], ['Responsywny design', 1], ['Podstawowe SEO', 1], ['Formularz kontaktowy', 1], ['Panel administracyjny', 0], ['Integracja z systemami', 0]] },
        { name: 'Standard', price: 2999, period: '/ projekt', featured: true, description: 'Najczęstszy wybór — dla większości firm.',
          features: [['Do 5 podstron', 1], ['Zaawansowane SEO', 1], ['Formularz kontaktowy', 1], ['Panel administracyjny', 1], ['Blog / aktualności', 1], ['Integracja z ERP', 0]] },
        { name: 'Premium', price: 5999, period: '/ projekt', description: 'Dla dużych firm i sklepów online.',
          features: [['Nielimitowane podstrony', 1], ['Panel administracyjny', 1], ['Integracja z systemami (CRM/ERP)', 1], ['Zaawansowane SEO + audyt', 1], ['Pełne wsparcie 24/7', 1], ['Dedykowany opiekun', 1]] },
      ],
      cta: 'Wybierz pakiet',
      band: { title: 'Nie wiesz, który pakiet wybrać?', desc: 'Umów bezpłatną konsultację — dobierzemy rozwiązanie do Twoich celów i budżetu.', cta: 'Bezpłatna konsultacja' },
    },
    courses: {
      eyebrow: '// Szkolenia IT',
      title: 'Zostań programistą — ucz się od praktyków',
      desc: 'Szkolenia z programowania i technologii webowych. Małe grupy (max 8 osób), realne projekty, certyfikat.',
      earlyBird: 'Nowość! 10% rabatu dla pierwszych 10 osób, które zapiszą się na kurs.',
      tracks: [
        { name: 'Front-end', price: 2499, period: '/ kurs', icon: 'layout', description: 'HTML, CSS, JavaScript, React — podstawy.',
          features: [['HTML, CSS, JavaScript', 1], ['React podstawy', 1], ['5 dni szkolenia', 1], ['Materiały + kod źródłowy', 1], ['Certyfikat ukończenia', 1]] },
        { name: 'Back-end', price: 3499, period: '/ kurs', featured: true, icon: 'server', description: 'Node.js, Python, REST API, bazy danych.',
          features: [['Node.js, Python', 1], ['Podstawy REST API', 1], ['14 dni szkolenia', 1], ['Materiały + kod źródłowy', 1], ['Certyfikat ukończenia', 1]] },
        { name: 'Full-stack', price: 5999, period: '/ kurs', icon: 'layers', description: 'Next.js, PostgreSQL, React zaawansowane.',
          features: [['Next.js, PostgreSQL', 1], ['React zaawansowane', 1], ['30 dni szkolenia', 1], ['Materiały + kod źródłowy', 1], ['Certyfikat + portfolio', 1]] },
      ],
      perks: [
        { icon: 'users', title: 'Małe grupy', desc: 'Max 8 osób — indywidualne podejście, 3× lepsze wyniki.' },
        { icon: 'book-open', title: 'Materiały', desc: 'Kompletne materiały i dostęp do kodu źródłowego. Wartość 2000+ zł.' },
        { icon: 'calendar-clock', title: 'Elastyczność', desc: 'Online lub stacjonarnie, weekendy lub wieczory.' },
        { icon: 'award', title: 'Certyfikat', desc: 'Certyfikat ukończenia do CV i profilu LinkedIn.' },
      ],
      cta: 'Zapisz się',
    },
  },
  en: {
    pricing: {
      eyebrow: '// Pricing · Websites',
      title: 'Choose the package for your business',
      desc: 'Transparent packages, no hidden costs. Revisions and 12 months of support included.',
      tiers: [
        { name: 'Basic', price: 1699, period: '/ project', description: 'Perfect for small businesses and freelancers.',
          features: [['One Page website', 1], ['Responsive design', 1], ['Basic SEO', 1], ['Contact form', 1], ['Admin panel', 0], ['Systems integration', 0]] },
        { name: 'Standard', price: 2999, period: '/ project', featured: true, description: 'The most common choice — for most companies.',
          features: [['Up to 5 pages', 1], ['Advanced SEO', 1], ['Contact form', 1], ['Admin panel', 1], ['Blog / news', 1], ['ERP integration', 0]] },
        { name: 'Premium', price: 5999, period: '/ project', description: 'For large companies and online stores.',
          features: [['Unlimited pages', 1], ['Admin panel', 1], ['Systems integration (CRM/ERP)', 1], ['Advanced SEO + audit', 1], ['Full 24/7 support', 1], ['Dedicated manager', 1]] },
      ],
      cta: 'Choose package',
      band: { title: 'Not sure which package to pick?', desc: 'Book a free consultation — we will match a solution to your goals and budget.', cta: 'Free consultation' },
    },
    courses: {
      eyebrow: '// IT Training',
      title: 'Become a developer — learn from practitioners',
      desc: 'Training in programming and web technologies. Small groups (max 8), real projects, certificate.',
      earlyBird: 'New! 10% off for the first 10 people who sign up.',
      tracks: [
        { name: 'Front-end', price: 2499, period: '/ course', icon: 'layout', description: 'HTML, CSS, JavaScript, React — fundamentals.',
          features: [['HTML, CSS, JavaScript', 1], ['React basics', 1], ['5 days of training', 1], ['Materials + source code', 1], ['Completion certificate', 1]] },
        { name: 'Back-end', price: 3499, period: '/ course', featured: true, icon: 'server', description: 'Node.js, Python, REST API, databases.',
          features: [['Node.js, Python', 1], ['REST API basics', 1], ['14 days of training', 1], ['Materials + source code', 1], ['Completion certificate', 1]] },
        { name: 'Full-stack', price: 5999, period: '/ course', icon: 'layers', description: 'Next.js, PostgreSQL, advanced React.',
          features: [['Next.js, PostgreSQL', 1], ['Advanced React', 1], ['30 days of training', 1], ['Materials + source code', 1], ['Certificate + portfolio', 1]] },
      ],
      perks: [
        { icon: 'users', title: 'Small groups', desc: 'Max 8 people — individual attention, 3× better results.' },
        { icon: 'book-open', title: 'Materials', desc: 'Complete materials and source-code access. Worth 2000+ zł.' },
        { icon: 'calendar-clock', title: 'Flexibility', desc: 'Online or in person, weekends or evenings.' },
        { icon: 'award', title: 'Certificate', desc: 'Completion certificate for your CV and LinkedIn.' },
      ],
      cta: 'Sign up',
    },
  },
};

/* ----------------------------------------------------- shared page chrome */
function PageHero({ eyebrow, title, desc }) {
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 64px' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 22% 16%, rgba(196,169,232,0.20), transparent 44%), radial-gradient(circle at 80% 24%, rgba(127,210,207,0.16), transparent 46%)' }} />
      <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto' }}>
        <_SH eyebrow={eyebrow} title={title} description={desc} />
      </div>
    </section>
  );
}

/* ----------------------------------------------------- Pricing page */
function PricingPage({ lang }) {
  const t = window.IN_DATA[lang];
  const p = PAGE_DATA[lang].pricing;
  return (
    <React.Fragment>
      <PageHero eyebrow={p.eyebrow} title={p.title} desc={p.desc} />
      <section style={{ padding: '20px 24px 80px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
          {p.tiers.map((tier, i) => (
            <PricingCard key={i} name={tier.name} price={tier.price} period={tier.period}
              featured={tier.featured} description={tier.description} ctaLabel={p.cta}>
              {tier.features.map((f, j) => <_FR key={j} muted={!f[1]} icon={f[1] ? '✓' : '×'}>{f[0]}</_FR>)}
            </PricingCard>
          ))}
        </div>
      </section>
      {/* consultation band — pastel marketing treatment */}
      <section style={{ padding: '0 24px 88px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', position: 'relative', overflow: 'hidden',
          borderRadius: 'var(--radius-2xl)', padding: '48px 40px', textAlign: 'center',
          background: 'var(--gradient-pastel)' }}>
          <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.18, backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1px, transparent 0)', backgroundSize: '34px 34px' }} />
          <div style={{ position: 'relative' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem,3vw,2.2rem)', fontWeight: 800, color: '#16161a', margin: '0 0 10px', letterSpacing: '-0.015em' }}>{p.band.title}</h2>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(20,20,26,0.78)', margin: '0 auto 22px', maxWidth: 540, lineHeight: 1.6 }}>{p.band.desc}</p>
            <button style={{ height: 50, padding: '0 30px', border: 'none', cursor: 'pointer', fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 15, color: '#fff', background: '#16161a', borderRadius: 'var(--radius)' }}>{p.band.cta}</button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

/* ----------------------------------------------------- Courses page */
function CoursesPage({ lang }) {
  const c = PAGE_DATA[lang].courses;
  return (
    <React.Fragment>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '96px 24px 56px' }}>
        <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(circle at 22% 16%, rgba(196,169,232,0.20), transparent 44%), radial-gradient(circle at 80% 24%, rgba(127,210,207,0.16), transparent 46%)' }} />
        <div style={{ position: 'relative', maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <_SH eyebrow={c.eyebrow} title={c.title} description={c.desc} />
          <div style={{ marginTop: 22, display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 18px', borderRadius: 'var(--radius-full)', background: 'rgba(196,169,232,0.12)', border: '1px solid rgba(196,169,232,0.35)' }}>
            <_Icon n="sparkles" size={16} />
            <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: 'var(--brand-pastel-lilac)' }}>{c.earlyBird}</span>
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 24px 70px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'stretch' }}>
          {c.tracks.map((tr, i) => (
            <PricingCard key={i} name={tr.name} price={tr.price} period={tr.period}
              featured={tr.featured} description={tr.description} ctaLabel={c.cta}>
              {tr.features.map((f, j) => <_FR key={j} muted={!f[1]} icon={f[1] ? '✓' : '×'}>{f[0]}</_FR>)}
            </PricingCard>
          ))}
        </div>
      </section>

      <section style={{ padding: '0 24px 90px', background: 'var(--surface-card)', paddingTop: 70 }}>
        <div style={{ maxWidth: 1120, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22 }}>
          {c.perks.map((perk, i) => (
            <_Card key={i} hoverable padding={26}>
              <div style={{ display: 'inline-flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-full)', background: 'var(--gradient-cta)', color: '#fff', marginBottom: 16 }}>
                <_Icon n={perk.icon} size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 17, fontWeight: 700, margin: '0 0 6px', color: 'var(--text-body)' }}>{perk.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{perk.desc}</p>
            </_Card>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
}

/* ----------------------------------------------------- cross-page nav */
function PageNav({ lang, setLang, active }) {
  const t = window.IN_DATA[lang];
  const links = [
    { href: 'index.html', label: t.nav.home, key: 'home' },
    { href: 'ecommerce.html', label: 'E-commerce', key: 'ecommerce' },
    { href: 'pricing.html', label: lang === 'pl' ? 'Cennik' : 'Pricing', key: 'pricing' },
    { href: 'courses.html', label: lang === 'pl' ? 'Szkolenia' : 'Training', key: 'courses' },
    { href: 'cases.html', label: lang === 'pl' ? 'Realizacje' : 'Work', key: 'cases' },
    { href: 'contact.html', label: t.nav.contact, key: 'contact' },
  ];
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%',
      background: 'rgba(9,9,11,0.72)', backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <a href="index.html"><img src="../../assets/logo-horizontal.png" alt="Interactive" style={{ height: 34, width: 'auto', display: 'block' }} /></a>
        <nav style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          {links.map(l => (
            <a key={l.key} href={l.href} style={{ padding: '8px 14px', fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
              color: active === l.key ? 'var(--text-body)' : 'var(--text-muted)', textDecoration: 'none', borderRadius: 'var(--radius)' }}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--surface-elevated)', borderRadius: 'var(--radius-full)', padding: 3, border: '1px solid var(--border)' }}>
          {['pl', 'en'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{ border: 'none', cursor: 'pointer', padding: '5px 12px', borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase',
              color: lang === l ? '#fff' : 'var(--text-muted)', background: lang === l ? 'var(--gradient-cta)' : 'transparent' }}>{l}</button>
          ))}
        </div>
        <_Button variant="interactive" onClick={() => { window.location.href = 'contact.html'; }}>{t.nav.cta}</_Button>
      </div>
    </header>
  );
}

Object.assign(window, { PricingPage, CoursesPage, PageNav });
