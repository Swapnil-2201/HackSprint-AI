// src/app/dashboard/Dashboard.jsx

import DashboardCards from "./DashboardCards";
import RecentProjects from "./RecentProjects";
import ActivityTimeline from "./ActivityTimeline";
import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  Plus,
  ArrowRight,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-8">

      {/* Hero Section */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur">

              <Sparkles size={16} />

              AI Powered Dashboard

            </div>

            <h1 className="text-4xl font-bold">
              Welcome Back 👋
            </h1>

            <p className="mt-4 max-w-2xl text-blue-100">
              Manage your hackathon projects, generate AI roadmaps,
              analyze ideas, monitor risks and keep your team
              productive from one intelligent dashboard.
            </p>

          </div>

          <button
              onClick={() => navigate("/workspace")}
              className="flex items-center justify-center gap-3 rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 transition hover:scale-105 hover:bg-slate-100"
            >

            <Plus size={20} />

            New Project

          </button>

        </div>

      </div>

      {/* Dashboard Cards */}

      <DashboardCards />

      {/* Main Content */}

      <div className="grid gap-8 xl:grid-cols-3">

        {/* Left */}

        <div className="xl:col-span-2">
          <RecentProjects />
        </div>

        {/* Right */}

        <div>
          <ActivityTimeline />
        </div>

      </div>

      {/* Quick Actions */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-6">

          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
            Quick Actions
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Launch AI tools instantly.
          </p>

        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          {[
            { label: "Analyze Idea", path:"/idea-analyzer" },
            { label: "Generate Roadmap", path:"/roadmap" },
            { label: "Risk Analysis", path:"/risk-report" },
            { label: "Pitch Generator", path:"/pitch-generator" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="group rounded-xl border border-slate-200 p-5 text-left transition-all hover:border-blue-600 hover:bg-blue-50 dark:border-slate-700 dark:hover:bg-slate-800"
            >
              <h3 className="font-semibold text-slate-900 dark:text-white">
                {item.label}
              </h3>

              <div className="mt-4 flex items-center gap-2 font-medium text-blue-600">

                Open

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />

              </div>

            </button>
          ))}

        </div>

      </div>

    </div>
  );
};

export default Dashboard;