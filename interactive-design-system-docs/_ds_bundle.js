/* @ds-bundle: {"format":3,"namespace":"InteractiveDesignSystem_1f5bed","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Switch","sourcePath":"components/core/Switch.jsx"},{"name":"Textarea","sourcePath":"components/core/Textarea.jsx"},{"name":"CaseCard","sourcePath":"components/marketing/CaseCard.jsx"},{"name":"FeatureRow","sourcePath":"components/marketing/FeatureRow.jsx"},{"name":"PricingCard","sourcePath":"components/marketing/PricingCard.jsx"},{"name":"ProcessStep","sourcePath":"components/marketing/ProcessStep.jsx"},{"name":"ServiceCard","sourcePath":"components/marketing/ServiceCard.jsx"},{"name":"StatCard","sourcePath":"components/marketing/StatCard.jsx"},{"name":"TestimonialCard","sourcePath":"components/marketing/TestimonialCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"d574240ba76b","components/core/Button.jsx":"b0e490feb1ee","components/core/Card.jsx":"95af5b83afcd","components/core/Input.jsx":"fa1a2d97ba6f","components/core/SectionHeading.jsx":"ee2a2fe26462","components/core/Switch.jsx":"5a4090f71d94","components/core/Textarea.jsx":"206cebfd612f","components/marketing/CaseCard.jsx":"6ac0b1e3894b","components/marketing/FeatureRow.jsx":"654a4a841141","components/marketing/PricingCard.jsx":"5e53446fef43","components/marketing/ProcessStep.jsx":"a3ded304ff53","components/marketing/ServiceCard.jsx":"61c1a13e8903","components/marketing/StatCard.jsx":"b4a724ef3103","components/marketing/TestimonialCard.jsx":"8776e59e7aa4","ui_kits/website/data.js":"c727981fe284","ui_kits/website/pages.jsx":"0657af0de89b","ui_kits/website/pages2.jsx":"e1216bcd20ff","ui_kits/website/sections.jsx":"cc3afa37281d"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.InteractiveDesignSystem_1f5bed = window.InteractiveDesignSystem_1f5bed || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive — Badge
 * Small status / category pill. `gradient` uses the brand CTA fill.
 */
function Badge({
  variant = 'neutral',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const variants = {
    neutral: {
      background: 'var(--surface-elevated)',
      color: 'var(--text-muted)',
      border: '1px solid var(--border)'
    },
    brand: {
      background: 'rgba(147,51,234,0.12)',
      color: '#c084fc',
      border: '1px solid rgba(147,51,234,0.35)'
    },
    gradient: {
      background: 'var(--gradient-cta)',
      color: '#fff',
      border: '1px solid transparent'
    },
    success: {
      background: 'rgba(34,197,94,0.12)',
      color: '#4ade80',
      border: '1px solid rgba(34,197,94,0.35)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid var(--border-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive — Button
 * Brand CTA uses the blue→purple gradient ("interactive" variant) with a lift+glow on hover.
 */
function Button({
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
    sm: {
      height: 32,
      padding: '0 12px',
      fontSize: 13,
      radius: 'var(--radius)'
    },
    default: {
      height: 40,
      padding: '0 18px',
      fontSize: 14,
      radius: 'var(--radius)'
    },
    md: {
      height: 44,
      padding: '0 22px',
      fontSize: 15,
      radius: 'var(--radius)'
    },
    lg: {
      height: 52,
      padding: '0 32px',
      fontSize: 16,
      radius: 'var(--radius-lg)'
    },
    icon: {
      height: 40,
      width: 40,
      padding: 0,
      fontSize: 14,
      radius: 'var(--radius)'
    }
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
    userSelect: 'none'
  };
  const variants = {
    default: {
      background: 'var(--foreground)',
      color: 'var(--background)',
      boxShadow: 'var(--shadow)'
    },
    interactive: {
      background: 'var(--gradient-cta)',
      color: '#fff',
      boxShadow: 'var(--shadow-lg)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-body)',
      borderColor: 'var(--border-strong)'
    },
    secondary: {
      background: 'var(--secondary)',
      color: 'var(--secondary-foreground)',
      borderColor: 'var(--border)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)'
    },
    link: {
      background: 'transparent',
      color: 'var(--brand-purple)',
      padding: 0,
      height: 'auto'
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const hoverFx = !disabled && hover ? variant === 'interactive' ? {
    transform: active ? 'scale(0.97)' : 'scale(1.04)',
    boxShadow: 'var(--glow-cta)'
  } : variant === 'outline' || variant === 'ghost' ? {
    background: 'var(--surface-elevated)',
    transform: active ? 'scale(0.97)' : 'scale(1.0)'
  } : variant === 'link' ? {
    textDecoration: 'underline',
    textUnderlineOffset: 4
  } : {
    transform: active ? 'scale(0.97)' : 'scale(1.03)',
    boxShadow: 'var(--shadow-md)'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: className,
    style: {
      ...base,
      ...variants[variant],
      ...hoverFx,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive — Card
 * Surface container. Marketing cards round to 2xl, use a 2px border and lift on
 * hover with a soft brand wash. `glass` is the translucent overlay variant.
 */
function Card({
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
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)'
    },
    feature: {
      background: 'var(--surface-card)',
      border: '2px solid var(--border)'
    },
    glass: {
      background: 'var(--glass-bg)',
      border: '1px solid var(--glass-border)',
      backdropFilter: 'blur(var(--blur))',
      WebkitBackdropFilter: 'blur(var(--blur))'
    },
    elevated: {
      background: 'var(--surface-elevated)',
      border: '1px solid var(--border)'
    }
  };
  const hoverFx = hoverable && hover ? {
    transform: 'translateY(-6px)',
    boxShadow: 'var(--shadow-2xl)',
    borderColor: 'rgba(147,51,234,0.4)'
  } : {};
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-2xl)',
      padding,
      boxShadow: 'var(--shadow-lg)',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
      ...variants[variant],
      ...hoverFx,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive — Input
 * Text field with brand focus ring. Pair with a <label> for accessibility.
 */
function Input({
  invalid = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    className: className,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      height: 44,
      padding: '0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)',
      background: 'var(--surface-elevated)',
      border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--ring)' : 'var(--input)'}`,
      borderRadius: 'var(--radius)',
      outline: 'none',
      boxShadow: focus ? '0 0 0 3px rgba(147,51,234,0.25)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/**
 * Interactive — SectionHeading
 * The recurring marketing section header: optional mono eyebrow, big gradient
 * display title, and a muted description. Centered by default.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  gradient = true,
  className = '',
  style = {}
}) {
  const alignItems = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';
  const textAlign = align;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems,
      textAlign,
      gap: 14,
      maxWidth: 720,
      marginInline: align === 'center' ? 'auto' : 0,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800,
      lineHeight: 1.05,
      letterSpacing: '-0.015em',
      margin: 0,
      ...(gradient ? {
        background: 'var(--gradient-brand)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent'
      } : {
        color: 'var(--text-body)'
      })
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0,
      maxWidth: 640
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive — Switch
 * Toggle with gradient track when on. Used for theme + settings toggles.
 */
function Switch({
  checked = false,
  onChange,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": checked,
    disabled: disabled,
    onClick: () => !disabled && onChange && onChange(!checked),
    className: className,
    style: {
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
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 22 : 2,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow)',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Switch.jsx", error: String((e && e.message) || e) }); }

// components/core/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Interactive — Textarea
 * Multi-line field matching Input styling. Used in the contact form.
 */
function Textarea({
  invalid = false,
  rows = 4,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: className,
    onFocus: e => {
      setFocus(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      width: '100%',
      padding: '12px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-body)',
      background: 'var(--surface-elevated)',
      border: `1px solid ${invalid ? 'var(--danger)' : focus ? 'var(--ring)' : 'var(--input)'}`,
      borderRadius: 'var(--radius)',
      outline: 'none',
      resize: 'vertical',
      boxShadow: focus ? '0 0 0 3px rgba(147,51,234,0.25)' : 'none',
      transition: 'border-color var(--dur-base), box-shadow var(--dur-base)',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/marketing/CaseCard.jsx
try { (() => {
/**
 * Interactive — CaseCard
 * Portfolio / case-study tile. Shows a real screenshot when `image` is given,
 * otherwise a branded gradient panel with the project initials + icon. Category
 * badge, title, headline metric and short description below.
 */
function CaseCard({
  title,
  category,
  metric,
  metricLabel,
  description,
  image,
  icon,
  gradient = 'var(--gradient-cta)',
  tags = [],
  className = '',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const initials = (title || '').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      width: 360,
      maxWidth: '100%',
      overflow: 'hidden',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-lg)',
      borderColor: hover ? 'rgba(147,51,234,0.4)' : 'var(--border)',
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 176,
      overflow: 'hidden',
      background: image ? '#000' : gradient
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.92)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 56,
      letterSpacing: '0.04em',
      textShadow: '0 2px 12px rgba(0,0,0,0.25)'
    }
  }, initials), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      right: 16,
      opacity: 0.9
    }
  }, icon)), category && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 14,
      left: 14,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: '#fff',
      padding: '5px 11px',
      borderRadius: 'var(--radius-full)',
      background: 'rgba(9,9,11,0.55)',
      backdropFilter: 'blur(6px)',
      WebkitBackdropFilter: 'blur(6px)'
    }
  }, category)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      fontWeight: 700,
      margin: 0,
      color: 'var(--text-body)'
    }
  }, title), metric && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 26,
      background: 'var(--gradient-cta)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, metric), metricLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, metricLabel)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'auto',
      paddingTop: 4
    }
  }, tags.map((tg, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-subtle)',
      padding: '3px 9px',
      borderRadius: 'var(--radius-full)',
      border: '1px solid var(--border)'
    }
  }, tg)))));
}
Object.assign(__ds_scope, { CaseCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/CaseCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/FeatureRow.jsx
try { (() => {
/**
 * Interactive — FeatureRow
 * Checklist line used in pricing / "co zawiera pakiet" lists. Gradient check chip.
 */
function FeatureRow({
  children,
  icon,
  muted = false,
  className = '',
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 22,
      height: 22,
      borderRadius: 'var(--radius-full)',
      flexShrink: 0,
      marginTop: 1,
      color: '#fff',
      fontSize: 12,
      fontWeight: 700,
      background: muted ? 'var(--surface-muted)' : 'var(--gradient-cta)'
    }
  }, icon || '✓'), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.55,
      color: muted ? 'var(--text-subtle)' : 'var(--text-muted)'
    }
  }, children));
}
Object.assign(__ds_scope, { FeatureRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/FeatureRow.jsx", error: String((e && e.message) || e) }); }

// components/marketing/PricingCard.jsx
try { (() => {
/**
 * Interactive — PricingCard
 * Package tier card (Basic / Standard / Premium). The `featured` tier lifts,
 * gets a gradient border + glow and a "Najpopularniejszy" ribbon.
 * Children render the FeatureRow list.
 */
function PricingCard({
  name,
  price,
  currency = 'zł',
  priceLabel = 'od',
  period,
  description,
  featured = false,
  badge,
  ctaLabel = 'Wybierz pakiet',
  onCta,
  children,
  className = '',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      width: 320,
      maxWidth: '100%',
      padding: '32px 28px',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      border: featured ? '2px solid transparent' : '1px solid var(--border)',
      backgroundImage: featured ? 'linear-gradient(var(--surface-card), var(--surface-card)), var(--gradient-cta)' : 'none',
      backgroundOrigin: 'border-box',
      backgroundClip: featured ? 'padding-box, border-box' : 'border-box',
      boxShadow: featured ? 'var(--glow-cta)' : hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
      transform: featured ? 'translateY(-10px)' : hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      ...style
    }
  }, (featured || badge) && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -13,
      left: '50%',
      transform: 'translateX(-50%)',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: '#fff',
      padding: '5px 14px',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-cta)',
      boxShadow: 'var(--shadow-md)',
      whiteSpace: 'nowrap'
    }
  }, badge || 'Najpopularniejszy'), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      margin: '0 0 4px',
      color: 'var(--text-body)'
    }
  }, name), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.5,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, priceLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-muted)'
    }
  }, priceLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 40,
      fontWeight: 800,
      lineHeight: 1,
      background: 'var(--gradient-cta)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, price, " ", currency), period && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, period)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: 'var(--border)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      height: 48,
      border: featured ? 'none' : '1px solid var(--border-strong)',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 600,
      color: featured ? '#fff' : 'var(--text-body)',
      background: featured ? 'var(--gradient-cta)' : 'transparent',
      borderRadius: 'var(--radius)',
      boxShadow: featured && hover ? 'var(--glow-cta)' : 'none',
      transition: 'box-shadow var(--dur-base), background var(--dur-base)'
    }
  }, ctaLabel));
}
Object.assign(__ds_scope, { PricingCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/PricingCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ProcessStep.jsx
try { (() => {
/**
 * Interactive — ProcessStep
 * Numbered step in the "Jak pracujemy" timeline. Gradient number badge + icon.
 */
function ProcessStep({
  number,
  icon,
  title,
  description,
  className = '',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      padding: 24,
      borderRadius: 'var(--radius-2xl)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow)',
      borderColor: hover ? 'rgba(147,51,234,0.4)' : 'var(--border)',
      transition: 'box-shadow var(--dur-base), border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 'var(--radius-full)',
      flexShrink: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: '#fff',
      background: 'var(--gradient-cta)',
      boxShadow: 'var(--shadow-md)'
    }
  }, number), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--brand-purple)'
    }
  }, icon)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      margin: '0 0 6px',
      color: 'var(--text-body)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { ProcessStep });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ProcessStep.jsx", error: String((e && e.message) || e) }); }

