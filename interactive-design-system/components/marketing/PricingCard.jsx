import React from 'react';

/**
 * Interactive — PricingCard
 * Package tier card (Basic / Standard / Premium). The `featured` tier lifts,
 * gets a gradient border + glow and a "Najpopularniejszy" ribbon.
 * Children render the FeatureRow list.
 */
export function PricingCard({
  name,
  price,
  currency = 'zł',
  priceLabel = 'od',
  period,
  description,
  featured = false,
  badge,
  ctaLabel = 'Wybierz pakiet',
  onCta,
  children,
  className = '',
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', display: 'flex', flexDirection: 'column', gap: 18,
        width: 320, maxWidth: '100%', padding: '32px 28px',
        background: 'var(--surface-card)',
        borderRadius: 'var(--radius-2xl)',
        border: featured ? '2px solid transparent' : '1px solid var(--border)',
        backgroundImage: featured
          ? 'linear-gradient(var(--surface-card), var(--surface-card)), var(--gradient-cta)'
          : 'none',
        backgroundOrigin: 'border-box',
        backgroundClip: featured ? 'padding-box, border-box' : 'border-box',
        boxShadow: featured ? 'var(--glow-cta)' : (hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)'),
        transform: featured ? 'translateY(-10px)' : (hover ? 'translateY(-6px)' : 'none'),
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
        ...style,
      }}
    >
      {(featured || badge) && (
        <span style={{
          position: 'absolute', top: -13, left: '50%', transform: 'translateX(-50%)',
          fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em',
          textTransform: 'uppercase', color: '#fff', padding: '5px 14px',
          borderRadius: 'var(--radius-full)', background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-md)', whiteSpace: 'nowrap',
        }}>{badge || 'Najpopularniejszy'}</span>
      )}

      <div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, margin: '0 0 4px', color: 'var(--text-body)' }}>{name}</h3>
        {description && <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.5, color: 'var(--text-muted)', margin: 0 }}>{description}</p>}
      </div>

      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
        {priceLabel && <span style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'var(--text-muted)' }}>{priceLabel}</span>}
        <span style={{
          fontFamily: 'var(--font-display)', fontSize: 40, fontWeight: 800, lineHeight: 1,
          background: 'var(--gradient-cta)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent',
        }}>{price} {currency}</span>
        {period && <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-subtle)' }}>{period}</span>}
      </div>

      <div style={{ height: 1, background: 'var(--border)' }} />

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>{children}</div>

      <button
        type="button"
        onClick={onCta}
        style={{
          height: 48, border: featured ? 'none' : '1px solid var(--border-strong)', cursor: 'pointer',
          fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
          color: featured ? '#fff' : 'var(--text-body)',
          background: featured ? 'var(--gradient-cta)' : 'transparent',
          borderRadius: 'var(--radius)',
          boxShadow: featured && hover ? 'var(--glow-cta)' : 'none',
          transition: 'box-shadow var(--dur-base), background var(--dur-base)',
        }}
      >{ctaLabel}</button>
    </div>
  );
}
