import React from 'react';

/**
 * Interactive — CaseCard
 * Portfolio / case-study tile. Shows a real screenshot when `image` is given,
 * otherwise a branded gradient panel with the project initials + icon. Category
 * badge, title, headline metric and short description below.
 */
export function CaseCard({
  title,
  category,
  metric,
  metricLabel,
  description,
  image,
  icon,
  gradient = 'var(--gradient-cta)',
  tags = [],
  className = '',
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const initials = (title || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', width: 360, maxWidth: '100%', overflow: 'hidden',
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-lg)',
        borderColor: hover ? 'rgba(147,51,234,0.4)' : 'var(--border)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
        ...style,
      }}
    >
      {/* visual */}
      <div style={{ position: 'relative', height: 176, overflow: 'hidden', background: image ? '#000' : gradient }}>
        {image ? (
          <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
            transform: hover ? 'scale(1.06)' : 'scale(1)', transition: 'transform var(--dur-slow) var(--ease-out)' }} />
        ) : (
          <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(255,255,255,0.92)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 56, letterSpacing: '0.04em', textShadow: '0 2px 12px rgba(0,0,0,0.25)' }}>{initials}</span>
            {icon && <span style={{ position: 'absolute', top: 16, right: 16, opacity: 0.9 }}>{icon}</span>}
          </div>
        )}
        {category && (
          <span style={{ position: 'absolute', top: 14, left: 14, fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
            letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', padding: '5px 11px',
            borderRadius: 'var(--radius-full)', background: 'rgba(9,9,11,0.55)', backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)' }}>{category}</span>
        )}
      </div>

      {/* body */}
      <div style={{ padding: 22, display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 19, fontWeight: 700, margin: 0, color: 'var(--text-body)' }}>{title}</h3>
        {metric && (
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 26,
              background: 'var(--gradient-cta)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent', color: 'transparent' }}>{metric}</span>
            {metricLabel && <span style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'var(--text-muted)' }}>{metricLabel}</span>}
          </div>
        )}
        {description && <p style={{ fontFamily: 'var(--font-body)', fontSize: 13.5, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{description}</p>}
        {tags.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto', paddingTop: 4 }}>
            {tags.map((tg, i) => (
              <span key={i} style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-subtle)', padding: '3px 9px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border)' }}>{tg}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
