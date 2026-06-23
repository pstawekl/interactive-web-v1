import React from 'react';

/**
 * Interactive — ProcessStep
 * Numbered step in the "Jak pracujemy" timeline. Gradient number badge + icon.
 */
export function ProcessStep({
  number,
  icon,
  title,
  description,
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
        position: 'relative', padding: 24, borderRadius: 'var(--radius-2xl)',
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow)',
        borderColor: hover ? 'rgba(147,51,234,0.4)' : 'var(--border)',
        transition: 'box-shadow var(--dur-base), border-color var(--dur-base)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: 'var(--radius-full)', flexShrink: 0,
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: '#fff',
          background: 'var(--gradient-cta)', boxShadow: 'var(--shadow-md)',
        }}>{number}</span>
        {icon && <span style={{ color: 'var(--brand-purple)' }}>{icon}</span>}
      </div>
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700, margin: '0 0 6px', color: 'var(--text-body)' }}>{title}</h3>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.6, color: 'var(--text-muted)', margin: 0 }}>{description}</p>
    </div>
  );
}
