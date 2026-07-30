// src/components/shared/Textarea.jsx

import { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

const Textarea = forwardRef(
  (
    {
      label,
      error,
      helperText,
      required = false,
      rows = 5,
      resize = true,
      containerClassName = "",
      className = "",
      ...props
    },
    ref
  ) => {
    return (
      <div className={`w-full ${containerClassName}`}>
        {/* Label */}

        {label && (
          <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
            {label}

            {required && (
              <span className="ml-1 text-red-500">*</span>
            )}
          </label>
        )}

        {/* Textarea */}

        <div className="relative">
          <textarea
            ref={ref}
            rows={rows}
            className={`
              w-full
              rounded-xl
              border
              bg-white
              px-4
              py-3
              text-sm
              text-slate-900
              outline-none
              transition-all
              duration-200
              placeholder:text-slate-400
              focus:ring-2
              dark:bg-slate-900
              dark:text-white
              dark:placeholder:text-slate-500
              ${
                resize ? "resize-y" : "resize-none"
              }
              ${
                error
                  ? "border-red-500 focus:ring-red-500 pr-11"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700"
              }
              ${className}
            `}
            {...props}
          />

          {error && (
            <div className="absolute right-3 top-3 text-red-500">
              <AlertCircle size={18} />
            </div>
          )}
        </div>

        {/* Helper / Error */}

        {error ? (
          <p className="mt-2 text-sm text-red-500">
            {error}
          </p>
        ) : (
          helperText && (
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              {helperText}
            </p>
          )
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;