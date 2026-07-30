import { Menu, Bell, Search } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import ThemeToggle from "./ThemeToggle";

export default function Navbar({ onMenuClick }) {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-200 bg-white px-6 dark:border-slate-800 dark:bg-slate-900">
      {/* Left Section */}

      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <div className="relative hidden md:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search projects..."
            className="w-72 rounded-lg border border-slate-300 bg-slate-50 py-2 pl-10 pr-4 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
          />
        </div>
      </div>

      {/* Right Section */}

      <div className="flex items-center gap-4">
        <ThemeToggle />

        <button className="relative rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800">
          <Bell size={21} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
        </button>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="font-medium text-slate-800 dark:text-white">
              {user?.name || "Guest User"}
            </p>

            <p className="text-xs text-slate-500">
              {user?.email || "guest@example.com"}
            </p>
          </div>

          <img
            src={
              user?.avatar ||
              "https://ui-avatars.com/api/?name=User&background=2563eb&color=fff"
            }
            alt="Profile"
            className="h-10 w-10 rounded-full border object-cover"
          />
        </div>
      </div>
    </header>
  );
}