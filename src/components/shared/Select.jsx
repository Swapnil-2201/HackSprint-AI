// src/components/shared/Select.jsx

import { forwardRef } from "react";
import { ChevronDown, AlertCircle } from "lucide-react";

const Select = forwardRef(
  (
    {
      label,
      options = [],
      placeholder = "Select an option",
      error,
      helperText,
      required = false,
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

        {/* Select */}

        <div className="relative">
          <select
            ref={ref}
            className={`
              w-full
              appearance-none
              rounded-xl
              border
              bg-white
              px-4
              py-3
              pr-10
              text-sm
              text-slate-900
              outline-none
              transition-all
              duration-200
              focus:ring-2
              dark:bg-slate-900
              dark:text-white
              ${
                error
                  ? "border-red-500 focus:ring-red-500"
                  : "border-slate-300 focus:border-blue-500 focus:ring-blue-500 dark:border-slate-700"
              }
              ${className}
            `}
            {...props}
          >
            <option value="">
              {placeholder}
            </option>

            {options.map((option) => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>

          {/* Right Icon */}

          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
            {error ? (
              <AlertCircle
                size={18}
                className="text-red-500"
              />
            ) : (
              <ChevronDown
                size={18}
                className="text-slate-400"
              />
            )}
          </div>
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

Select.displayName = "Select";

export default Select;