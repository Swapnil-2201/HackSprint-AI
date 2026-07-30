// src/components/shared/Input.jsx

import { forwardRef } from "react";
import { AlertCircle } from "lucide-react";

const Input = forwardRef(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      className = "",
      containerClassName = "",
      required = false,
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
              <span className="ml-1 text-red-500">
                *
              </span>
            )}
          </label>
        )}

        {/* Input */}

        <div className="relative">
          {leftIcon && (
            <div className="absolute inset-y-0 left-3 flex items-center text-slate-400">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
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
                leftIcon
                  ? "pl-11"
                  : ""
              }
              ${
                rightIcon || error
                  ? "pr-11"
                  : ""
              }
              ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700"
              }
              ${className}
            `}
            {...props}
          />

          {error ? (
            <div className="absolute inset-y-0 right-3 flex items-center text-red-500">
              <AlertCircle size={18} />
            </div>
          ) : (
            rightIcon && (
              <div className="absolute inset-y-0 right-3 flex items-center text-slate-400">
                {rightIcon}
              </div>
            )
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

Input.displayName = "Input";

export default Input;