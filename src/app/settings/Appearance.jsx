// src/app/settings/Appearance.jsx

import { useState } from "react";
import {
  Palette,
  Moon,
  Sun,
  Monitor,
  CheckCircle2,
  Save,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";

const Appearance = () => {
  const [loading, setLoading] = useState(false);

  const [settings, setSettings] = useState({
    theme: "system",
    primaryColor: "blue",
    compactMode: false,
    animations: true,
  });

  const handleThemeChange = (theme) => {
    setSettings((prev) => ({
      ...prev,
      theme,
    }));
  };

  const handleToggle = (key) => {
    setSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleColor = (color) => {
    setSettings((prev) => ({
      ...prev,
      primaryColor: color,
    }));
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      // TODO:
      // Replace with Backend API

      await new Promise((resolve) =>
        setTimeout(resolve, 1500)
      );

      toast.success("Appearance Updated Successfully!");
    } catch (error) {
      toast.error("Failed to update appearance.");
    } finally {
      setLoading(false);
    }
  };

  const colors = [
    "blue",
    "indigo",
    "purple",
    "green",
    "orange",
    "red",
  ];

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 p-8 text-white shadow-xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-white/20 p-4">
            <Palette size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Appearance Settings
            </h1>

            <p className="mt-2 text-purple-100">
              Personalize the look and feel of your dashboard.
            </p>
          </div>

        </div>

      </div>

      {/* Theme Selection */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <h2 className="mb-6 text-2xl font-bold dark:text-white">
          Theme
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          <button
            onClick={() => handleThemeChange("light")}
            className={`rounded-2xl border p-6 transition ${
              settings.theme === "light"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                : "border-slate-200 dark:border-slate-700"
            }`}
          >
            <Sun
              size={36}
              className="mx-auto mb-4 text-yellow-500"
            />

            <h3 className="font-bold dark:text-white">
              Light
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Bright interface
            </p>
          </button>

          <button
            onClick={() => handleThemeChange("dark")}
            className={`rounded-2xl border p-6 transition ${
              settings.theme === "dark"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                : "border-slate-200 dark:border-slate-700"
            }`}
          >
            <Moon
              size={36}
              className="mx-auto mb-4 text-indigo-500"
            />

            <h3 className="font-bold dark:text-white">
              Dark
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Comfortable at night
            </p>
          </button>

          <button
            onClick={() => handleThemeChange("system")}
            className={`rounded-2xl border p-6 transition ${
              settings.theme === "system"
                ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20"
                : "border-slate-200 dark:border-slate-700"
            }`}
          >
            <Monitor
              size={36}
              className="mx-auto mb-4 text-green-500"
            />

            <h3 className="font-bold dark:text-white">
              System
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Follow device theme
            </p>
          </button>

        </div>

      </div>

      {/* Accent Colors */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <h2 className="mb-6 text-2xl font-bold dark:text-white">
          Accent Color
        </h2>

        <div className="flex flex-wrap gap-5">

          {colors.map((color) => (
            <button
              key={color}
              onClick={() => handleColor(color)}
              className={`relative h-14 w-14 rounded-full bg-${color}-500 transition hover:scale-110 ${
                settings.primaryColor === color
                  ? "ring-4 ring-offset-4 ring-blue-500"
                  : ""
              }`}
            >
              {settings.primaryColor === color && (
                <CheckCircle2
                  className="absolute inset-0 m-auto text-white"
                  size={22}
                />
              )}
            </button>
          ))}

        </div>

      </div>

      {/* Preferences */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <h2 className="mb-6 text-2xl font-bold dark:text-white">
          Preferences
        </h2>

        <div className="space-y-6">

          <div className="flex items-center justify-between rounded-xl border border-slate-200 p-5 dark:border-slate-700">

            <div>
              <h3 className="font-semibold dark:text-white">
                Compact Mode
              </h3>

              <p className="text-sm text-slate-500">
                Reduce spacing throughout the dashboard.
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.compactMode}
              onChange={() =>
                handleToggle("compactMode")
              }
              className="h-5 w-5"
            />

          </div>

          <div className="flex items-center justify-between rounded-xl border border-slate-200 p-5 dark:border-slate-700">

            <div>
              <h3 className="font-semibold dark:text-white">
                Animations
              </h3>

              <p className="text-sm text-slate-500">
                Enable smooth transitions and animations.
              </p>
            </div>

            <input
              type="checkbox"
              checked={settings.animations}
              onChange={() =>
                handleToggle("animations")
              }
              className="h-5 w-5"
            />

          </div>

        </div>

      </div>

      {/* Save */}

      <Button
        onClick={handleSave}
        loading={loading}
      >
        <Save size={18} />
        Save Appearance
      </Button>

    </div>
  );
};

export default Appearance;