import { CalendarDays, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({
  id,
  title,
  description,
  status = "In Progress",
  progress = 0,
  deadline,
  team = [],
}) {
  const statusColors = {
    Planning:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

    "In Progress":
      "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",

    Completed:
      "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",

    Blocked:
      "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
            {description}
          </p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            statusColors[status] || statusColors["In Progress"]
          }`}
        >
          {status}
        </span>
      </div>

      {/* Progress */}

      <div className="mt-6">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Progress
          </span>

          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {progress}%
          </span>
        </div>

        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-blue-600 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Project Info */}

      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
          <CalendarDays size={18} />
          <span>{deadline}</span>
        </div>

        <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
          <Users size={18} />
          <span>{team.length} Team Members</span>
        </div>
      </div>

      {/* Team */}

      {team.length > 0 && (
        <div className="mt-6 flex -space-x-2">
          {team.slice(0, 5).map((member, index) => (
            <img
              key={index}
              src={
                member.avatar ||
                `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  member.name
                )}&background=2563eb&color=fff`
              }
              alt={member.name}
              title={member.name}
              className="h-10 w-10 rounded-full border-2 border-white object-cover dark:border-slate-900"
            />
          ))}

          {team.length > 5 && (
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-semibold dark:border-slate-900 dark:bg-slate-700 dark:text-white">
              +{team.length - 5}
            </div>
          )}
        </div>
      )}

      {/* Footer */}

      <div className="mt-8">
        <Link
          to={`/workspace/${id}`}
          className="group inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400"
        >
          Open Workspace

          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </div>
  );
}