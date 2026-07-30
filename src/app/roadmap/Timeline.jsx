// src/app/roadmap/Timeline.jsx

import {
  CheckCircle2,
  Circle,
  CalendarDays,
  Clock3,
} from "lucide-react";

const Timeline = ({ milestones = [] }) => {
  if (milestones.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
        <CalendarDays
          size={40}
          className="mx-auto mb-4 text-slate-400"
        />

        <h3 className="text-lg font-semibold dark:text-white">
          No Timeline Available
        </h3>

        <p className="mt-2 text-slate-500">
          Generate a roadmap to view the project timeline.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <div className="mb-8 flex items-center gap-3">
        <div className="rounded-xl bg-blue-100 p-3 dark:bg-blue-900/30">
          <CalendarDays
            className="text-blue-600"
            size={24}
          />
        </div>

        <div>
          <h2 className="text-2xl font-bold dark:text-white">
            Project Timeline
          </h2>

          <p className="text-slate-500">
            Development milestones and schedule
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Vertical Line */}

        <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-slate-200 dark:bg-slate-700"></div>

        <div className="space-y-10">
          {milestones.map((milestone, index) => {
            const completed =
              milestone.status === "Completed";

            return (
              <div
                key={index}
                className="relative flex gap-6"
              >
                {/* Timeline Icon */}

                <div
                  className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-4 ${
                    completed
                      ? "border-green-500 bg-green-500"
                      : milestone.status === "In Progress"
                      ? "border-blue-500 bg-blue-500"
                      : "border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900"
                  }`}
                >
                  {completed ? (
                    <CheckCircle2
                      size={22}
                      className="text-white"
                    />
                  ) : (
                    <Circle
                      size={20}
                      className={
                        milestone.status === "In Progress"
                          ? "text-white"
                          : "text-slate-500"
                      }
                    />
                  )}
                </div>

                {/* Content */}

                <div className="flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex flex-col justify-between gap-3 lg:flex-row lg:items-center">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                        {milestone.title}
                      </h3>

                      <p className="mt-2 text-slate-500">
                        {milestone.description}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-xs font-semibold ${
                        completed
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : milestone.status === "In Progress"
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400"
                      }`}
                    >
                      {milestone.status}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-6 text-sm text-slate-600 dark:text-slate-300">
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
                      <CalendarDays
                        size={16}
                        className="text-green-600"
                      />
                      {milestone.endDate}
                    </div>
                  </div>

                  {milestone.tasks?.length > 0 && (
                    <div className="mt-5">
                      <h4 className="mb-3 font-semibold dark:text-white">
                        Tasks
                      </h4>

                      <div className="grid gap-2 md:grid-cols-2">
                        {milestone.tasks.map((task, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 rounded-lg bg-white p-3 text-sm dark:bg-slate-900"
                          >
                            <CheckCircle2
                              size={16}
                              className="text-green-500"
                            />

                            {task}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Progress */}

                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-sm">
                      <span className="font-medium">
                        Progress
                      </span>

                      <span className="font-semibold text-blue-600">
                        {milestone.progress}%
                      </span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all"
                        style={{
                          width: `${milestone.progress}%`,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Timeline;