// src/app/settings/Settings.jsx

import { useState } from "react";
import {
  User,
  Palette,
  Shield,
  Bell,
  ChevronRight,
} from "lucide-react";

import Profile from "./Profile";
import Account from "./Account";
import Appearance from "./Appearance";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const tabs = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
      component: <Profile />,
    },
    {
      id: "account",
      label: "Account",
      icon: Shield,
      component: <Account />,
    },
    {
      id: "appearance",
      label: "Appearance",
      icon: Palette,
      component: <Appearance />,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-4">
            <Bell size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Settings
            </h1>

            <p className="mt-2 text-blue-100">
              Customize your account, profile and application
              preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Layout */}

      <div className="grid gap-8 lg:grid-cols-4">
        {/* Sidebar */}

        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <h2 className="mb-6 px-3 text-lg font-bold dark:text-white">
            Settings Menu
          </h2>

          <div className="space-y-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left transition ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={20} />
                    <span className="font-medium">
                      {tab.label}
                    </span>
                  </div>

                  <ChevronRight size={18} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}

        <div className="lg:col-span-3">
          {tabs.find((tab) => tab.id === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default Settings;