// components/marketing/ServiceCard.jsx
try { (() => {
/**
 * Interactive — ServiceCard
 * The "Czego szukasz?" offer card: gradient title, feature icon chip, price,
 * description, CTA. Lifts with a brand wash on hover.
 */
function ServiceCard({
  title,
  icon,
  price,
  priceLabel = 'od',
  currency = 'zł',
  description,
  ctaLabel = 'Sprawdź',
  onCta,
  align = 'center',
  className = '',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const textAlign = align;
  const items = align === 'right' ? 'flex-end' : align === 'left' ? 'flex-start' : 'center';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      alignItems: items,
      textAlign,
      gap: 14,
      width: 320,
      maxWidth: '100%',
      padding: 28,
      background: 'var(--surface-card)',
      border: '2px solid var(--border)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-lg)',
      borderColor: hover ? 'rgba(147,51,234,0.4)' : 'var(--border)',
      transform: hover ? 'translateY(-10px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base), border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--gradient-wash)',
      opacity: hover ? 1 : 0,
      transition: 'opacity var(--dur-base)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: items,
      gap: 14,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 700,
      margin: 0,
      background: 'var(--gradient-cta)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, title), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 64,
      height: 64,
      borderRadius: 'var(--radius-full)',
      color: '#fff',
      background: 'var(--gradient-cta)',
      boxShadow: 'var(--glow-purple)'
    }
  }, icon), price != null && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 26,
      fontWeight: 700,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      fontWeight: 500,
      fontSize: 18
    }
  }, priceLabel, " "), /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--gradient-cta)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, price, " ", currency)), description && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, description), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onCta,
    style: {
      marginTop: 4,
      height: 44,
      padding: '0 22px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: '#fff',
      background: 'var(--gradient-cta)',
      borderRadius: 'var(--radius)',
      boxShadow: hover ? 'var(--glow-cta)' : 'var(--shadow)',
      transition: 'box-shadow var(--dur-base), transform var(--dur-fast)'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/StatCard.jsx
try { (() => {
/**
 * Interactive — StatCard
 * Glassy metric card used on the colored stat band. Gradient number + icon chip.
 */
function StatCard({
  icon,
  value,
  label,
  gradient = 'var(--gradient-cta)',
  className = '',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      textAlign: 'center',
      padding: 32,
      borderRadius: 'var(--radius-2xl)',
      background: 'rgba(255,255,255,0.92)',
      border: '1px solid rgba(255,255,255,0.25)',
      boxShadow: hover ? 'var(--shadow-2xl)' : 'var(--shadow-xl)',
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 60,
      height: 60,
      borderRadius: 'var(--radius-full)',
      marginBottom: 16,
      color: '#fff',
      background: gradient
    }
  }, icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 44,
      fontWeight: 800,
      lineHeight: 1,
      marginBottom: 8,
      background: gradient,
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: '#3f3f46'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TestimonialCard.jsx
try { (() => {
/**
 * Interactive — TestimonialCard
 * Client quote card with star rating + name/role. Used in the testimonials row.
 */
function TestimonialCard({
  text,
  name,
  role,
  rating = 5,
  avatar,
  className = '',
  style = {}
}) {
  const [hover, setHover] = React.useState(false);
  const initials = (name || '').split(' ').map(w => w[0]).slice(0, 2).join('');
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      padding: 26,
      width: 340,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: hover ? 'var(--shadow-xl)' : 'var(--shadow-lg)',
      transform: hover ? 'translateY(-6px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 2,
      color: 'var(--warning)'
    }
  }, Array.from({
    length: 5
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      opacity: i < rating ? 1 : 0.25,
      fontSize: 16
    }
  }, "\u2605"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      margin: 0
    }
  }, "\u201C", text, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: '50%',
      flexShrink: 0,
      overflow: 'hidden',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 15,
      color: '#fff',
      background: 'var(--gradient-cta)'
    }
  }, avatar ? /*#__PURE__*/React.createElement("img", {
    src: avatar,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { TestimonialCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TestimonialCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
/* Interactive — UI kit content (subset of the production translations, PL/EN).
   Exposed as window.IN_DATA for the website kit. */
window.IN_DATA = {
  pl: {
    nav: {
      home: 'Home',
      offer: 'Oferta',
      about: 'O nas',
      process: 'Proces',
      contact: 'Kontakt',
      cta: 'Bezpłatna wycena'
    },
    hero: {
      eyebrow: '// Software house · od 2017',
      title: 'Rozwiązania IT, które napędzą Twój sukces',
      subtitle: 'Od wizji po wdrożenie — profesjonalne usługi programistyczne: strony, sklepy, aplikacje webowe i rozwiązania AI.',
      cta: 'Dowiedz się więcej',
      cta2: 'Sprawdź projekty'
    },
    offer: {
      eyebrow: '// Oferta',
      title: 'Czego szukasz?',
      desc: 'Strony, sklepy i aplikacje skrojone pod Twój biznes — proste w obsłudze, bezpieczne i skalowalne.',
      items: [{
        title: 'E-commerce',
        icon: 'globe',
        price: 1699,
        desc: 'Sklepy internetowe, które zwielokrotnią sprzedaż. Łatwa edycja asortymentu, opisów i cen.'
      }, {
        title: 'Aplikacje internetowe',
        icon: 'atom',
        price: 999,
        desc: 'Skrojone pod oczekiwania klienta. Doświadczenie w infrastrukturze krytycznej i systemach ERP.'
      }, {
        title: 'Szkolenia',
        icon: 'graduation-cap',
        price: 999,
        desc: 'Szkolenia z bezpieczeństwa IT, programowania i wdrażania najnowszych rozwiązań w firmie.'
      }]
    },
    stats: {
      title: 'Liczby, które mówią same za siebie',
      items: [{
        icon: 'calendar',
        value: '7+',
        label: 'lat doświadczenia'
      }, {
        icon: 'code',
        value: '45+',
        label: 'zrealizowanych projektów'
      }, {
        icon: 'users',
        value: '98%',
        label: 'zadowolonych klientów'
      }, {
        icon: 'clock',
        value: '4-6',
        label: 'tygodni realizacji'
      }]
    },
    process: {
      eyebrow: '// Jak pracujemy',
      title: 'Prosty, przejrzysty proces',
      desc: 'Od pierwszej rozmowy po wdrożenie i wsparcie — wiesz, na czym stoisz na każdym etapie.',
      steps: [{
        number: 1,
        icon: 'message-square',
        title: 'Konsultacja i wycena',
        description: 'Bezpłatna konsultacja online lub telefoniczna. Indywidualna wycena w ciągu 24–48 godzin.'
      }, {
        number: 2,
        icon: 'palette',
        title: 'Projektowanie',
        description: 'Wireframe’y i mockupy. Po Twojej akceptacji ruszamy z realizacją. Poprawki w cenie.'
      }, {
        number: 3,
        icon: 'code',
        title: 'Realizacja',
        description: 'Programujemy zgodnie z projektem, regularnie raportując postępy. Średni czas: 4–6 tygodni.'
      }, {
        number: 4,
        icon: 'rocket',
        title: 'Wdrożenie i wsparcie',
        description: 'Wdrożenie na produkcję, szkolenie z obsługi i 12 miesięcy bezpłatnego wsparcia.'
      }]
    },
    testimonials: {
      eyebrow: '// Opinie',
      title: 'Co mówią o nas klienci',
      items: [{
        rating: 5,
        text: 'Strona zwiększyła liczbę zapytań o ofertę o 200% w pierwszym miesiącu. Profesjonalna obsługa i szybka realizacja. Polecam!',
        name: 'Anna Kowalska',
        role: 'Właściciel sklepu z odzieżą'
      }, {
        rating: 5,
        text: 'Sklep online działa bezawaryjnie — obsługujemy 500+ zamówień miesięcznie. Integracja z płatnościami działa perfekcyjnie.',
        name: 'Marek Nowak',
        role: 'Dyrektor biura rachunkowego'
      }, {
        rating: 5,
        text: 'System rezerwacji online zwiększył liczbę klientów o 300%. Klienci rezerwują terminy 24/7, a my oszczędzamy czas.',
        name: 'Tomasz Lewandowski',
        role: 'Właściciel salonu kosmetycznego'
      }]
    },
    faq: {
      eyebrow: '// FAQ',
      title: 'Najczęściej zadawane pytania',
      items: [{
        q: 'Ile czasu trwa realizacja strony internetowej?',
        a: 'Średni czas realizacji to 4–6 tygodni. Proste strony One Page powstają w 2–3 tygodnie, bardziej złożone projekty — do 8 tygodni. Dokładny czas ustalamy indywidualnie.'
      }, {
        q: 'Czy mogę samodzielnie zmieniać treści na stronie?',
        a: 'Tak. W pakietach Standard i Premium otrzymujesz panel administracyjny — edytujesz treści, zdjęcia i podstrony bez wiedzy technicznej.'
      }, {
        q: 'Co zawiera pakiet SEO?',
        a: 'Podstawowe SEO: meta tagi, nagłówki, optymalizacja obrazów, dane strukturalne, szybkość i responsywność. Zaawansowane SEO dodatkowo: audyt, link building i monitoring pozycji.'
      }, {
        q: 'Czy strona będzie działać na telefonie?',
        a: 'Tak. Wszystkie nasze strony są w pełni responsywne. Stosujemy podejście mobile-first — projektujemy najpierw dla urządzeń mobilnych.'
      }]
    },
    contact: {
      eyebrow: '// Kontakt',
      title: 'Jesteśmy tu, żeby pomóc',
      desc: 'Masz pytanie o usługi, potrzebujesz wyceny lub wsparcia? Napisz — odezwiemy się w ciągu 24–48 godzin.',
      name: 'Imię i nazwisko',
      email: 'Email',
      message: 'Wiadomość',
      send: 'Wyślij',
      sent: 'Dziękujemy! Odezwiemy się wkrótce.'
    },
    footer: {
      tagline: 'Software house z Zduńskiej Woli. Strony, sklepy, aplikacje i AI dla firm gotowych działać szybciej.',
      menu: 'Menu',
      rights: 'Wszelkie prawa zastrzeżone.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      offer: 'Services',
      about: 'About',
      process: 'Process',
      contact: 'Contact',
      cta: 'Free quote'
    },
    hero: {
      eyebrow: '// Software house · since 2017',
      title: 'IT solutions that will drive your success',
      subtitle: 'From vision to deployment — professional software services: websites, stores, web apps and AI solutions.',
      cta: 'Learn more',
      cta2: 'See projects'
    },
    offer: {
      eyebrow: '// Services',
      title: 'What are you looking for?',
      desc: 'Websites, stores and apps tailored to your business — easy to manage, secure and scalable.',
      items: [{
        title: 'E-commerce',
        icon: 'globe',
        price: 1699,
        desc: 'Online stores that multiply your sales. Easily manage products, descriptions and pricing.'
      }, {
        title: 'Web applications',
        icon: 'atom',
        price: 999,
        desc: 'Tailored to client expectations. Years of experience in critical infrastructure and ERP systems.'
      }, {
        title: 'Training',
        icon: 'graduation-cap',
        price: 999,
        desc: 'Training in IT security, programming and adopting the latest solutions in your company.'
      }]
    },
    stats: {
      title: 'Numbers that speak for themselves',
      items: [{
        icon: 'calendar',
        value: '7+',
        label: 'years of experience'
      }, {
        icon: 'code',
        value: '45+',
        label: 'completed projects'
      }, {
        icon: 'users',
        value: '98%',
        label: 'satisfied clients'
      }, {
        icon: 'clock',
        value: '4-6',
        label: 'weeks to deliver'
      }]
    },
    process: {
      eyebrow: '// How we work',
      title: 'A simple, transparent process',
      desc: 'From the first call to deployment and support — you always know where things stand.',
      steps: [{
        number: 1,
        icon: 'message-square',
        title: 'Consultation & quote',
        description: 'Free online or phone consultation. Individual quote within 24–48 hours.'
      }, {
        number: 2,
        icon: 'palette',
        title: 'Design',
        description: 'Wireframes and mockups. After your approval we start building. Revisions included.'
      }, {
        number: 3,
        icon: 'code',
        title: 'Development',
        description: 'We build to the approved design, reporting progress regularly. Average time: 4–6 weeks.'
      }, {
        number: 4,
        icon: 'rocket',
        title: 'Deployment & support',
        description: 'Production deployment, training and 12 months of free technical support.'
      }]
    },
    testimonials: {
      eyebrow: '// Reviews',
      title: 'What our clients say',
      items: [{
        rating: 5,
        text: 'The website increased inquiries by 200% in the first month. Professional service and fast delivery. Highly recommend!',
        name: 'Anna Kowalska',
        role: 'Clothing store owner'
      }, {
        rating: 5,
        text: 'The store runs flawlessly — we handle 500+ orders monthly. Payment integration works perfectly.',
        name: 'Marek Nowak',
        role: 'Accounting office director'
      }, {
        rating: 5,
        text: 'Online booking increased clients by 300%. They book 24/7 and we save time on phone calls.',
        name: 'Tomasz Lewandowski',
        role: 'Beauty salon owner'
      }]
    },
    faq: {
      eyebrow: '// FAQ',
      title: 'Frequently asked questions',
      items: [{
        q: 'How long does it take to build a website?',
        a: 'Average delivery is 4–6 weeks. Simple One Page sites take 2–3 weeks, complex projects up to 8. Exact time is set individually.'
      }, {
        q: 'Can I edit the content myself?',
        a: 'Yes. Standard and Premium packages include an admin panel — edit content, photos and pages with no technical knowledge.'
      }, {
        q: 'What does the SEO package include?',
        a: 'Basic SEO: meta tags, headers, image optimization, structured data, speed and responsiveness. Advanced adds audit, link building and rank monitoring.'
      }, {
        q: 'Will the site work on mobile?',
        a: 'Yes. All our sites are fully responsive. We use a mobile-first approach — designing for mobile first.'
      }]
    },
    contact: {
      eyebrow: '// Contact',
      title: 'We are here to help',
      desc: 'Question about our services, need a quote or support? Write to us — we reply within 24–48 hours.',
      name: 'Full name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      sent: 'Thank you! We will be in touch soon.'
    },
    footer: {
      tagline: 'A software house from Zduńska Wola. Websites, stores, apps and AI for businesses ready to move faster.',
      menu: 'Menu',
      rights: 'All rights reserved.'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/pages.jsx
try { (() => {
/* Interactive — additional UI-kit pages (Pricing, Courses).
   Reuses Nav/Footer from sections.jsx and the design-system components. */
const _NS = window.InteractiveDesignSystem_1f5bed;
const {
  Button: _Button,
  Badge: _Badge,
  Card: _Card,
  SectionHeading: _SH,
  PricingCard,
  FeatureRow: _FR,
  ServiceCard: _SC
} = _NS;
const _Icon = window.INIcon;
const PAGE_DATA = {
  pl: {
    pricing: {
      eyebrow: '// Cennik · Strony WWW',
      title: 'Wybierz pakiet dla swojej firmy',
      desc: 'Przejrzyste pakiety bez ukrytych kosztów. Poprawki i 12 miesięcy wsparcia w cenie.',
      tiers: [{
        name: 'Basic',
        price: 1699,
        period: '/ projekt',
        description: 'Idealny dla małych firm i freelancerów.',
        features: [['Strona One Page', 1], ['Responsywny design', 1], ['Podstawowe SEO', 1], ['Formularz kontaktowy', 1], ['Panel administracyjny', 0], ['Integracja z systemami', 0]]
      }, {
        name: 'Standard',
        price: 2999,
        period: '/ projekt',
        featured: true,
        description: 'Najczęstszy wybór — dla większości firm.',
        features: [['Do 5 podstron', 1], ['Zaawansowane SEO', 1], ['Formularz kontaktowy', 1], ['Panel administracyjny', 1], ['Blog / aktualności', 1], ['Integracja z ERP', 0]]
      }, {
        name: 'Premium',
        price: 5999,
        period: '/ projekt',
        description: 'Dla dużych firm i sklepów online.',
        features: [['Nielimitowane podstrony', 1], ['Panel administracyjny', 1], ['Integracja z systemami (CRM/ERP)', 1], ['Zaawansowane SEO + audyt', 1], ['Pełne wsparcie 24/7', 1], ['Dedykowany opiekun', 1]]
      }],
      cta: 'Wybierz pakiet',
      band: {
        title: 'Nie wiesz, który pakiet wybrać?',
        desc: 'Umów bezpłatną konsultację — dobierzemy rozwiązanie do Twoich celów i budżetu.',
        cta: 'Bezpłatna konsultacja'
      }
    },
    courses: {
      eyebrow: '// Szkolenia IT',
      title: 'Zostań programistą — ucz się od praktyków',
      desc: 'Szkolenia z programowania i technologii webowych. Małe grupy (max 8 osób), realne projekty, certyfikat.',
      earlyBird: 'Nowość! 10% rabatu dla pierwszych 10 osób, które zapiszą się na kurs.',
      tracks: [{
        name: 'Front-end',
        price: 2499,
        period: '/ kurs',
        icon: 'layout',
        description: 'HTML, CSS, JavaScript, React — podstawy.',
        features: [['HTML, CSS, JavaScript', 1], ['React podstawy', 1], ['5 dni szkolenia', 1], ['Materiały + kod źródłowy', 1], ['Certyfikat ukończenia', 1]]
      }, {
        name: 'Back-end',
        price: 3499,
        period: '/ kurs',
        featured: true,
        icon: 'server',
        description: 'Node.js, Python, REST API, bazy danych.',
        features: [['Node.js, Python', 1], ['Podstawy REST API', 1], ['14 dni szkolenia', 1], ['Materiały + kod źródłowy', 1], ['Certyfikat ukończenia', 1]]
      }, {
        name: 'Full-stack',
        price: 5999,
        period: '/ kurs',
        icon: 'layers',
        description: 'Next.js, PostgreSQL, React zaawansowane.',
        features: [['Next.js, PostgreSQL', 1], ['React zaawansowane', 1], ['30 dni szkolenia', 1], ['Materiały + kod źródłowy', 1], ['Certyfikat + portfolio', 1]]
      }],
      perks: [{
        icon: 'users',
        title: 'Małe grupy',
        desc: 'Max 8 osób — indywidualne podejście, 3× lepsze wyniki.'
      }, {
        icon: 'book-open',
        title: 'Materiały',
        desc: 'Kompletne materiały i dostęp do kodu źródłowego. Wartość 2000+ zł.'
      }, {
        icon: 'calendar-clock',
        title: 'Elastyczność',
        desc: 'Online lub stacjonarnie, weekendy lub wieczory.'
      }, {
        icon: 'award',
        title: 'Certyfikat',
        desc: 'Certyfikat ukończenia do CV i profilu LinkedIn.'
      }],
      cta: 'Zapisz się'
    }
  },
  en: {
    pricing: {
      eyebrow: '// Pricing · Websites',
      title: 'Choose the package for your business',
      desc: 'Transparent packages, no hidden costs. Revisions and 12 months of support included.',
      tiers: [{
        name: 'Basic',
        price: 1699,
        period: '/ project',
        description: 'Perfect for small businesses and freelancers.',
        features: [['One Page website', 1], ['Responsive design', 1], ['Basic SEO', 1], ['Contact form', 1], ['Admin panel', 0], ['Systems integration', 0]]
      }, {
        name: 'Standard',
        price: 2999,
        period: '/ project',
        featured: true,
        description: 'The most common choice — for most companies.',
        features: [['Up to 5 pages', 1], ['Advanced SEO', 1], ['Contact form', 1], ['Admin panel', 1], ['Blog / news', 1], ['ERP integration', 0]]
      }, {
        name: 'Premium',
        price: 5999,
        period: '/ project',
        description: 'For large companies and online stores.',
        features: [['Unlimited pages', 1], ['Admin panel', 1], ['Systems integration (CRM/ERP)', 1], ['Advanced SEO + audit', 1], ['Full 24/7 support', 1], ['Dedicated manager', 1]]
      }],
      cta: 'Choose package',
      band: {
        title: 'Not sure which package to pick?',
        desc: 'Book a free consultation — we will match a solution to your goals and budget.',
        cta: 'Free consultation'
      }
    },
    courses: {
      eyebrow: '// IT Training',
      title: 'Become a developer — learn from practitioners',
      desc: 'Training in programming and web technologies. Small groups (max 8), real projects, certificate.',
      earlyBird: 'New! 10% off for the first 10 people who sign up.',
      tracks: [{
        name: 'Front-end',
        price: 2499,
        period: '/ course',
        icon: 'layout',
        description: 'HTML, CSS, JavaScript, React — fundamentals.',
        features: [['HTML, CSS, JavaScript', 1], ['React basics', 1], ['5 days of training', 1], ['Materials + source code', 1], ['Completion certificate', 1]]
      }, {
        name: 'Back-end',
        price: 3499,
        period: '/ course',
        featured: true,
        icon: 'server',
        description: 'Node.js, Python, REST API, databases.',
        features: [['Node.js, Python', 1], ['REST API basics', 1], ['14 days of training', 1], ['Materials + source code', 1], ['Completion certificate', 1]]
      }, {
        name: 'Full-stack',
        price: 5999,
        period: '/ course',
        icon: 'layers',
        description: 'Next.js, PostgreSQL, advanced React.',
        features: [['Next.js, PostgreSQL', 1], ['Advanced React', 1], ['30 days of training', 1], ['Materials + source code', 1], ['Certificate + portfolio', 1]]
      }],
      perks: [{
        icon: 'users',
        title: 'Small groups',
        desc: 'Max 8 people — individual attention, 3× better results.'
      }, {
        icon: 'book-open',
        title: 'Materials',
        desc: 'Complete materials and source-code access. Worth 2000+ zł.'
      }, {
        icon: 'calendar-clock',
        title: 'Flexibility',
        desc: 'Online or in person, weekends or evenings.'
      }, {
        icon: 'award',
        title: 'Certificate',
        desc: 'Completion certificate for your CV and LinkedIn.'
      }],
      cta: 'Sign up'
    }
  }
};

/* ----------------------------------------------------- shared page chrome */
function PageHero({
  eyebrow,
  title,
  desc
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 24px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 22% 16%, rgba(196,169,232,0.20), transparent 44%), radial-gradient(circle at 80% 24%, rgba(127,210,207,0.16), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(_SH, {
    eyebrow: eyebrow,
    title: title,
    description: desc
  })));
}

/* ----------------------------------------------------- Pricing page */
function PricingPage({
  lang
}) {
  const t = window.IN_DATA[lang];
  const p = PAGE_DATA[lang].pricing;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHero, {
    eyebrow: p.eyebrow,
    title: p.title,
    desc: p.desc
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 24px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch'
    }
  }, p.tiers.map((tier, i) => /*#__PURE__*/React.createElement(PricingCard, {
    key: i,
    name: tier.name,
    price: tier.price,
    period: tier.period,
    featured: tier.featured,
    description: tier.description,
    ctaLabel: p.cta
  }, tier.features.map((f, j) => /*#__PURE__*/React.createElement(_FR, {
    key: j,
    muted: !f[1],
    icon: f[1] ? '✓' : '×'
  }, f[0])))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 24px 88px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: 'var(--radius-2xl)',
      padding: '48px 40px',
      textAlign: 'center',
      background: 'var(--gradient-pastel)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.18,
      backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(0,0,0,0.4) 1px, transparent 0)',
      backgroundSize: '34px 34px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(1.6rem,3vw,2.2rem)',
      fontWeight: 800,
      color: '#16161a',
      margin: '0 0 10px',
      letterSpacing: '-0.015em'
    }
  }, p.band.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 16,
      color: 'rgba(20,20,26,0.78)',
      margin: '0 auto 22px',
      maxWidth: 540,
      lineHeight: 1.6
    }
  }, p.band.desc), /*#__PURE__*/React.createElement("button", {
    style: {
      height: 50,
      padding: '0 30px',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontWeight: 700,
      fontSize: 15,
      color: '#fff',
      background: '#16161a',
      borderRadius: 'var(--radius)'
    }
  }, p.band.cta)))));
}

