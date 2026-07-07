import React from 'react';

const Button = ({
  children,
  onClick,
  variant = 'default', // 'default', 'primary', 'secondary', 'accent', 'success', 'danger', 'warning'
  disabled = false,
  className = '',
  icon: Icon,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-white hover:brightness-95 focus:ring-primary/30 border-primary/25';
      case 'secondary':
        return 'bg-secondary text-white hover:brightness-95 focus:ring-secondary/30 border-secondary/25';
      case 'accent':
        return 'bg-accent text-white hover:brightness-95 focus:ring-accent/30 border-accent/25';
      case 'success':
        return 'bg-success text-white hover:brightness-95 focus:ring-success/30 border-success/25';
      case 'danger':
        return 'bg-danger text-white hover:brightness-95 focus:ring-danger/30 border-danger/25';
      case 'warning':
        return 'bg-warning text-white hover:brightness-95 focus:ring-warning/30 border-warning/25';
      default:
        return 'bg-white dark:bg-slate-800 text-text-primary hover:bg-slate-50 dark:hover:bg-slate-700 border-slate-200/40 dark:border-slate-700/40';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        clay-btn px-5 py-2.5 flex items-center justify-center gap-2 text-sm font-semibold
        outline-none focus:ring-2 focus:ring-offset-0 disabled:opacity-40 transition-all duration-200
        ${getVariantStyles()}
        ${className}
      `}
      {...props}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {children}
    </button>
  );
};

export default Button;
