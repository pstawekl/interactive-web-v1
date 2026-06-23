import React from 'react';

/**
 * Interactive — ServiceCard
 * The "Czego szukasz?" offer card: gradient title, feature icon chip, price,
 * description, CTA. Lifts with a brand wash on hover.
 */
export function ServiceCard({
  title,
  icon,
  price,
  priceLabel = 'od',
  currency = 'zł',
  description,
  ctaLabel = 'Sprawdź',
  onCta,
  align = 'center',
  className = '',
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const textAlign = align;
  const items = align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'center';

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative', overflow: 'hidden',
        display: 'flex', flexDirection: 'column', alignItems: items, textAlign,
        gap: 14, width: 320, maxWidth: '100%', padding: 28,
        background: 'var(--surface-card)',
        border: '2px solid var(--border)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-lg)',
        borderColor: hover ? 'rgba(147,51,234,0.4)' : 'var(--border)',
        transform: hover ? 'translateY(-10px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
        ...style,
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, background: 'var(--gradient-wash)',
        opacity: hover ? 1 : 0, transition: 'opacity var(--dur-base)', pointerEvents: 'none',
      }} />
      <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: items, gap: 14, width: '100%' }}>
        <h3 style={{
          fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700, margin: 0,
          background: 'var(--gradient-cta)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent',
        }}>{title}</h3>
        {icon && (
          <div style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 64, height: 64, borderRadius: 'var(--radius-full)',
            color: '#fff', background: 'var(--gradient-cta)', boxShadow: 'var(--glow-purple)',
          }}>{icon}</div>
        )}
        {price != null && (
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 26, fontWeight: 700, color: 'var(--text-body)' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 500, fontSize: 18 }}>{priceLabel} </span>
            <span style={{
              background: 'var(--gradient-cta)', WebkitBackgroundClip: 'text', backgroundClip: 'text',
              WebkitTextFillColor: 'transparent', color: 'transparent',
            }}>{price} {currency}</span>
          </div>
        )}
        {description && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{description}</p>
        )}
        <button
          type="button"
          onClick={onCta}
          style={{
            marginTop: 4, height: 44, padding: '0 22px', border: 'none', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#fff',
            background: 'var(--gradient-cta)', borderRadius: 'var(--radius)',
            boxShadow: hover ? 'var(--glow-cta)' : 'var(--shadow)',
            transition: 'box-shadow var(--dur-base), transform var(--dur-fast)',
          }}
        >{ctaLabel}</button>
      </div>
    </div>
  );
}
