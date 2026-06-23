import React from 'react';

/**
 * Interactive — SectionHeading
 * The recurring marketing section header: optional mono eyebrow, big gradient
 * display title, and a muted description. Centered by default.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  gradient = true,
  className = '',
  style = {},
}) {
  const alignItems = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
  const textAlign = align;
  return (
    <div
      className={className}
      style={{ display: 'flex', flexDirection: 'column', alignItems, textAlign, gap: 14, maxWidth: 720, marginInline: align === 'center' ? 'auto' : 0, ...style }}
    >
      {eyebrow && (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.12em',
          textTransform: 'uppercase', color: 'var(--text-muted)',
        }}>{eyebrow}</span>
      )}
      <h2 style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2rem, 4vw, 3rem)',
        fontWeight: 800,
        lineHeight: 1.05,
        letterSpacing: '-0.015em',
        margin: 0,
        ...(gradient ? {
          background: 'var(--gradient-brand)',
          WebkitBackgroundClip: 'text', backgroundClip: 'text',
          WebkitTextFillColor: 'transparent', color: 'transparent',
        } : { color: 'var(--text-body)' }),
      }}>{title}</h2>
      {description && (
        <p style={{
          fontFamily: 'var(--font-body)', fontSize: 18, fontWeight: 400,
          lineHeight: 1.6, color: 'var(--text-muted)', margin: 0, maxWidth: 640,
        }}>{description}</p>
      )}
    </div>
  );
}
