import React from 'react';

/**
 * Interactive — TestimonialCard
 * Client quote card with star rating + name/role. Used in the testimonials row.
 */
export function TestimonialCard({
  text,
  name,
  role,
  rating = 5,
  avatar,
  className = '',
  style = {},
}) {
  const [hover, setHover] = React.useState(false);
  const initials = (name || '').split(' ').map(w => w[0]).slice(0, 2).join('');
  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column', gap: 16, padding: 26, width: 340, maxWidth: '100%',
        background: 'var(--surface-card)', border: '1px solid var(--border)',
        borderRadius: 'var(--radius-2xl)',
        boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
        transform: hover ? 'translateY(-6px)' : 'none',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
        ...style,
      }}
    >
      <div style={{ display: 'flex', gap: 2, color: 'var(--warning)' }}>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} style={{ opacity: i < rating ? 1 : 0.25, fontSize: 16 }}>★</span>
        ))}
      </div>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, lineHeight: 1.65, color: 'var(--text-body)', margin: 0 }}>
        “{text}”
      </p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          width: 44, height: 44, borderRadius: '50%', flexShrink: 0, overflow: 'hidden',
          fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 15, color: '#fff',
          background: 'var(--gradient-cta)',
        }}>
          {avatar ? <img src={avatar} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : initials}
        </span>
        <div>
          <div style={{ fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 14, color: 'var(--text-body)' }}>{name}</div>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-muted)' }}>{role}</div>
        </div>
      </div>
    </div>
  );
}
