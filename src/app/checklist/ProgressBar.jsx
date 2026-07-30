// src/app/checklist/ProgressBar.jsx

const ProgressBar = ({ value = 0 }) => {
  const progress = Math.min(Math.max(value, 0), 100);

  return (
    <div className="w-full">
      {/* Progress Track */}
      <div className="h-3 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 transition-all duration-700 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <div className="mt-2 flex items-center justify-between text-sm">
        <span className="text-slate-500 dark:text-slate-400">
          Completion
        </span>

        <span className="font-semibold text-blue-600 dark:text-blue-400">
          {progress}%
        </span>
      </div>
    </div>
  );
};

export default ProgressBar;