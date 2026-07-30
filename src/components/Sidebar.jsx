import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  Lightbulb,
  Map,
  ShieldAlert,
  ClipboardCheck,
  Presentation,
  Settings,
  X,
  BrainCircuit,
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
    path: "/idea-analyzer",
    icon: Lightbulb,
  },
  {
    name: "Roadmap",
    path: "/roadmap",
    icon: Map,
  },
  {
    name: "Risk Report",
    path: "/risk-report",
    icon: ShieldAlert,
  },
  {
    name: "Checklist",
    path: "/checklist",
    icon: ClipboardCheck,
  },
  {
    name: "Pitch Generator",
    path: "/pitch-generator",
    icon: Presentation,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Mobile Overlay */}

      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed left-0 top-0 z-50 h-screen w-64
          bg-white dark:bg-slate-900
          border-r border-slate-200 dark:border-slate-800
          shadow-lg
          transform transition-transform duration-300
          ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }
          lg:translate-x-0
        `}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-5 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <BrainCircuit
              size={34}
              className="text-blue-600"
            />

            <div>
              <h1 className="font-bold text-slate-800 dark:text-white">
                Hackathon AI
              </h1>

              <p className="text-xs text-slate-500">
                Coach
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="lg:hidden"
          >
            <X className="text-slate-600 dark:text-slate-300" />
          </button>
        </div>

        {/* Navigation */}

        <nav className="mt-6 flex flex-col gap-2 px-3">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-4 py-3 transition ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
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

        <div className="absolute bottom-0 w-full border-t border-slate-200 p-5 dark:border-slate-800">
          <p className="text-center text-xs text-slate-500">
            Hackathon AI Coach
          </p>

          <p className="mt-1 text-center text-xs text-slate-400">
            Version 1.0
          </p>
        </div>
      </aside>
    </>
  );
}