// src/components/charts/ProgressChart.jsx

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = [
  "#2563EB",
  "#16A34A",
  "#F59E0B",
  "#DC2626",
];

const ProgressChart = ({ data }) => {
  // Default Demo Data
  const chartData =
    data || [
      {
        name: "Completed",
        value: 65,
      },
      {
        name: "In Progress",
        value: 20,
      },
      {
        name: "Pending",
        value: 10,
      },
      {
        name: "Blocked",
        value: 5,
      },
    ];

  const total = chartData.reduce(
    (sum, item) => sum + item.value,
    0
  );

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
      {/* Header */}

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Project Progress
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Overall task completion status.
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/30 dark:text-green-300">
          Live
        </span>
      </div>

      {/* Chart */}

      <div className="h-80">
        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={105}
              paddingAngle={3}
              dataKey="value"
              label={({ percent }) =>
                `${(percent * 100).toFixed(0)}%`
              }
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend verticalAlign="bottom" />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-200 pt-5 dark:border-slate-700">
        {chartData.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800"
          >
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor:
                    COLORS[
                      index % COLORS.length
                    ],
                }}
              />

              <span className="text-sm font-medium dark:text-white">
                {item.name}
              </span>
            </div>

            <span className="font-semibold text-slate-700 dark:text-slate-200">
              {item.value}
            </span>
          </div>
        ))}
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm dark:border-slate-700">
        <span className="text-slate-500">
          Total Tasks
        </span>

        <span className="font-bold text-blue-600">
          {total}
        </span>
      </div>
    </div>
  );
};

export default ProgressChart;