// src/components/shared/Badge.jsx

const variants = {
  primary:
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",

  secondary:
    "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",

  success:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",

  warning:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300",

  danger:
    "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",

  info:
    "bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300",

  purple:
    "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300",
};

const sizes = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
  lg: "px-4 py-1.5 text-base",
};

const Badge = ({
  children,
  variant = "primary",
  size = "md",
  rounded = true,
  className = "",
}) => {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        whitespace-nowrap
        transition-colors
        ${variants[variant]}
        ${sizes[size]}
        ${rounded ? "rounded-full" : "rounded-lg"}
        ${className}
      `}
    >
      {children}
    </span>
  );
};

export default Badge;