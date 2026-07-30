// src/components/shared/EmptyState.jsx

import { SearchX } from "lucide-react";
import Button from "./Button";

const EmptyState = ({
  icon: Icon = SearchX,
  title = "No Data Found",
  description = "There's nothing to display here yet.",
  actionLabel,
  onAction,
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        rounded-2xl border border-dashed border-slate-300
        bg-white p-10 text-center
        dark:border-slate-700 dark:bg-slate-900
        ${className}
      `}
    >
      {/* Icon */}

      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
        <Icon
          size={40}
          className="text-blue-600 dark:text-blue-400"
        />
      </div>

      {/* Title */}

      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
        {title}
      </h2>

      {/* Description */}

      <p className="mt-3 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
        {description}
      </p>

      {/* Custom Content */}

      {children && (
        <div className="mt-6 w-full">
          {children}
        </div>
      )}

      {/* Action */}

      {actionLabel && onAction && (
        <div className="mt-8">
          <Button onClick={onAction}>
            {actionLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyState;