import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function StatCard({
  title,
  value,
  icon: Icon,
  change = "",
  trend = "up",
  color = "blue",
}) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    green:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    purple:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    orange:
      "bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400",
    red: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h2>
        </div>

        <div
          className={`rounded-xl p-3 ${
            colorClasses[color] || colorClasses.blue
          }`}
        >
          {Icon && <Icon size={24} />}
        </div>
      </div>

      {change && (
        <div className="mt-5 flex items-center gap-2">
          {trend === "up" ? (
            <ArrowUpRight
              size={16}
              className="text-green-500"
            />
          ) : (
            <ArrowDownRight
              size={16}
              className="text-red-500"
            />
          )}

          <span
            className={`text-sm font-medium ${
              trend === "up"
                ? "text-green-600 dark:text-green-400"
                : "text-red-600 dark:text-red-400"
            }`}
          >
            {change}
          </span>

          <span className="text-sm text-slate-500 dark:text-slate-400">
            vs last week
          </span>
        </div>
      )}
    </div>
  );
}