/* ----------------------------------------------------- Courses page */
function CoursesPage({
  lang
}) {
  const c = PAGE_DATA[lang].courses;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 24px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 22% 16%, rgba(196,169,232,0.20), transparent 44%), radial-gradient(circle at 80% 24%, rgba(127,210,207,0.16), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 820,
      margin: '0 auto',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(_SH, {
    eyebrow: c.eyebrow,
    title: c.title,
    description: c.desc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      padding: '10px 18px',
      borderRadius: 'var(--radius-full)',
      background: 'rgba(196,169,232,0.12)',
      border: '1px solid rgba(196,169,232,0.35)'
    }
  }, /*#__PURE__*/React.createElement(_Icon, {
    n: "sparkles",
    size: 16
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--brand-pastel-lilac)'
    }
  }, c.earlyBird)))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '20px 24px 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch'
    }
  }, c.tracks.map((tr, i) => /*#__PURE__*/React.createElement(PricingCard, {
    key: i,
    name: tr.name,
    price: tr.price,
    period: tr.period,
    featured: tr.featured,
    description: tr.description,
    ctaLabel: c.cta
  }, tr.features.map((f, j) => /*#__PURE__*/React.createElement(_FR, {
    key: j,
    muted: !f[1],
    icon: f[1] ? '✓' : '×'
  }, f[0])))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 24px 90px',
      background: 'var(--surface-card)',
      paddingTop: 70
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 22
    }
  }, c.perks.map((perk, i) => /*#__PURE__*/React.createElement(_Card, {
    key: i,
    hoverable: true,
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-cta)',
      color: '#fff',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(_Icon, {
    n: perk.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      margin: '0 0 6px',
      color: 'var(--text-body)'
    }
  }, perk.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, perk.desc))))));
}

