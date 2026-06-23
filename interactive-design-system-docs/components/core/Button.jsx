import React from 'react';

/**
 * Interactive — Button
 * Brand CTA uses the blue→purple gradient ("interactive" variant) with a lift+glow on hover.
 */
export function Button({
  variant = 'default',
  size = 'default',
  type = 'button',
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm:      { height: 32, padding: '0 12px', fontSize: 13, radius: 'var(--radius)' },
    default: { height: 40, padding: '0 18px', fontSize: 14, radius: 'var(--radius)' },
    md:      { height: 44, padding: '0 22px', fontSize: 15, radius: 'var(--radius)' },
    lg:      { height: 52, padding: '0 32px', fontSize: 16, radius: 'var(--radius-lg)' },
    icon:    { height: 40, width: 40, padding: 0, fontSize: 14, radius: 'var(--radius)' },
  };
  const s = sizes[size] || sizes.default;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    height: s.height,
    width: s.width,
    padding: s.padding,
    fontFamily: 'var(--font-body)',
    fontSize: s.fontSize,
    fontWeight: 600,
    lineHeight: 1,
    letterSpacing: '-0.01em',
    borderRadius: s.radius,
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base), color var(--dur-base), border-color var(--dur-base)',
    userSelect: 'none',
  };

  const variants = {
    default: {
      background: 'var(--foreground)',
      color: 'var(--background)',
      boxShadow: 'var(--shadow)',
    },
    interactive: {
      background: 'var(--gradient-cta)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'var(--border-strong)',
    },
    secondary: {
      background: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      borderColor: 'var(--border)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
    },
    link: {
      background: 'transparent',
      color: 'var(--brand-purple)',
      padding: 0,
      height: 'auto',
    },
  };

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverFx = (!disabled && hover) ? (
    variant === 'interactive' ? { transform: active ? 'scale(0.97)' : 'scale(1.04)', boxShadow: 'var(--glow-cta)' }
    : variant === 'outline' || variant === 'ghost' ? { background: 'var(--surface-elevated)', transform: active ? 'scale(0.97)' : 'scale(1.0)' }
    : variant === 'link' ? { textDecoration: 'underline', textUnderlineOffset: 4 }
    : { transform: active ? 'scale(0.97)' : 'scale(1.03)', boxShadow: 'var(--shadow-md)' }
  ) : {};

  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      style={{ ...base, ...variants[variant], ...hoverFx, ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
