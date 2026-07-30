// src/components/Sidebar.jsx

import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Lightbulb,
  Map,
  AlertTriangle,
  CheckSquare,
  Presentation,
  Settings,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Workspace",
    path: "/workspace",
    icon: FolderKanban,
  },
  {
    name: "Idea Analyzer",
    path: "/idea",
    icon: Lightbulb,
  },
  {
    name: "Roadmap",
    path: "/roadmap",
    icon: Map,
  },
  {
    name: "Risk Analysis",
    path: "/risks",
    icon: AlertTriangle,
  },
  {
    name: "Checklist",
    path: "/checklist",
    icon: CheckSquare,
  },
  {
    name: "Pitch Generator",
    path: "/pitch",
    icon: Presentation,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="hidden w-72 flex-col border-r border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900 lg:flex">

      {/* Logo */}

      <div className="border-b border-slate-200 p-6 dark:border-slate-700">
        <div className="flex items-center gap-3">

          <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-3 text-white shadow-lg">
            <Sparkles size={24} />
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              HackSprint AI
            </h2>

            <p className="text-sm text-slate-500">
              AI Coach
            </p>
          </div>

        </div>
      </div>

      {/* Navigation */}

      <nav className="flex-1 space-y-2 overflow-y-auto p-5">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
                }`
              }
            >
              <Icon size={20} />

              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}

      <div className="border-t border-slate-200 p-5 dark:border-slate-700">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white">

          <h3 className="text-lg font-semibold">
            🚀 Ready to Win?
          </h3>

          <p className="mt-2 text-sm text-blue-100">
            Turn your ideas into winning hackathon projects with AI-powered
            planning, risk analysis, roadmaps, and pitch generation.
          </p>

        </div>
      </div>

    </aside>
  );
};

export default Sidebar;