/* ----------------------------------------------------- cross-page nav */
function PageNav({
  lang,
  setLang,
  active
}) {
  const t = window.IN_DATA[lang];
  const links = [{
    href: 'index.html',
    label: t.nav.home,
    key: 'home'
  }, {
    href: 'ecommerce.html',
    label: 'E-commerce',
    key: 'ecommerce'
  }, {
    href: 'pricing.html',
    label: lang === 'pl' ? 'Cennik' : 'Pricing',
    key: 'pricing'
  }, {
    href: 'courses.html',
    label: lang === 'pl' ? 'Szkolenia' : 'Training',
    key: 'courses'
  }, {
    href: 'cases.html',
    label: lang === 'pl' ? 'Realizacje' : 'Work',
    key: 'cases'
  }, {
    href: 'contact.html',
    label: t.nav.contact,
    key: 'contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
      background: 'rgba(9,9,11,0.72)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "index.html"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-horizontal.png",
    alt: "Interactive",
    style: {
      height: 34,
      width: 'auto',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.key,
    href: l.href,
    style: {
      padding: '8px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: active === l.key ? 'var(--text-body)' : 'var(--text-muted)',
      textDecoration: 'none',
      borderRadius: 'var(--radius)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'var(--surface-elevated)',
      borderRadius: 'var(--radius-full)',
      padding: 3,
      border: '1px solid var(--border)'
    }
  }, ['pl', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '5px 12px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      color: lang === l ? '#fff' : 'var(--text-muted)',
      background: lang === l ? 'var(--gradient-cta)' : 'transparent'
    }
  }, l))), /*#__PURE__*/React.createElement(_Button, {
    variant: "interactive",
    onClick: () => {
      window.location.href = 'contact.html';
    }
  }, t.nav.cta)));
}
Object.assign(window, {
  PricingPage,
  CoursesPage,
  PageNav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/pages2.jsx
try { (() => {
/* Interactive — UI-kit pages, part 2 (E-commerce, Contact, Case studies).
   Reuses the design-system components + Nav/Footer chrome. */
const _NS2 = window.InteractiveDesignSystem_1f5bed;
const {
  Button: _Btn2,
  Badge: _Bdg2,
  Card: _Crd2,
  Input: _Inp2,
  Textarea: _Txa2,
  SectionHeading: _SH2,
  PricingCard: _PC2,
  FeatureRow: _FR2,
  CaseCard: _CC2
} = _NS2;
const _Ic2 = window.INIcon;
const PAGE_DATA2 = {
  pl: {
    ecommerce: {
      eyebrow: '// Sklepy internetowe',
      title: 'Sklepy online, które sprzedają',
      desc: 'Profesjonalne sklepy z intuicyjnym panelem, szybkie i bezpieczne. Integracja z płatnościami i ERP w standardzie.',
      services: [{
        icon: 'shopping-cart',
        title: 'Intuicyjny panel',
        desc: 'Setki zamówień dziennie bez problemów. Średni wzrost sprzedaży o 250%.'
      }, {
        icon: 'gauge',
        title: 'Wydajność',
        desc: 'Czas ładowania < 2 s. Wyższa konwersja dzięki lepszemu UX (+180%).'
      }, {
        icon: 'shield-check',
        title: 'Bezpieczeństwo',
        desc: 'SSL, zgodność z RODO/GDPR. Buduje zaufanie i konwersję (+120%).'
      }, {
        icon: 'credit-card',
        title: 'Płatności',
        desc: 'Wszystkie bramki w jednym miejscu. Finalizacja zakupów +200%.'
      }],
      packages: [{
        name: 'Basic',
        price: 2499,
        period: '/ sklep',
        description: 'Dla małych sklepów.',
        features: [['Do 100 produktów', 1], ['Responsywny design', 1], ['Integracja z płatnościami', 1], ['Powiadomienia email', 1], ['System lojalnościowy', 0], ['Integracja z ERP', 0]]
      }, {
        name: 'Standard',
        price: 4999,
        period: '/ sklep',
        featured: true,
        description: 'Dla średnich sklepów — 500+ zamówień/mies.',
        features: [['Do 1000 produktów', 1], ['Integracja z płatnościami', 1], ['Powiadomienia email + SMS', 1], ['System lojalnościowy', 1], ['Panel administracyjny', 1], ['Integracja z ERP', 0]]
      }, {
        name: 'Premium',
        price: 9999,
        period: '/ sklep',
        description: 'Dla dużych sklepów. Skaluje się z biznesem.',
        features: [['Nielimitowane produkty', 1], ['Integracja z ERP', 1], ['System lojalnościowy', 1], ['Wsparcie 24/7', 1], ['Monitoring 99.9% uptime', 1], ['Dedykowany opiekun', 1]]
      }],
      tech: ['WooCommerce', 'PrestaShop', 'Shopify', 'Stripe', 'Przelewy24', 'PayU'],
      cta: 'Wybierz pakiet'
    },
    cases: {
      eyebrow: '// Realizacje',
      title: 'Projekty, które przynoszą wyniki',
      desc: '45+ zrealizowanych projektów, 98% zadowolonych klientów. Oto kilka z nich.',
      filters: ['Wszystkie', 'Strony WWW', 'E-commerce', 'Aplikacje'],
      items: [{
        title: 'Premium Auto',
        category: 'Strony WWW',
        metric: '+250%',
        metricLabel: 'zapytań o ofertę',
        image: '../../assets/case-premium-auto.png',
        tags: ['React', 'TypeScript', 'SEO'],
        filter: 'Strony WWW'
      }, {
        title: 'K9 Wear',
        category: 'E-commerce',
        metric: '+280%',
        metricLabel: 'sprzedaży online',
        icon: 'shopping-bag',
        gradient: 'linear-gradient(135deg,#9333ea,#db2777)',
        tags: ['WooCommerce', 'Stripe'],
        filter: 'E-commerce',
        desc: 'Sklep z odzieżą dla trenerów psów pracujących. Setki zamówień miesięcznie.'
      }, {
        title: 'System ERP',
        category: 'Aplikacje',
        metric: '99.9%',
        metricLabel: 'uptime · 10k+ użytkowników',
        icon: 'server',
        gradient: 'linear-gradient(135deg,#2563eb,#6366f1)',
        tags: ['Enterprise', '.NET', 'MSSQL'],
        filter: 'Aplikacje',
        desc: 'Jeden z najpopularniejszych systemów ERP w Europie. Tysiące użytkowników jednocześnie.'
      }, {
        title: 'OjLala',
        category: 'Strony WWW',
        metric: '+200%',
        metricLabel: 'więcej klientów',
        icon: 'sparkles',
        gradient: 'linear-gradient(135deg,#db2777,#f59e0b)',
        tags: ['Rezerwacje', 'React'],
        filter: 'Strony WWW',
        desc: 'Rezerwacja terminów w salonie kosmetycznym online — 24/7.'
      }, {
        title: 'eButik',
        category: 'E-commerce',
        metric: '+220%',
        metricLabel: 'konwersji',
        icon: 'shopping-cart',
        gradient: 'linear-gradient(135deg,#06b6d4,#2563eb)',
        tags: ['PrestaShop', 'ERP'],
        filter: 'E-commerce',
        desc: 'Sklep z odzieżą premium. Integracja z ERP automatyzuje procesy.'
      }, {
        title: 'Danusia',
        category: 'Strony WWW',
        metric: '+300%',
        metricLabel: 'rezerwacji w Q1',
        icon: 'mountain',
        gradient: 'linear-gradient(135deg,#2ec1ab,#2563eb)',
        tags: ['Rezerwacje 24/7'],
        filter: 'Strony WWW',
        desc: 'Wynajem apartamentu w Zakopanem. System rezerwacji online działa non-stop.'
      }]
    },
    contact: {
      eyebrow: '// Kontakt',
      title: 'Porozmawiajmy o Twoim projekcie',
      desc: 'Masz pytanie, potrzebujesz wyceny lub wsparcia? Napisz lub zadzwoń — odpowiadamy w 24–48 godzin.',
      info: [{
        icon: 'mail',
        label: 'Email',
        value: 'jakub.stawski@interactive.net.pl',
        href: 'mailto:jakub.stawski@interactive.net.pl'
      }, {
        icon: 'phone',
        label: 'Telefon',
        value: '+48 518 275 470',
        href: 'tel:+48518275470'
      }, {
        icon: 'map-pin',
        label: 'Lokalizacja',
        value: 'Zduńska Wola, Polska',
        href: null
      }, {
        icon: 'clock',
        label: 'Odpowiedź',
        value: '24–48 godzin',
        href: null
      }],
      formTitle: 'Napisz do nas',
      name: 'Imię i nazwisko',
      email: 'Email',
      subject: 'Temat',
      message: 'Wiadomość',
      send: 'Wyślij wiadomość',
      sent: 'Dziękujemy! Odezwiemy się w ciągu 24–48 godzin.',
      mapLabel: 'Zduńska Wola'
    }
  },
  en: {
    ecommerce: {
      eyebrow: '// Online stores',
      title: 'Online stores that sell',
      desc: 'Professional stores with an intuitive panel — fast and secure. Payment and ERP integration as standard.',
      services: [{
        icon: 'shopping-cart',
        title: 'Intuitive panel',
        desc: 'Hundreds of orders a day, no problems. Average 250% sales lift.'
      }, {
        icon: 'gauge',
        title: 'Performance',
        desc: 'Load time < 2s. Higher conversion through better UX (+180%).'
      }, {
        icon: 'shield-check',
        title: 'Security',
        desc: 'SSL, GDPR compliance. Builds trust and conversion (+120%).'
      }, {
        icon: 'credit-card',
        title: 'Payments',
        desc: 'All gateways in one place. Checkout completion +200%.'
      }],
      packages: [{
        name: 'Basic',
        price: 2499,
        period: '/ store',
        description: 'For small stores.',
        features: [['Up to 100 products', 1], ['Responsive design', 1], ['Payment integration', 1], ['Email notifications', 1], ['Loyalty system', 0], ['ERP integration', 0]]
      }, {
        name: 'Standard',
        price: 4999,
        period: '/ store',
        featured: true,
        description: 'For medium stores — 500+ orders/mo.',
        features: [['Up to 1000 products', 1], ['Payment integration', 1], ['Email + SMS notifications', 1], ['Loyalty system', 1], ['Admin panel', 1], ['ERP integration', 0]]
      }, {
        name: 'Premium',
        price: 9999,
        period: '/ store',
        description: 'For large stores. Scales with your business.',
        features: [['Unlimited products', 1], ['ERP integration', 1], ['Loyalty system', 1], ['24/7 support', 1], ['99.9% uptime monitoring', 1], ['Dedicated manager', 1]]
      }],
      tech: ['WooCommerce', 'PrestaShop', 'Shopify', 'Stripe', 'Przelewy24', 'PayU'],
      cta: 'Choose package'
    },
    cases: {
      eyebrow: '// Case studies',
      title: 'Projects that drive results',
      desc: '45+ completed projects, 98% satisfied clients. Here are a few of them.',
      filters: ['All', 'Websites', 'E-commerce', 'Apps'],
      items: [{
        title: 'Premium Auto',
        category: 'Websites',
        metric: '+250%',
        metricLabel: 'inquiries',
        image: '../../assets/case-premium-auto.png',
        tags: ['React', 'TypeScript', 'SEO'],
        filter: 'Websites'
      }, {
        title: 'K9 Wear',
        category: 'E-commerce',
        metric: '+280%',
        metricLabel: 'online sales',
        icon: 'shopping-bag',
        gradient: 'linear-gradient(135deg,#9333ea,#db2777)',
        tags: ['WooCommerce', 'Stripe'],
        filter: 'E-commerce',
        desc: 'Clothing for working-dog trainers. Hundreds of orders a month.'
      }, {
        title: 'ERP System',
        category: 'Apps',
        metric: '99.9%',
        metricLabel: 'uptime · 10k+ users',
        icon: 'server',
        gradient: 'linear-gradient(135deg,#2563eb,#6366f1)',
        tags: ['Enterprise', '.NET', 'MSSQL'],
        filter: 'Apps',
        desc: 'One of the most popular ERP systems in Europe. Thousands of concurrent users.'
      }, {
        title: 'OjLala',
        category: 'Websites',
        metric: '+200%',
        metricLabel: 'more clients',
        icon: 'sparkles',
        gradient: 'linear-gradient(135deg,#db2777,#f59e0b)',
        tags: ['Booking', 'React'],
        filter: 'Websites',
        desc: 'Online beauty-salon appointment booking — 24/7.'
      }, {
        title: 'eButik',
        category: 'E-commerce',
        metric: '+220%',
        metricLabel: 'conversion',
        icon: 'shopping-cart',
        gradient: 'linear-gradient(135deg,#06b6d4,#2563eb)',
        tags: ['PrestaShop', 'ERP'],
        filter: 'E-commerce',
        desc: 'Premium clothing store. ERP integration automates processes.'
      }, {
        title: 'Danusia',
        category: 'Websites',
        metric: '+300%',
        metricLabel: 'bookings in Q1',
        icon: 'mountain',
        gradient: 'linear-gradient(135deg,#2ec1ab,#2563eb)',
        tags: ['24/7 booking'],
        filter: 'Websites',
        desc: 'Apartment rental in Zakopane. Online booking runs non-stop.'
      }]
    },
    contact: {
      eyebrow: '// Contact',
      title: "Let's talk about your project",
      desc: 'Question, quote or support? Write or call — we reply within 24–48 hours.',
      info: [{
        icon: 'mail',
        label: 'Email',
        value: 'jakub.stawski@interactive.net.pl',
        href: 'mailto:jakub.stawski@interactive.net.pl'
      }, {
        icon: 'phone',
        label: 'Phone',
        value: '+48 518 275 470',
        href: 'tel:+48518275470'
      }, {
        icon: 'map-pin',
        label: 'Location',
        value: 'Zduńska Wola, Poland',
        href: null
      }, {
        icon: 'clock',
        label: 'Response',
        value: '24–48 hours',
        href: null
      }],
      formTitle: 'Write to us',
      name: 'Full name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send message',
      sent: 'Thank you! We will be in touch within 24–48 hours.',
      mapLabel: 'Zduńska Wola'
    }
  }
};

/* ----------------------------------------------------- E-commerce page */
function EcommercePage({
  lang
}) {
  const e = PAGE_DATA2[lang].ecommerce;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 24px 56px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 20% 18%, rgba(147,51,234,0.24), transparent 44%), radial-gradient(circle at 82% 26%, rgba(37,99,235,0.20), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(_SH2, {
    eyebrow: e.eyebrow,
    title: e.title,
    description: e.desc
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '10px 24px 70px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 20
    }
  }, e.services.map((s, i) => /*#__PURE__*/React.createElement(_Crd2, {
    key: i,
    hoverable: true,
    padding: 24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-cta)',
      color: '#fff',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(_Ic2, {
    n: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 17,
      fontWeight: 700,
      margin: '0 0 6px',
      color: 'var(--text-body)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.desc))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '54px 24px 40px',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto 44px'
    }
  }, /*#__PURE__*/React.createElement(_SH2, {
    eyebrow: lang === 'pl' ? '// Cennik sklepów' : '// Store pricing',
    title: lang === 'pl' ? 'Pakiety sklepów' : 'Store packages'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'stretch'
    }
  }, e.packages.map((tier, i) => /*#__PURE__*/React.createElement(_PC2, {
    key: i,
    name: tier.name,
    price: tier.price,
    period: tier.period,
    featured: tier.featured,
    description: tier.description,
    ctaLabel: e.cta
  }, tier.features.map((f, j) => /*#__PURE__*/React.createElement(_FR2, {
    key: j,
    muted: !f[1],
    icon: f[1] ? '✓' : '×'
  }, f[0]))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '48px auto 0',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'center'
    }
  }, e.tech.map((tg, i) => /*#__PURE__*/React.createElement(_Bdg2, {
    key: i,
    variant: "neutral"
  }, tg)))));
}

/* ----------------------------------------------------- Case studies page */
function CaseStudiesPage({
  lang
}) {
  const c = PAGE_DATA2[lang].cases;
  const [filter, setFilter] = React.useState(c.filters[0]);
  const all = c.filters[0];
  const visible = c.items.filter(it => filter === all || it.filter === filter);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 24px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 22% 16%, rgba(196,169,232,0.18), transparent 44%), radial-gradient(circle at 80% 24%, rgba(127,210,207,0.14), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 820,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(_SH2, {
    eyebrow: c.eyebrow,
    title: c.title,
    description: c.desc
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '8px 24px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1180,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginBottom: 40
    }
  }, c.filters.map(f => {
    const on = filter === f;
    return /*#__PURE__*/React.createElement("button", {
      key: f,
      onClick: () => setFilter(f),
      style: {
        padding: '8px 18px',
        borderRadius: 'var(--radius-full)',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 600,
        border: '1px solid ' + (on ? 'transparent' : 'var(--border)'),
        color: on ? '#fff' : 'var(--text-muted)',
        background: on ? 'var(--gradient-cta)' : 'transparent',
        transition: 'all .2s'
      }
    }, f);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, visible.map((it, i) => /*#__PURE__*/React.createElement(_CC2, {
    key: it.title,
    title: it.title,
    category: it.category,
    metric: it.metric,
    metricLabel: it.metricLabel,
    description: it.desc,
    image: it.image,
    gradient: it.gradient,
    tags: it.tags,
    icon: it.icon ? /*#__PURE__*/React.createElement(_Ic2, {
      n: it.icon,
      size: 22
    }) : null
  }))))));
}

/* ----------------------------------------------------- Contact page */
function ContactPage({
  lang
}) {
  const k = PAGE_DATA2[lang].contact;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '96px 24px 90px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 16% 14%, rgba(147,51,234,0.20), transparent 42%), radial-gradient(circle at 86% 20%, rgba(46,193,171,0.14), transparent 46%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1120,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(_SH2, {
    align: "left",
    eyebrow: k.eyebrow,
    title: k.title,
    description: k.desc
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 32,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, k.info.map((it, i) => {
    const inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'inline-flex',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 'var(--radius)',
        background: 'var(--surface-elevated)',
        border: '1px solid var(--border)',
        color: 'var(--brand-purple)',
        marginBottom: 12
      }
    }, /*#__PURE__*/React.createElement(_Ic2, {
      n: it.icon,
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-subtle)',
        marginBottom: 3
      }
    }, it.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 14,
        fontWeight: 600,
        color: 'var(--text-body)',
        wordBreak: 'break-word'
      }
    }, it.value));
    const cardStyle = {
      padding: 18,
      borderRadius: 'var(--radius-xl)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      textDecoration: 'none',
      display: 'block'
    };
    return it.href ? /*#__PURE__*/React.createElement("a", {
      key: i,
      href: it.href,
      style: cardStyle
    }, inner) : /*#__PURE__*/React.createElement("div", {
      key: i,
      style: cardStyle
    }, inner);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      height: 260,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: k.mapLabel,
    width: "100%",
    height: "100%",
    style: {
      border: 0,
      filter: 'grayscale(0.3) invert(0.9) hue-rotate(180deg) contrast(0.9)'
    },
    loading: "lazy",
    src: "https://maps.google.com/maps?q=Zdu%C5%84ska%20Wola%2C%20Poland&t=&z=13&ie=UTF8&iwloc=&output=embed"
  }))), /*#__PURE__*/React.createElement(_Crd2, {
    padding: 30
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      minHeight: 360,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 60,
      height: 60,
      borderRadius: '50%',
      background: 'var(--gradient-cta)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(_Ic2, {
    n: "check",
    size: 30
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 19,
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: 320
    }
  }, k.sent)) : /*#__PURE__*/React.createElement("form", {
    onSubmit: ev => {
      ev.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      margin: 0,
      color: 'var(--text-body)'
    }
  }, k.formTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, k.name), /*#__PURE__*/React.createElement(_Inp2, {
    required: true,
    placeholder: "Jan Kowalski"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, k.email), /*#__PURE__*/React.createElement(_Inp2, {
    required: true,
    type: "email",
    placeholder: "jan@firma.pl"
  }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, k.subject), /*#__PURE__*/React.createElement(_Inp2, {
    placeholder: lang === 'pl' ? 'Nowy sklep internetowy' : 'New online store'
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, k.message), /*#__PURE__*/React.createElement(_Txa2, {
    required: true,
    rows: 5,
    placeholder: "\u2026"
  })), /*#__PURE__*/React.createElement(_Btn2, {
    variant: "interactive",
    size: "lg",
    type: "submit",
    rightIcon: /*#__PURE__*/React.createElement(_Ic2, {
      n: "send",
      size: 16
    })
  }, k.send))))));
}
Object.assign(window, {
  EcommercePage,
  CaseStudiesPage,
  ContactPage
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/pages2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/sections.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Interactive — Website UI kit sections.
   Recreates the homepage of interactive.net.pl using the design-system components.
   Exposes components on window for index.html to assemble. */
const NS = window.InteractiveDesignSystem_1f5bed;
const {
  Button,
  Badge,
  Card,
  Input,
  Textarea,
  Switch,
  SectionHeading,
  ServiceCard,
  StatCard,
  ProcessStep,
  TestimonialCard,
  FeatureRow
} = NS;
const LOGO = '../../assets/logo-horizontal.png';
const Icon = ({
  n,
  size = 20
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: size,
    height: size
  }
});

/* ---------------------------------------------------------------- Nav */
function Nav({
  t,
  lang,
  setLang,
  scrolled
}) {
  const links = [{
    id: 'offer',
    label: t.nav.offer
  }, {
    href: 'ecommerce.html',
    label: 'E-commerce'
  }, {
    href: 'pricing.html',
    label: lang === 'pl' ? 'Cennik' : 'Pricing'
  }, {
    href: 'courses.html',
    label: lang === 'pl' ? 'Szkolenia' : 'Training'
  }, {
    href: 'cases.html',
    label: lang === 'pl' ? 'Realizacje' : 'Work'
  }, {
    href: 'contact.html',
    label: t.nav.contact
  }];
  const go = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      width: '100%',
      background: scrolled ? 'rgba(9,9,11,0.72)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      transition: 'background .3s, border-color .3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Interactive",
    style: {
      height: 34,
      width: 'auto'
    }
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 4,
      marginLeft: 'auto'
    }
  }, links.map((l, i) => {
    const css = {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '8px 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--text-muted)',
      borderRadius: 'var(--radius)',
      transition: 'color .2s',
      textDecoration: 'none'
    };
    const enter = e => e.currentTarget.style.color = 'var(--text-body)';
    const leave = e => e.currentTarget.style.color = 'var(--text-muted)';
    return l.href ? /*#__PURE__*/React.createElement("a", {
      key: i,
      href: l.href,
      style: css,
      onMouseEnter: enter,
      onMouseLeave: leave
    }, l.label) : /*#__PURE__*/React.createElement("button", {
      key: i,
      onClick: () => go(l.id),
      style: css,
      onMouseEnter: enter,
      onMouseLeave: leave
    }, l.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      background: 'var(--surface-elevated)',
      borderRadius: 'var(--radius-full)',
      padding: 3,
      border: '1px solid var(--border)'
    }
  }, ['pl', 'en'].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      border: 'none',
      cursor: 'pointer',
      padding: '5px 12px',
      borderRadius: 'var(--radius-full)',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 600,
      textTransform: 'uppercase',
      color: lang === l ? '#fff' : 'var(--text-muted)',
      background: lang === l ? 'var(--gradient-cta)' : 'transparent'
    }
  }, l))), /*#__PURE__*/React.createElement(Button, {
    variant: "interactive",
    size: "default",
    onClick: () => go('contact')
  }, t.nav.cta)));
}

