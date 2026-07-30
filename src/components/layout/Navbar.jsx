// src/components/Navbar.jsx

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  Bell,
  Search,
  Sun,
  Moon,
  UserCircle,
  LogOut,
  Settings,
} from "lucide-react";

import useAuth from "@hooks/useAuth";
  

import { useTheme } from "@hooks/useTheme";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
        <div className="flex h-16 items-center justify-between px-4 lg:px-8">
          {/* Left */}

          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
            >
              <Menu size={22} />
            </button>

            <Link
              to="/dashboard"
              className="flex items-center gap-3"
            >
              <div className="rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-2 text-white">
                🚀
              </div>

              <div className="hidden sm:block">
                <h1 className="text-lg font-bold dark:text-white">
                  HackSprint AI
                </h1>

                <p className="text-xs text-slate-500">
                  AI Coach
                </p>
              </div>
            </Link>
          </div>

          {/* Search */}

          <div className="hidden w-full max-w-md lg:block">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-3.5 text-slate-400"
              />

              <input
                type="text"
                placeholder="Search..."
                className="w-full rounded-xl border border-slate-300 bg-slate-50 py-3 pl-10 pr-4 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3">
            {/* Theme */}

            <button
              onClick={toggleTheme}
              className="rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {theme === "dark" ? (
                <Sun size={20} />
              ) : (
                <Moon size={20} />
              )}
            </button>

            {/* Notifications */}

            <button className="relative rounded-xl p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            {/* Profile */}

            <div className="relative">
              <button
                onClick={() =>
                  setProfileOpen(!profileOpen)
                }
                className="flex items-center gap-2 rounded-xl p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <img
                  src="https://i.pravatar.cc/150?img=12"
                  alt="Profile"
                  className="h-10 w-10 rounded-full"
                />

                <div className="hidden text-left md:block">
                  <h4 className="text-sm font-semibold dark:text-white">
                    {user?.name}
                  </h4>

                  <p className="text-xs text-slate-500">
                    Student
                  </p>
                </div>
              </button>

              {profileOpen && (
                <div className="absolute right-0 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">

                  <div className="border-b border-slate-200 p-5 dark:border-slate-700">
                    <h3 className="font-bold dark:text-white">
                      {user?.name}
                    </h3>

                    <p className="text-sm text-slate-500">
                      {user?.email}
                    </p>
                  </div>

                  <div className="p-2">
                    <Link
                      to="/settings/profile"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <UserCircle size={18} />
                      Profile
                    </Link>

                    <Link
                      to="/settings"
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <Settings size={18} />
                      Settings
                    </Link>

                    <button
                      onClick={() => {
                        logout();
                        setProfileOpen(false);
                      }}
                      className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20"
                    >
                      <LogOut size={18} />
                      Logout
                    </button>
                  </div>

                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      <MobileSidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
    </>
  );
};

export default Navbar;