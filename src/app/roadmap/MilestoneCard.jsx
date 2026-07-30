// src/app/roadmap/MilestoneCard.jsx

import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Clock3,
  Flag,
} from "lucide-react";

const MilestoneCard = ({ milestone }) => {
  const completed = milestone.status === "Completed";
  const progress = milestone.progress || 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div
            className={`rounded-xl p-3 ${
              completed
                ? "bg-green-100 dark:bg-green-900/30"
                : "bg-blue-100 dark:bg-blue-900/30"
            }`}
          >
            {completed ? (
              <CheckCircle2
                size={22}
                className="text-green-600"
              />
            ) : (
              <Circle
                size={22}
                className="text-blue-600"
              />
            )}
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {milestone.title}
            </h3>

            <p className="text-sm text-slate-500">
              {milestone.phase}
            </p>
          </div>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            completed
              ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
          }`}
        >
          {milestone.status}
        </span>
      </div>

      {/* Description */}

      <p className="mt-5 leading-7 text-slate-600 dark:text-slate-300">
        {milestone.description}
      </p>

      {/* Timeline */}

      <div className="mt-6 flex flex-wrap gap-5 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <CalendarDays
            size={16}
            className="text-blue-600"
          />
          {milestone.startDate}
        </div>

        <div className="flex items-center gap-2">
          <Clock3
            size={16}
            className="text-orange-600"
          />
          {milestone.duration}
        </div>

        <div className="flex items-center gap-2">
          <Flag
            size={16}
            className="text-purple-600"
          />
          {milestone.endDate}
        </div>
      </div>

      {/* Tasks */}

      {milestone.tasks?.length > 0 && (
        <div className="mt-6">
          <h4 className="mb-3 font-semibold text-slate-900 dark:text-white">
            Tasks
          </h4>

          <ul className="space-y-2">
            {milestone.tasks.map((task, index) => (
              <li
                key={index}
                className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"
              >
                <CheckCircle2
                  size={16}
                  className="text-green-500"
                />
                {task}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Progress */}

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm">
          <span className="font-medium text-slate-700 dark:text-slate-300">
            Progress
          </span>

          <span className="font-semibold text-blue-600">
            {progress}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MilestoneCard;