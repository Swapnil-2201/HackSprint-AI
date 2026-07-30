// src/components/shared/Spinner.jsx

import { Loader2 } from "lucide-react";

const Spinner = ({
  size = "md",
  color = "blue",
  text,
  fullScreen = false,
  className = "",
}) => {
  const sizes = {
    sm: 18,
    md: 28,
    lg: 40,
    xl: 56,
  };

  const colors = {
    blue: "text-blue-600",
    green: "text-green-600",
    red: "text-red-600",
    yellow: "text-yellow-500",
    purple: "text-purple-600",
    white: "text-white",
    gray: "text-slate-500",
  };

  const content = (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
    >
      <Loader2
        size={sizes[size]}
        className={`animate-spin ${colors[color]}`}
      />

      {text && (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm dark:bg-slate-950/80">
        {content}
      </div>
    );
  }

  return content;
};

export default Spinner;