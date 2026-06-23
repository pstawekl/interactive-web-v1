/* Interactive — Website UI kit sections.
   Recreates the homepage of interactive.net.pl using the design-system components.
   Exposes components on window for index.html to assemble. */
const NS = window.InteractiveDesignSystem_1f5bed;
const { Button, Badge, Card, Input, Textarea, Switch, SectionHeading,
        ServiceCard, StatCard, ProcessStep, TestimonialCard, FeatureRow } = NS;

const LOGO = '../../assets/logo-horizontal.png';
const Icon = ({ n, size = 20 }) => <i data-lucide={n} style={{ width: size, height: size }}></i>;

/* ---------------------------------------------------------------- Nav */
function Nav({ t, lang, setLang, scrolled }) {
  const links = [
    { id: 'offer', label: t.nav.offer },
    { href: 'ecommerce.html', label: 'E-commerce' },
    { href: 'pricing.html', label: lang === 'pl' ? 'Cennik' : 'Pricing' },
    { href: 'courses.html', label: lang === 'pl' ? 'Szkolenia' : 'Training' },
    { href: 'cases.html', label: lang === 'pl' ? 'Realizacje' : 'Work' },
    { href: 'contact.html', label: t.nav.contact },
  ];
  const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <header style={{
      position: 'sticky', top: 0, zIndex: 50, width: '100%',
      background: scrolled ? 'rgba(9,9,11,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background .3s, border-color .3s',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: 24 }}>
        <img src={LOGO} alt="Interactive" style={{ height: 34, width: 'auto' }} />
        <nav style={{ display: 'flex', gap: 4, marginLeft: 'auto' }}>
          {links.map((l, i) => {
            const css = {
              background: 'none', border: 'none', cursor: 'pointer', padding: '8px 14px',
              fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500, color: 'var(--text-muted)',
              borderRadius: 'var(--radius)', transition: 'color .2s', textDecoration: 'none',
            };
            const enter = e => e.currentTarget.style.color = 'var(--text-body)';
            const leave = e => e.currentTarget.style.color = 'var(--text-muted)';
            return l.href
              ? <a key={i} href={l.href} style={css} onMouseEnter={enter} onMouseLeave={leave}>{l.label}</a>
              : <button key={i} onClick={() => go(l.id)} style={css} onMouseEnter={enter} onMouseLeave={leave}>{l.label}</button>;
          })}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'var(--surface-elevated)', borderRadius: 'var(--radius-full)', padding: 3, border: '1px solid var(--border)' }}>
          {['pl', 'en'].map(l => (
            <button key={l} onClick={() => setLang(l)} style={{
              border: 'none', cursor: 'pointer', padding: '5px 12px', borderRadius: 'var(--radius-full)',
              fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 600, textTransform: 'uppercase',
              color: lang === l ? '#fff' : 'var(--text-muted)',
              background: lang === l ? 'var(--gradient-cta)' : 'transparent',
            }}>{l}</button>
          ))}
        </div>
        <Button variant="interactive" size="default" onClick={() => go('contact')}>{t.nav.cta}</Button>
      </div>
    </header>
  );
}

/* ---------------------------------------------------------------- Hero */
function Hero({ t }) {
  const go = (id) => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: 'smooth' }); };
  return (
    <section style={{ position: 'relative', overflow: 'hidden', padding: '120px 24px 110px' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(circle at 18% 22%, rgba(147,51,234,0.28), transparent 42%), radial-gradient(circle at 82% 30%, rgba(37,99,235,0.24), transparent 45%), radial-gradient(circle at 60% 90%, rgba(46,193,171,0.16), transparent 50%)' }} />
      <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
        <span className="in-eyebrow">{t.hero.eyebrow}</span>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, lineHeight: 1.04, letterSpacing: '-0.02em', margin: 0,
          background: 'var(--gradient-brand)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>
          {t.hero.title}
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1.05rem, 2vw, 1.35rem)', fontWeight: 400, lineHeight: 1.6, color: 'var(--text-muted)', maxWidth: 640, margin: 0 }}>
          {t.hero.subtitle}
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', justifyContent: 'center', marginTop: 8 }}>
          <Button variant="interactive" size="lg" onClick={() => go('offer')} rightIcon={<Icon n="arrow-down" size={18} />}>{t.hero.cta}</Button>
          <Button variant="outline" size="lg" onClick={() => go('process')}>{t.hero.cta2}</Button>
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginTop: 18 }}>
          <Badge variant="brand">React</Badge><Badge variant="brand">TypeScript</Badge>
          <Badge variant="brand">AI</Badge><Badge variant="brand">ERP</Badge>
          <Badge variant="success">99.9% uptime</Badge>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Offer */
