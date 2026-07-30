import { Loader2 } from "lucide-react";

export default function LoadingSpinner({
  size = 40,
  text = "Loading...",
  fullScreen = false,
}) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-4">
      <Loader2
        size={size}
        className="animate-spin text-blue-600"
      />

      {text && (
        <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
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

  return (
    <div className="flex items-center justify-center py-10">
      {content}
    </div>
  );
}