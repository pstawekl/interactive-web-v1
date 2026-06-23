import React from 'react';

/**
 * Interactive — Switch
 * Toggle with gradient track when on. Used for theme + settings toggles.
 */
export function Switch({ checked = false, onChange, disabled = false, className = '', style = {}, ...rest }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange && onChange(!checked)}
      className={className}
      style={{
        position: 'relative',
        width: 46,
        height: 26,
        flexShrink: 0,
        borderRadius: 'var(--radius-full)',
        border: '1px solid var(--border)',
        background: checked ? 'var(--gradient-cta)' : 'var(--surface-muted)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--dur-base)',
        padding: 0,
        ...style,
      }}
      {...rest}
    >
      <span
        style={{
          position: 'absolute',
          top: 2,
          left: checked ? 22 : 2,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: '#fff',
          boxShadow: 'var(--shadow)',
          transition: 'left var(--dur-base) var(--ease-out)',
        }}
      />
    </button>
  );
}