function Offer({ t }) {
  const aligns = ['right', 'center', 'left'];
  return (
    <section id="offer" style={{ padding: '88px 24px', background: 'linear-gradient(180deg, var(--background), var(--surface-card))' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56 }}>
        <SectionHeading eyebrow={t.offer.eyebrow} title={t.offer.title} description={t.offer.desc} />
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', justifyContent: 'center' }}>
          {t.offer.items.map((it, i) => (
            <ServiceCard key={i} title={it.title} icon={<Icon n={it.icon} size={30} />} price={it.price}
              description={it.desc} align={aligns[i]} ctaLabel={t.nav.offer === 'Services' ? 'Check' : 'Sprawdź'} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Stats */
function Stats({ t }) {
  return (
    <section style={{ position: 'relative', padding: '88px 24px', background: 'var(--gradient-band)', overflow: 'hidden' }}>
      <div aria-hidden style={{ position: 'absolute', inset: 0, opacity: 0.12, backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 44 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#fff', textAlign: 'center', margin: 0, letterSpacing: '-0.015em' }}>{t.stats.title}</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 22, width: '100%' }}>
          {t.stats.items.map((s, i) => (
            <StatCard key={i} icon={<Icon n={s.icon} size={26} />} value={s.value} label={s.label}
              gradient={['var(--gradient-cta)','linear-gradient(90deg,#9333ea,#db2777)','linear-gradient(90deg,#db2777,#ef4444)','linear-gradient(90deg,#06b6d4,#2563eb)'][i]} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Process */
function Process({ t }) {
  return (
    <section id="process" style={{ padding: '88px 24px', background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 56 }}>
        <SectionHeading eyebrow={t.process.eyebrow} title={t.process.title} description={t.process.desc} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22, width: '100%' }}>
          {t.process.steps.map((s, i) => <ProcessStep key={i} {...s} icon={<Icon n={s.icon} size={20} />} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- About (values + achievements) */
function About({ t, lang }) {
  const values = lang === 'pl'
    ? [
        { icon: 'award', title: 'Doświadczenie', desc: '7+ lat w branży IT — od infrastruktury krytycznej po systemy ERP.' },
        { icon: 'shield', title: 'Bezpieczeństwo', desc: 'Zgodność z RODO/GDPR, certyfikaty SSL, regularne backupy.' },
        { icon: 'zap', title: 'Szybkość', desc: 'Średni czas realizacji 4–6 tygodni, bez kompromisów w jakości.' },
        { icon: 'target', title: 'Skuteczność', desc: 'Średni wzrost konwersji o 150%. Skupiamy się na wynikach.' },
      ]
    : [
        { icon: 'award', title: 'Experience', desc: '7+ years in IT — from critical infrastructure to ERP systems.' },
        { icon: 'shield', title: 'Security', desc: 'GDPR compliance, SSL certificates, regular backups.' },
        { icon: 'zap', title: 'Speed', desc: 'Average delivery 4–6 weeks, no quality compromises.' },
        { icon: 'target', title: 'Effectiveness', desc: 'Average 150% conversion lift. We focus on results.' },
      ];
  return (
    <section id="about" style={{ padding: '88px 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
        <SectionHeading eyebrow={lang === 'pl' ? '// O nas' : '// About'} title={lang === 'pl' ? 'Inżynieria z myśleniem biznesowym' : 'Engineering with a business mindset'}
          description={lang === 'pl' ? 'Od 2017 roku pomagamy firmom osiągać sukces online — produkty, które działają, skalują się i dają realną wartość od pierwszego dnia.' : 'Since 2017 we help businesses succeed online — products that perform, scale and deliver real value from day one.'} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 22, width: '100%' }}>
          {values.map((v, i) => (
            <Card key={i} hoverable padding={26}>
              <div style={{ display: 'inline-flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 'var(--radius-full)', background: 'var(--gradient-cta)', color: '#fff', marginBottom: 16 }}>
                <Icon n={v.icon} size={22} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, margin: '0 0 6px', color: 'var(--text-body)' }}>{v.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{v.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Testimonials */
function Testimonials({ t }) {
  return (
    <section style={{ padding: '88px 24px', background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
        <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        <div style={{ display: 'flex', gap: 22, flexWrap: 'wrap', justifyContent: 'center' }}>
          {t.testimonials.items.map((it, i) => <TestimonialCard key={i} {...it} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- FAQ */
function Faq({ t }) {
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '88px 24px', background: 'var(--background)' }}>
      <div style={{ maxWidth: 820, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {t.faq.items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', background: 'var(--surface-card)', overflow: 'hidden', borderColor: isOpen ? 'rgba(147,51,234,0.4)' : 'var(--border)', transition: 'border-color .3s' }}>
                <button onClick={() => setOpen(isOpen ? -1 : i)} style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '18px 22px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 600, color: 'var(--text-body)', flex: 1 }}>{f.q}</span>
                  <span style={{ color: 'var(--brand-purple)', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform .3s', fontSize: 22, lineHeight: 1 }}>+</span>
                </button>
                <div style={{ maxHeight: isOpen ? 240 : 0, overflow: 'hidden', transition: 'max-height .35s var(--ease-out-expo)' }}>
                  <p style={{ margin: 0, padding: '0 22px 20px', fontFamily: 'var(--font-body)', fontSize: 14.5, lineHeight: 1.65, color: 'var(--text-muted)' }}>{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Contact */
function Contact({ t }) {
  const [sent, setSent] = React.useState(false);
  return (
    <section id="contact" style={{ padding: '88px 24px', background: 'var(--surface-card)' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 48, alignItems: 'center' }}>
        <div>
          <SectionHeading align="left" eyebrow={t.contact.eyebrow} title={t.contact.title} description={t.contact.desc} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginTop: 26 }}>
            <a href="mailto:jakub.stawski@interactive.net.pl" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14 }}><Icon n="mail" size={18} /> jakub.stawski@interactive.net.pl</a>
            <a href="tel:+48518275470" style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', textDecoration: 'none', fontSize: 14 }}><Icon n="phone" size={18} /> +48 518 275 470</a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--text-muted)', fontSize: 14 }}><Icon n="map-pin" size={18} /> Zduńska Wola, Polska</span>
          </div>
        </div>
        <Card padding={28}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 14, minHeight: 280, textAlign: 'center' }}>
              <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'var(--gradient-cta)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}><Icon n="check" size={28} /></div>
              <p style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: 'var(--text-body)', margin: 0 }}>{t.contact.sent}</p>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{t.contact.name}</label><Input required placeholder="Jan Kowalski" /></div>
              <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{t.contact.email}</label><Input required type="email" placeholder="jan@firma.pl" /></div>
              <div><label className="in-eyebrow" style={{ display: 'block', marginBottom: 6 }}>{t.contact.message}</label><Textarea required rows={4} placeholder="…" /></div>
              <Button variant="interactive" size="lg" type="submit" rightIcon={<Icon n="send" size={16} />}>{t.contact.send}</Button>
            </form>
          )}
        </Card>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- Footer */
function Footer({ t, lang }) {
  const socials = ['facebook', 'instagram', 'linkedin', 'github'];
  return (
    <footer style={{ padding: '56px 24px 36px', background: 'var(--background)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 36 }}>
        <div style={{ maxWidth: 320 }}>
          <img src={LOGO} alt="Interactive" style={{ height: 32, marginBottom: 16 }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{t.footer.tagline}</p>
          <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
            {socials.map(s => (
              <a key={s} href="#" onClick={e => e.preventDefault()} style={{ width: 36, height: 36, borderRadius: 'var(--radius)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', background: 'var(--surface-elevated)' }}><Icon n={s} size={16} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 style={{ fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 700, color: 'var(--text-body)', margin: '0 0 14px' }}>{t.footer.menu}</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[t.nav.offer, t.nav.about, t.nav.process, t.nav.contact].map((l, i) => (
              <a key={i} href="#" onClick={e => e.preventDefault()} style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--text-muted)', textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <Badge variant="success" style={{ alignSelf: 'flex-start' }}>RODO / GDPR</Badge>
          <Badge variant="brand" style={{ alignSelf: 'flex-start' }}>SSL</Badge>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-subtle)', marginTop: 'auto' }}>interactive.net.pl</span>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: '32px auto 0', paddingTop: 24, borderTop: '1px solid var(--border)', textAlign: 'center', fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-subtle)' }}>
        © {new Date().getFullYear()} Interactive. {t.footer.rights}
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Offer, Stats, Process, About, Testimonials, Faq, Contact, Footer, INIcon: Icon });
