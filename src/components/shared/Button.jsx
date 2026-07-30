// src/components/shared/Button.jsx

import { forwardRef } from "react";
import { Loader2 } from "lucide-react";

const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

  secondary:
    "bg-slate-200 text-slate-900 hover:bg-slate-300 dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600",

  outline:
    "border border-slate-300 bg-transparent text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-white dark:hover:bg-slate-800",

  success:
    "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",

  danger:
    "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

  warning:
    "bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500",

  ghost:
    "bg-transparent text-slate-700 hover:bg-slate-100 dark:text-white dark:hover:bg-slate-800",
};

const sizes = {
  sm: "h-9 px-3 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-6 text-base",
};

const Button = forwardRef(
  (
    {
      children,
      type = "button",
      variant = "primary",
      size = "md",
      loading = false,
      disabled = false,
      fullWidth = false,
      leftIcon,
      rightIcon,
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled || loading}
        className={`
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-xl
          font-medium
          transition-all
          duration-200
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-60
          ${variants[variant]}
          ${sizes[size]}
          ${fullWidth ? "w-full" : ""}
          ${className}
        `}
        {...props}
      >
        {loading ? (
          <>
            <Loader2
              size={18}
              className="animate-spin"
            />
            Loading...
          </>
        ) : (
          <>
            {leftIcon}

            {children}

            {rightIcon}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;