/* ---------------------------------------------------------------- Hero */
function Hero({
  t
}) {
  const go = id => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      padding: '120px 24px 110px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      pointerEvents: 'none',
      background: 'radial-gradient(circle at 18% 22%, rgba(147,51,234,0.28), transparent 42%), radial-gradient(circle at 82% 30%, rgba(37,99,235,0.24), transparent 45%), radial-gradient(circle at 60% 90%, rgba(46,193,171,0.16), transparent 50%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 880,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "in-eyebrow"
  }, t.hero.eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
      fontWeight: 800,
      lineHeight: 1.04,
      letterSpacing: '-0.02em',
      margin: 0,
      background: 'var(--gradient-brand)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      color: 'transparent'
    }
  }, t.hero.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1.05rem, 2vw, 1.35rem)',
      fontWeight: 400,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      maxWidth: 640,
      margin: 0
    }
  }, t.hero.subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "interactive",
    size: "lg",
    onClick: () => go('offer'),
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-down",
      size: 18
    })
  }, t.hero.cta), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "lg",
    onClick: () => go('process')
  }, t.hero.cta2)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "React"), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "TypeScript"), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "AI"), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand"
  }, "ERP"), /*#__PURE__*/React.createElement(Badge, {
    variant: "success"
  }, "99.9% uptime"))));
}

