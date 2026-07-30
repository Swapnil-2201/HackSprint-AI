import { Moon, Sun } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-white transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700"
      aria-label="Toggle Theme"
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {isDark ? (
        <Sun size={20} className="text-yellow-400" />
      ) : (
        <Moon size={20} className="text-slate-700 dark:text-slate-200" />
      )}
    </button>
  );
}