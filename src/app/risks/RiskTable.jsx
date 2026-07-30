// src/app/risks/RiskTable.jsx

import {
  AlertTriangle,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const RiskTable = ({ risks = [] }) => {
  const getBadge = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return {
          className:
            "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
          icon: <AlertTriangle size={14} />,
        };

      case "medium":
        return {
          className:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
          icon: <AlertCircle size={14} />,
        };

      case "low":
        return {
          className:
            "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
          icon: <CheckCircle2 size={14} />,
        };

      default:
        return {
          className:
            "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
          icon: null,
        };
    }
  };

  if (risks.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-300 p-10 text-center dark:border-slate-700">
        <p className="text-slate-500">
          No risks available.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
      <table className="min-w-full divide-y divide-slate-200 dark:divide-slate-700">
        <thead className="bg-slate-100 dark:bg-slate-800">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
              Risk
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
              Severity
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
              Impact
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700 dark:text-slate-200">
              Mitigation
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
          {risks.map((risk, index) => {
            const badge = getBadge(risk.level);

            return (
              <tr
                key={index}
                className="transition hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                <td className="px-6 py-5">
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {risk.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      {risk.description}
                    </p>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${badge.className}`}
                  >
                    {badge.icon}
                    {risk.level}
                  </span>
                </td>

                <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-300">
                  {risk.impact}
                </td>

                <td className="px-6 py-5 text-sm text-slate-600 dark:text-slate-300">
                  {risk.mitigation}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RiskTable;