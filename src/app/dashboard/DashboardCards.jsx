import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

import {
  FolderKanban,
  CheckCircle2,
  BrainCircuit,
  AlertTriangle,
  ArrowUpRight,
} from "lucide-react";

import storageService from "@services/storageService";

const DashboardCards = () => {
  const navigate = useNavigate();

  const stats = useMemo(() => {
    if (storageService.getDashboardStats) {
      return storageService.getDashboardStats();
    }

    const projects = storageService.getProjects?.() || [];

    return {
      totalProjects: projects.length,
      completedTasks: 0,
      totalTasks: 0,
      analyses: storageService.getAnalyses?.().length || 0,
      risks: 0,
    };
  }, []);

  const cards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      change: "Manage projects",
      icon: FolderKanban,
      color: "bg-blue-500",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      route: "/workspace",
    },
    {
      title: "Tasks Completed",
      value: `${stats.completedTasks}/${stats.totalTasks}`,
      change: "Open Checklist",
      icon: CheckCircle2,
      color: "bg-green-500",
      bg: "bg-green-100 dark:bg-green-900/30",
      route: "/checklist",
    },
    {
      title: "AI Analyses",
      value: stats.analyses,
      change: "Analyze Ideas",
      icon: BrainCircuit,
      color: "bg-purple-500",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      route: "/idea-analyzer",
    },
    {
      title: "Risk Alerts",
      value: stats.risks,
      change: "Risk Report",
      icon: AlertTriangle,
      color: "bg-yellow-500",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      route: "/risk-report",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <div
            key={card.title}
            onClick={() => navigate(card.route)}
            className="cursor-pointer rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
          >
            <div className="flex items-center justify-between">
              <div className={`rounded-xl p-4 ${card.bg}`}>
                <Icon className="text-slate-800 dark:text-white" size={24} />
              </div>

              <ArrowUpRight
                className="text-slate-400"
                size={20}
              />
            </div>

            <p className="mt-6 text-sm text-slate-500">
              {card.title}
            </p>

            <h2 className="mt-2 text-3xl font-bold dark:text-white">
              {card.value}
            </h2>

            <p className="mt-2 text-sm text-green-600">
              {card.change}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardCards;