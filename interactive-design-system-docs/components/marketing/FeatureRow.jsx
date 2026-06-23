import React from 'react';

/**
 * Interactive — FeatureRow
 * Checklist line used in pricing / "co zawiera pakiet" lists. Gradient check chip.
 */
export function FeatureRow({ children, icon, muted = false, className = '', style = {} }) {
  return (
    <div className={className} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, ...style }}>
      <span style={{
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        width: 22, height: 22, borderRadius: 'var(--radius-full)', flexShrink: 0, marginTop: 1,
        color: '#fff', fontSize: 12, fontWeight: 700,
        background: muted ? 'var(--surface-muted)' : 'var(--gradient-cta)',
      }}>{icon || '✓'}</span>
      <span style={{ fontFamily: 'var(--font-body)', fontSize: 14, lineHeight: 1.55, color: muted ? 'var(--text-subtle)' : 'var(--text-muted)' }}>{children}</span>
    </div>
  );
}
