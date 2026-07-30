// src/components/Loading.jsx

import { Loader2 } from "lucide-react";

const Loading = ({
  fullScreen = false,
  text = "Loading...",
  size = "md",
}) => {
  const spinnerSize = {
    sm: "h-6 w-6",
    md: "h-10 w-10",
    lg: "h-14 w-14",
    xl: "h-20 w-20",
  };

  return (
    <div
      className={`flex items-center justify-center ${
        fullScreen ? "min-h-screen" : "h-64"
      }`}
    >
      <div className="flex flex-col items-center gap-5">
        {/* Spinner */}

        <div className="relative">
          <div
            className={`rounded-full border-4 border-slate-200 dark:border-slate-700 ${spinnerSize[size]}`}
          />

          <Loader2
            className={`absolute inset-0 animate-spin text-blue-600 ${spinnerSize[size]}`}
          />
        </div>

        {/* Loading Text */}

        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {text}
          </h3>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Please wait while we process your request.
          </p>
        </div>

        {/* Animated Dots */}

        <div className="flex gap-2">
          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600"
            style={{ animationDelay: "0ms" }}
          />

          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600"
            style={{ animationDelay: "150ms" }}
          />

          <span
            className="h-2.5 w-2.5 animate-bounce rounded-full bg-blue-600"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;