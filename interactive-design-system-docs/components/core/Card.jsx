import React from 'react';

/**
 * Interactive — Card
 * Surface container. Marketing cards round to 2xl, use a 2px border and lift on
 * hover with a soft brand wash. `glass` is the translucent overlay variant.
 */
export function Card({
  variant = 'default',
  hoverable = false,
  padding = 24,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);

  const variants = {
    default: { background: 'var(--surface-card)', border: '1px solid var(--border)' },
    feature: { background: 'var(--surface-card)', border: '2px solid var(--border)' },
    glass: {
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(var(--blur))',
      WebkitBackdropFilter: 'blur(var(--blur))',
    },
    elevated: { background: 'var(--surface-elevated)', border: '1px solid var(--border)' },
  };

  const hoverFx = (hoverable && hover) ? {
    transform: 'translateY(-6px)',
    boxShadow: 'var(--shadow-2xl)',
    borderColor: 'rgba(147,51,234,0.4)',
  } : {};

  return (
    <div
      className={className}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-2xl)',
        padding,
        boxShadow: 'var(--shadow-lg)',
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
        ...variants[variant],
        ...hoverFx,
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
