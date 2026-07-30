// src/components/SidebarItem.jsx

import { NavLink } from "react-router-dom";

const SidebarItem = ({
  to,
  icon: Icon,
  label,
  badge,
  collapsed = false,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `group flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-blue-600 text-white shadow-lg"
            : "text-slate-600 hover:bg-slate-100 hover:text-blue-600 dark:text-slate-300 dark:hover:bg-slate-800"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {/* Icon */}

          <Icon
            size={20}
            className={`shrink-0 transition-colors ${
              isActive
                ? "text-white"
                : "text-slate-500 group-hover:text-blue-600 dark:text-slate-400"
            }`}
          />

          {/* Label */}

          {!collapsed && (
            <>
              <span className="flex-1">
                {label}
              </span>

              {/* Badge */}

              {badge && (
                <span
                  className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  }`}
                >
                  {badge}
                </span>
              )}
            </>
          )}
        </>
      )}
    </NavLink>
  );
};

export default SidebarItem;