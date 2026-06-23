import React from 'react';

/**
 * Interactive — Badge
 * Small status / category pill. `gradient` uses the brand CTA fill.
 */
export function Badge({ variant = 'neutral', className = '', style = {}, children, ...rest }) {
  const variants = {
    neutral:  { background: 'var(--surface-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' },
    brand:    { background: 'rgba(147,51,234,0.12)', color: '#c084fc', border: '1px solid rgba(147,51,234,0.35)' },
    gradient: { background: 'var(--gradient-cta)', color: '#fff', border: '1px solid transparent' },
    success:  { background: 'rgba(34,197,94,0.12)', color: '#4ade80', border: '1px solid rgba(34,197,94,0.35)' },
    outline:  { background: 'transparent', color: 'var(--text-body)', border: '1px solid var(--border-strong)' },
  };
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500,
        letterSpacing: '0.04em', textTransform: 'uppercase',
        padding: '4px 10px', borderRadius: 'var(--radius-full)',
        lineHeight: 1, whiteSpace: 'nowrap',
        ...variants[variant], ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