/* ---------------------------------------------------------------- Offer */
function Offer({
  t
}) {
  const aligns = ['right', 'center', 'left'];
  return /*#__PURE__*/React.createElement("section", {
    id: "offer",
    style: {
      padding: '88px 24px',
      background: 'linear-gradient(180deg, var(--background), var(--surface-card))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.offer.eyebrow,
    title: t.offer.title,
    description: t.offer.desc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, t.offer.items.map((it, i) => /*#__PURE__*/React.createElement(ServiceCard, {
    key: i,
    title: it.title,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: it.icon,
      size: 30
    }),
    price: it.price,
    description: it.desc,
    align: aligns[i],
    ctaLabel: t.nav.offer === 'Services' ? 'Check' : 'Sprawdź'
  })))));
}

/* ---------------------------------------------------------------- Stats */
function Stats({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      padding: '88px 24px',
      background: 'var(--gradient-band)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      inset: 0,
      opacity: 0.12,
      backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
      backgroundSize: '40px 40px'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 44
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 800,
      color: '#fff',
      textAlign: 'center',
      margin: 0,
      letterSpacing: '-0.015em'
    }
  }, t.stats.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: 22,
      width: '100%'
    }
  }, t.stats.items.map((s, i) => /*#__PURE__*/React.createElement(StatCard, {
    key: i,
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: s.icon,
      size: 26
    }),
    value: s.value,
    label: s.label,
    gradient: ['var(--gradient-cta)', 'linear-gradient(90deg,#9333ea,#db2777)', 'linear-gradient(90deg,#db2777,#ef4444)', 'linear-gradient(90deg,#06b6d4,#2563eb)'][i]
  })))));
}

