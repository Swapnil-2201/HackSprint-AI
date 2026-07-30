// src/components/Breadcrumb.jsx

import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const routeNames = {
  dashboard: "Dashboard",
  workspace: "Workspace",
  create: "Create Project",
  settings: "Settings",
  profile: "Profile",
  account: "Account",
  appearance: "Appearance",
  roadmap: "Roadmap",
  risks: "Risk Analysis",
  checklist: "Checklist",
  pitch: "Pitch Generator",
  idea: "Idea Analyzer",
  landing: "Home",
};

const Breadcrumb = () => {
  const location = useLocation();

  const pathnames = location.pathname
    .split("/")
    .filter(Boolean);

  return (
    <nav
      className="mb-6 flex flex-wrap items-center gap-2 text-sm"
      aria-label="Breadcrumb"
    >
      {/* Home */}

      <Link
        to="/"
        className="flex items-center gap-2 rounded-lg px-2 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800"
      >
        <Home size={16} />
        Home
      </Link>

      {pathnames.map((segment, index) => {
        const url =
          "/" +
          pathnames
            .slice(0, index + 1)
            .join("/");

        const isLast =
          index === pathnames.length - 1;

        const label =
          routeNames[segment] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) =>
              char.toUpperCase()
            );

        return (
          <div
            key={url}
            className="flex items-center gap-2"
          >
            <ChevronRight
              size={16}
              className="text-slate-400"
            />

            {isLast ? (
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                {label}
              </span>
            ) : (
              <Link
                to={url}
                className="rounded-lg px-2 py-1 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-400 dark:hover:bg-slate-800"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;