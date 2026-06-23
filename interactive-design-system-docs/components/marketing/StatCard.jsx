import React from 'react';

/**
 * Interactive — StatCard
 * Glassy metric card used on the colored stat band. Gradient number + icon chip.
 */
export function StatCard({
  icon,
  value,
  label,
  gradient = 'var(--gradient-cta)',
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
        textAlign: 'center', padding: 32, borderRadius: 'var(--radius-2xl)',
        background: 'rgba(255,255,255,0.92)',
        border: '1px solid rgba(255,255,255,0.25)',
        boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-xl)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
        ...style,
      }}
    >
      {icon && (
        <div style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 60, height: 60, borderRadius: 'var(--radius-full)', marginBottom: 16,
          color: '#fff', background: gradient,
        }}>{icon}</div>
      )}
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 44, fontWeight: 800, lineHeight: 1, marginBottom: 8,
        background: gradient, WebkitBackgroundClip: 'text', backgroundClip: 'text',
        WebkitTextFillColor: 'transparent', color: 'transparent',
      }}>{value}</div>
      <div style={{ fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, color: '#3f3f46' }}>{label}</div>
    </div>
  );
}
