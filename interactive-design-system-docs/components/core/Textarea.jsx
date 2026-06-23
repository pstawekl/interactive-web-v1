import React from 'react';

/**
 * Interactive — Textarea
 * Multi-line field matching Input styling. Used in the contact form.
 */
export function Textarea({ invalid = false, rows = 4, className = '', style = {}, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <textarea
      rows={rows}
      className={className}
      onFocus={(e) => { setFocus(true); rest.onFocus && rest.onFocus(e); }}
      onBlur={(e) => { setFocus(false); rest.onBlur && rest.onBlur(e); }}
      style={{
        width: '100%',
        padding: '12px 14px',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        lineHeight: 1.6,
        color: 'var(--text-body)',
        background: 'var(--surface-elevated)',
        border: `1px solid ${invalid ? 'var(--danger)' : (focus ? 'var(--ring)' : 'var(--input)')}`,
        borderRadius: 'var(--radius)',
        outline: 'none',
        resize: 'vertical',
        boxShadow: focus ? '0 0 0 3px rgba(147,51,234,0.25)' : 'none',
        transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
        ...style,
      }}
      {...rest}
    />
  );
}
