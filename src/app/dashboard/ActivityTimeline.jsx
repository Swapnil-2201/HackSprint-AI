// src/app/dashboard/ActivityTimeline.jsx

import { useMemo } from "react";
import storageService from "@services/storageService";

import {
  CheckCircle2,
  FolderPlus,
  Rocket,
  AlertTriangle,
  Brain,
} from "lucide-react";

const iconMap = {
  "Project Created": FolderPlus,
  "Idea Analysis Completed": Brain,
  "Roadmap Generated": Rocket,
  "Risk Analysis": AlertTriangle,
  "Pitch Generated": Rocket,
  "Checklist Completed": CheckCircle2,
};

const colorMap = {
  "Project Created": "bg-blue-500",
  "Idea Analysis Completed": "bg-purple-500",
  "Roadmap Generated": "bg-green-500",
  "Risk Analysis": "bg-yellow-500",
  "Pitch Generated": "bg-pink-500",
  "Checklist Completed": "bg-emerald-500",
};

const ActivityTimeline = () => {
  const activities = useMemo(() => {
    return storageService.getActivities();
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          Recent Activity
        </h2>

        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
          Latest updates from your workspace.
        </p>
      </div>

      {activities.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No activity yet.
        </div>
      ) : (
        <div className="relative ml-3 border-l-2 border-slate-200 dark:border-slate-700">
          {activities.map((activity) => {
            const Icon =
              iconMap[activity.title] || FolderPlus;

            const color =
              colorMap[activity.title] ||
              "bg-blue-500";

            return (
              <div
                key={activity.id}
                className="relative mb-8 pl-10 last:mb-0"
              >
                <div
                  className={`absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full text-white shadow-md ${color}`}
                >
                  <Icon size={18} />
                </div>

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {activity.title}
                    </h3>

                    <span className="text-xs text-slate-500">
                      {activity.time}
                    </span>
                  </div>

                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    {activity.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ActivityTimeline;