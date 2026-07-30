export default function ProgressBar({
  value = 0,
  max = 100,
  height = "h-3",
  color = "blue",
  showLabel = true,
  animated = true,
}) {
  const percentage = Math.min(
    Math.max((value / max) * 100, 0),
    100
  );

  const colorClasses = {
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    orange: "bg-orange-500",
    purple: "bg-purple-600",
    indigo: "bg-indigo-600",
    cyan: "bg-cyan-600",
  };

  return (
    <div className="w-full">
      {showLabel && (
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
            Progress
          </span>

          <span className="text-sm font-semibold text-slate-700 dark:text-white">
            {Math.round(percentage)}%
          </span>
        </div>
      )}

      <div
        className={`w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700 ${height}`}
      >
        <div
          className={`
            ${height}
            rounded-full
            ${colorClasses[color] || colorClasses.blue}
            ${animated ? "transition-all duration-500 ease-in-out" : ""}
          `}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>
    </div>
  );
}