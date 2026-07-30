// src/components/MobileSidebar.jsx

import { Link, NavLink } from "react-router-dom";
import {
  X,
  LayoutDashboard,
  FolderKanban,
  Lightbulb,
  Map,
  AlertTriangle,
  CheckSquare,
  Presentation,
  Settings,
  Home,
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

const MobileSidebar = ({
  isOpen,
  onClose,
}) => {
  return (
    <>
      {/* Overlay */}

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      />

      {/* Sidebar */}

      <aside
        className={`fixed top-0 left-0 z-50 flex h-screen w-72 flex-col bg-white shadow-2xl transition-transform duration-300 dark:bg-slate-900 lg:hidden ${
          isOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-700">
          <Link
            to="/dashboard"
            className="flex items-center gap-3"
          >
            <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white">
              <Home size={22} />
            </div>

            <div>
              <h2 className="text-lg font-bold dark:text-white">
                HackSprint AI
              </h2>

              <p className="text-xs text-slate-500">
                AI Coach
              </p>
            </div>
          </Link>

          <button
            onClick={onClose}
            className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X
              size={22}
              className="dark:text-white"
            />
          </button>
        </div>

        {/* Navigation */}

        <nav className="flex-1 space-y-2 overflow-y-auto p-5">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`
                }
              >
                <Icon size={20} />

                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}

        <div className="border-t border-slate-200 p-5 dark:border-slate-700">
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-white">
            <h3 className="font-semibold">
              🚀 AI Coach
            </h3>

            <p className="mt-1 text-xs text-blue-100">
              Build, manage and win your next
              hackathon with AI-powered guidance.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};

export default MobileSidebar;