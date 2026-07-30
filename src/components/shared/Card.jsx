// src/components/shared/Card.jsx

const Card = ({
  children,
  title,
  subtitle,
  headerAction,
  footer,
  padding = "md",
  hover = false,
  bordered = true,
  className = "",
}) => {
  const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <div
      className={`
        rounded-2xl
        bg-white
        shadow-sm
        dark:bg-slate-900
        ${
          bordered
            ? "border border-slate-200 dark:border-slate-700"
            : ""
        }
        ${
          hover
            ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            : ""
        }
        ${className}
      `}
    >
      {(title || subtitle || headerAction) && (
        <div className="flex items-start justify-between border-b border-slate-200 p-6 dark:border-slate-700">
          <div>
            {title && (
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                {title}
              </h3>
            )}

            {subtitle && (
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {subtitle}
              </p>
            )}
          </div>

          {headerAction && (
            <div>{headerAction}</div>
          )}
        </div>
      )}

      <div className={paddingClasses[padding]}>
        {children}
      </div>

      {footer && (
        <div className="border-t border-slate-200 p-6 dark:border-slate-700">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;