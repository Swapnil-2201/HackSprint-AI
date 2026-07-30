// src/app/risks/RiskCard.jsx

import {
  AlertTriangle,
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

const RiskCard = ({ risk }) => {
  const getRiskColor = (level) => {
    switch (level?.toLowerCase()) {
      case "high":
        return {
          bg: "bg-red-50 dark:bg-red-900/20",
          border: "border-red-200 dark:border-red-800",
          badge: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300",
          icon: "text-red-600",
          Icon: AlertTriangle,
        };

      case "medium":
        return {
          bg: "bg-yellow-50 dark:bg-yellow-900/20",
          border: "border-yellow-200 dark:border-yellow-800",
          badge:
            "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
          icon: "text-yellow-600",
          Icon: AlertCircle,
        };

      case "low":
        return {
          bg: "bg-green-50 dark:bg-green-900/20",
          border: "border-green-200 dark:border-green-800",
          badge:
            "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
          icon: "text-green-600",
          Icon: CheckCircle2,
        };

      default:
        return {
          bg: "bg-slate-50 dark:bg-slate-800",
          border: "border-slate-200 dark:border-slate-700",
          badge:
            "bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300",
          icon: "text-slate-600",
          Icon: ShieldCheck,
        };
    }
  };

  const styles = getRiskColor(risk.level);
  const StatusIcon = styles.Icon;

  return (
    <div
      className={`rounded-2xl border ${styles.border} ${styles.bg} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg`}
    >
      {/* Header */}

      <div className="mb-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white p-3 shadow dark:bg-slate-900">
            <StatusIcon
              size={22}
              className={styles.icon}
            />
          </div>

          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {risk.title}
            </h3>

            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${styles.badge}`}
            >
              {risk.level} Risk
            </span>
          </div>
        </div>
      </div>

      {/* Description */}

      <p className="leading-7 text-slate-600 dark:text-slate-300">
        {risk.description}
      </p>

      {/* Impact */}

      {risk.impact && (
        <div className="mt-6">
          <h4 className="mb-2 font-semibold text-slate-800 dark:text-white">
            Impact
          </h4>

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            {risk.impact}
          </p>
        </div>
      )}

      {/* Mitigation */}

      {risk.mitigation && (
        <div className="mt-6 rounded-xl bg-white p-4 dark:bg-slate-900">
          <h4 className="mb-2 flex items-center gap-2 font-semibold text-slate-800 dark:text-white">
            <ShieldCheck
              size={18}
              className="text-blue-600"
            />
            Mitigation Strategy
          </h4>

          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            {risk.mitigation}
          </p>
        </div>
      )}
    </div>
  );
};

export default RiskCard;