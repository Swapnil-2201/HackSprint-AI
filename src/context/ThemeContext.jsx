// src/context/ThemeContext.jsx

import { createContext, useContext, useEffect, useMemo, useState } from "react";

const ThemeContext = createContext(null);

const STORAGE_KEY = "hacksprint_theme";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEY);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  const defaultTheme =
    import.meta.env.VITE_DEFAULT_THEME || "light";

  if (defaultTheme === "system") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  return defaultTheme;
};

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  useEffect(() => {
    if (
      (import.meta.env.VITE_DEFAULT_THEME || "light") !== "system"
    ) {
      return;
    }

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = (event) => {
      const saved = localStorage.getItem(STORAGE_KEY);

      // Don't override a user's explicit preference.
      if (!saved) {
        setTheme(event.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      setTheme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useThemeContext must be used within ThemeProvider."
    );
  }

  return context;
}

export default ThemeContext;