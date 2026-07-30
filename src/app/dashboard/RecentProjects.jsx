import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  CalendarDays,
  ArrowRight,
  FolderKanban,
  Clock3,
} from "lucide-react";

import storageService from "@services/storageService";

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400";

    case "In Progress":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";

    default:
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
  }
};

const RecentProjects = () => {
  const navigate = useNavigate();

  const projects = useMemo(() => {
    return storageService
      .getProjects()
      .slice(0, 5)
      .map((project) => ({
        id: project.id,
        name: project.title,
        description: project.description,
        status: project.status,
        progress: project.progress,
        updated: project.createdAt,
      }));
  }, []);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}

      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Recent Projects
          </h2>

          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            Continue working on your latest hackathon projects.
          </p>
        </div>

        <button
          onClick={() => navigate("/workspace")}
          className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          View All

          <ArrowRight size={16} />
        </button>
      </div>

      {projects.length === 0 ? (
        <div className="py-10 text-center text-slate-500">
          No projects yet.
        </div>
      ) : (
        <div className="space-y-5">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl border border-slate-200 p-5 transition-all hover:shadow-lg dark:border-slate-700 dark:hover:border-blue-500"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                    <FolderKanban size={24} />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                      {project.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-4 py-1 text-sm font-semibold ${getStatusColor(
                    project.status
                  )}`}
                >
                  {project.status}
                </span>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm text-slate-500">
                    Progress
                  </span>

                  <span className="font-semibold text-blue-600">
                    {project.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-700"
                    style={{
                      width: `${project.progress}%`,
                    }}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-3 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />

                    {project.updated}
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />

                    Active
                  </div>
                </div>

                <button
                  onClick={() =>
                    navigate(`/workspace/${project.id}`)
                  }
                  className="flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  Open Project

                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentProjects;