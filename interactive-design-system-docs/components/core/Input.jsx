import React from 'react';

/**
 * Interactive — Input
 * Text field with brand focus ring. Pair with a <label> for accessibility.
 */
export function Input({ invalid = false, className = '', style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <input
      className={className}
      onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
      style={{
        width: '100%',
        height: 44,
        padding: '0 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        color: 'var(--text-body)',
        background: 'var(--surface-elevated)',
        border: `1px solid ${invalid ? 'var(--danger)' : (focus ? 'var(--ring)' : 'var(--input)')}`,
        borderRadius: 'var(--radius)',
        outline: 'none',
        boxShadow: focus ? '0 0 0 3px rgba(147,51,234,0.25)' : 'none',
        transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
        ...style,
      }}
      {...rest}
    />
  );
}
