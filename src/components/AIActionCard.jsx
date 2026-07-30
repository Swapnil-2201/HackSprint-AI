import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIActionCard({
  title,
  description,
  icon: Icon,
  to,
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
    indigo:
      "bg-indigo-100 text-indigo-600 dark:bg-indigo-900/30 dark:text-indigo-400",
  };

  return (
    <Link
      to={to}
      className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
    >
      {/* Icon */}

      <div
        className={`inline-flex rounded-xl p-3 ${
          colorClasses[color] || colorClasses.blue
        }`}
      >
        {Icon && <Icon size={28} />}
      </div>

      {/* Content */}

      <div className="mt-5">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
          {title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center text-blue-600 dark:text-blue-400">
        <span className="text-sm font-medium">
          Open Tool
        </span>

        <ArrowRight
          size={18}
          className="ml-2 transition-transform duration-300 group-hover:translate-x-2"
        />
      </div>
    </Link>
  );
}