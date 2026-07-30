// src/app/checklist/ChecklistItem.jsx

import { CheckCircle2, Circle } from "lucide-react";

const ChecklistItem = ({ task, onToggle }) => {
  return (
    <div
      className={`flex items-center justify-between border-b border-slate-200 p-5 transition-all last:border-none dark:border-slate-700 ${
        task.completed
          ? "bg-green-50/40 dark:bg-green-900/10"
          : "bg-white dark:bg-slate-900"
      }`}
    >
      {/* Left */}

      <div className="flex items-center gap-4">

        <button
          onClick={() => onToggle(task.id)}
          className="transition hover:scale-110"
        >
          {task.completed ? (
            <CheckCircle2
              size={28}
              className="text-green-600"
            />
          ) : (
            <Circle
              size={28}
              className="text-slate-400"
            />
          )}
        </button>

        <div>

          <h3
            className={`text-base font-semibold ${
              task.completed
                ? "text-slate-400 line-through"
                : "text-slate-900 dark:text-white"
            }`}
          >
            {task.title}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {task.category}
          </p>

        </div>

      </div>

      {/* Status */}

      <span
        className={`rounded-full px-4 py-1 text-xs font-semibold ${
          task.completed
            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
        }`}
      >
        {task.completed ? "Completed" : "Pending"}
      </span>
    </div>
  );
};

export default ChecklistItem;