/* ---------------------------------------------------------------- Process */
function Process({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    style: {
      padding: '88px 24px',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 56
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.process.eyebrow,
    title: t.process.title,
    description: t.process.desc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 22,
      width: '100%'
    }
  }, t.process.steps.map((s, i) => /*#__PURE__*/React.createElement(ProcessStep, _extends({
    key: i
  }, s, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: s.icon,
      size: 20
    })
  }))))));
}

/* ---------------------------------------------------------------- About (values + achievements) */
function About({
  t,
  lang
}) {
  const values = lang === 'pl' ? [{
    icon: 'award',
    title: 'Doświadczenie',
    desc: '7+ lat w branży IT — od infrastruktury krytycznej po systemy ERP.'
  }, {
    icon: 'shield',
    title: 'Bezpieczeństwo',
    desc: 'Zgodność z RODO/GDPR, certyfikaty SSL, regularne backupy.'
  }, {
    icon: 'zap',
    title: 'Szybkość',
    desc: 'Średni czas realizacji 4–6 tygodni, bez kompromisów w jakości.'
  }, {
    icon: 'target',
    title: 'Skuteczność',
    desc: 'Średni wzrost konwersji o 150%. Skupiamy się na wynikach.'
  }] : [{
    icon: 'award',
    title: 'Experience',
    desc: '7+ years in IT — from critical infrastructure to ERP systems.'
  }, {
    icon: 'shield',
    title: 'Security',
    desc: 'GDPR compliance, SSL certificates, regular backups.'
  }, {
    icon: 'zap',
    title: 'Speed',
    desc: 'Average delivery 4–6 weeks, no quality compromises.'
  }, {
    icon: 'target',
    title: 'Effectiveness',
    desc: 'Average 150% conversion lift. We focus on results.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      padding: '88px 24px',
      background: 'var(--background)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: lang === 'pl' ? '// O nas' : '// About',
    title: lang === 'pl' ? 'Inżynieria z myśleniem biznesowym' : 'Engineering with a business mindset',
    description: lang === 'pl' ? 'Od 2017 roku pomagamy firmom osiągać sukces online — produkty, które działają, skalują się i dają realną wartość od pierwszego dnia.' : 'Since 2017 we help businesses succeed online — products that perform, scale and deliver real value from day one.'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: 22,
      width: '100%'
    }
  }, values.map((v, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    hoverable: true,
    padding: 26
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-full)',
      background: 'var(--gradient-cta)',
      color: '#fff',
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: v.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontWeight: 700,
      margin: '0 0 6px',
      color: 'var(--text-body)'
    }
  }, v.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, v.desc))))));
}

