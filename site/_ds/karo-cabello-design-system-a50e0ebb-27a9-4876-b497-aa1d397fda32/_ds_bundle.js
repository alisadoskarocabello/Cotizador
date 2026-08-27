/* @ds-bundle: {"format":4,"namespace":"KaroCabelloDesignSystem_a50e0e","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"9ad70041c19c","components/core/Button.jsx":"11e34829c496","components/core/Card.jsx":"dc304b980e3d","components/core/Input.jsx":"f81870984329","components/core/Select.jsx":"fd18cee3a221"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.KaroCabelloDesignSystem_a50e0e = window.KaroCabelloDesignSystem_a50e0e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function Badge({
  children,
  tone = "accent"
}) {
  const tones = {
    accent: {
      background: "var(--accent)",
      color: "var(--text-on-accent)"
    },
    soft: {
      background: "var(--accent-soft)",
      color: "var(--accent-active)"
    },
    outline: {
      background: "transparent",
      color: "var(--accent)",
      border: "1px solid var(--accent)"
    },
    neutral: {
      background: "var(--surface-taupe)",
      color: "var(--text-primary)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      display: "inline-block",
      ...tones[tone]
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  children,
  variant = "primary",
  size = "md",
  disabled,
  onClick,
  type = "button"
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 500,
    letterSpacing: "var(--tracking-wide)",
    border: "1px solid transparent",
    borderRadius: "var(--radius-sm)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    transition: "background-color 180ms ease-out, color 180ms ease-out, transform 120ms ease-out",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    whiteSpace: "nowrap",
    flexShrink: 0
  };
  const sizes = {
    sm: {
      padding: "8px 16px",
      fontSize: 13
    },
    md: {
      padding: "12px 24px",
      fontSize: 15
    },
    lg: {
      padding: "16px 32px",
      fontSize: 16
    }
  };
  const variants = {
    primary: {
      background: "var(--accent)",
      color: "var(--text-on-accent)",
      borderColor: "var(--accent)"
    },
    secondary: {
      background: "transparent",
      color: "var(--accent)",
      borderColor: "var(--accent)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-primary)",
      borderColor: "transparent"
    },
    inverse: {
      background: "var(--cream-100)",
      color: "var(--espresso-900)",
      borderColor: "var(--cream-100)"
    }
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  let style = {
    ...base,
    ...sizes[size],
    ...variants[variant]
  };
  if (!disabled && hover) {
    if (variant === "primary") style.background = "var(--accent-hover)";
    if (variant === "secondary") {
      style.background = "var(--accent-soft)";
    }
    if (variant === "ghost") style.background = "var(--accent-soft)";
  }
  if (!disabled && active) {
    style.transform = "translateY(1px)";
    if (variant === "primary") style.background = "var(--accent-active)";
  }
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    style: style,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  children,
  padding = 24,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--bg-surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-md)",
      border: "1px solid var(--border-subtle)",
      padding,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  name
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    name: name,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--bg-surface)",
      border: `1px solid ${focus ? "var(--border-strong)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      outline: "none",
      transition: "border-color 150ms ease-out"
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  value,
  onChange,
  name
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-body)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, label), /*#__PURE__*/React.createElement("select", {
    name: name,
    value: value,
    onChange: onChange,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-primary)",
      background: "var(--bg-surface)",
      border: "1px solid var(--border-default)",
      borderRadius: "var(--radius-sm)",
      padding: "12px 14px",
      outline: "none"
    }
  }, options.map(opt => /*#__PURE__*/React.createElement("option", {
    key: opt,
    value: opt
  }, opt))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

})();