/* ---------------------------------------------------------------- Testimonials */
function Testimonials({
  t
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 24px',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.testimonials.eyebrow,
    title: t.testimonials.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, t.testimonials.items.map((it, i) => /*#__PURE__*/React.createElement(TestimonialCard, _extends({
    key: i
  }, it))))));
}

/* ---------------------------------------------------------------- FAQ */
function Faq({
  t
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '88px 24px',
      background: 'var(--background)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 820,
      margin: '0 auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: t.faq.eyebrow,
    title: t.faq.title
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, t.faq.items.map((f, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--surface-card)',
        overflow: 'hidden',
        borderColor: isOpen ? 'rgba(147,51,234,0.4)' : 'var(--border)',
        transition: 'border-color .3s'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        padding: '18px 22px',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        textAlign: 'left'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-body)',
        fontSize: 16,
        fontWeight: 600,
        color: 'var(--text-body)',
        flex: 1
      }
    }, f.q), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--brand-purple)',
        transform: isOpen ? 'rotate(45deg)' : 'none',
        transition: 'transform .3s',
        fontSize: 22,
        lineHeight: 1
      }
    }, "+")), /*#__PURE__*/React.createElement("div", {
      style: {
        maxHeight: isOpen ? 240 : 0,
        overflow: 'hidden',
        transition: 'max-height .35s var(--ease-out-expo)'
      }
    }, /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        padding: '0 22px 20px',
        fontFamily: 'var(--font-body)',
        fontSize: 14.5,
        lineHeight: 1.65,
        color: 'var(--text-muted)'
      }
    }, f.a)));
  }))));
}

/* ---------------------------------------------------------------- Contact */
function Contact({
  t
}) {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: '88px 24px',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1000,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: 48,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    align: "left",
    eyebrow: t.contact.eyebrow,
    title: t.contact.title,
    description: t.contact.desc
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:jakub.stawski@interactive.net.pl",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-muted)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "mail",
    size: 18
  }), " jakub.stawski@interactive.net.pl"), /*#__PURE__*/React.createElement("a", {
    href: "tel:+48518275470",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-muted)',
      textDecoration: 'none',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "phone",
    size: 18
  }), " +48 518 275 470"), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-muted)',
      fontSize: 14
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "map-pin",
    size: 18
  }), " Zdu\u0144ska Wola, Polska"))), /*#__PURE__*/React.createElement(Card, {
    padding: 28
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 14,
      minHeight: 280,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--gradient-cta)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    size: 28
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 18,
      color: 'var(--text-body)',
      margin: 0
    }
  }, t.contact.sent)) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, t.contact.name), /*#__PURE__*/React.createElement(Input, {
    required: true,
    placeholder: "Jan Kowalski"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, t.contact.email), /*#__PURE__*/React.createElement(Input, {
    required: true,
    type: "email",
    placeholder: "jan@firma.pl"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    className: "in-eyebrow",
    style: {
      display: 'block',
      marginBottom: 6
    }
  }, t.contact.message), /*#__PURE__*/React.createElement(Textarea, {
    required: true,
    rows: 4,
    placeholder: "\u2026"
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "interactive",
    size: "lg",
    type: "submit",
    rightIcon: /*#__PURE__*/React.createElement(Icon, {
      n: "send",
      size: 16
    })
  }, t.contact.send)))));
}

/* ---------------------------------------------------------------- Footer */
function Footer({
  t,
  lang
}) {
  const socials = ['facebook', 'instagram', 'linkedin', 'github'];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: '56px 24px 36px',
      background: 'var(--background)',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: LOGO,
    alt: "Interactive",
    style: {
      height: 32,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      lineHeight: 1.6,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, t.footer.tagline), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      marginTop: 18
    }
  }, socials.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius)',
      border: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      background: 'var(--surface-elevated)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: s,
    size: 16
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-body)',
      margin: '0 0 14px'
    }
  }, t.footer.menu), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, [t.nav.offer, t.nav.about, t.nav.process, t.nav.contact].map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)',
      textDecoration: 'none'
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "success",
    style: {
      alignSelf: 'flex-start'
    }
  }, "RODO / GDPR"), /*#__PURE__*/React.createElement(Badge, {
    variant: "brand",
    style: {
      alignSelf: 'flex-start'
    }
  }, "SSL"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-subtle)',
      marginTop: 'auto'
    }
  }, "interactive.net.pl"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '32px auto 0',
      paddingTop: 24,
      borderTop: '1px solid var(--border)',
      textAlign: 'center',
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-subtle)'
    }
  }, "\xA9 ", new Date().getFullYear(), " Interactive. ", t.footer.rights));
}
Object.assign(window, {
  Nav,
  Hero,
  Offer,
  Stats,
  Process,
  About,
  Testimonials,
  Faq,
  Contact,
  Footer,
  INIcon: Icon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.CaseCard = __ds_scope.CaseCard;

__ds_ns.FeatureRow = __ds_scope.FeatureRow;

__ds_ns.PricingCard = __ds_scope.PricingCard;

__ds_ns.ProcessStep = __ds_scope.ProcessStep;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.TestimonialCard = __ds_scope.TestimonialCard;

})();
