// src/components/charts/ActivityChart.jsx

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const ActivityChart = ({ data }) => {
  // Default Demo Data
  const chartData =
    data || [
      { day: "Mon", activity: 4 },
      { day: "Tue", activity: 7 },
      { day: "Wed", activity: 5 },
      { day: "Thu", activity: 9 },
      { day: "Fri", activity: 12 },
      { day: "Sat", activity: 8 },
      { day: "Sun", activity: 6 },
    ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Weekly Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Track your project activity throughout the week.
          </p>
        </div>

        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
          Last 7 Days
        </span>

      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={chartData}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="day"
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
            />

            <YAxis
              tick={{
                fill: "#64748B",
                fontSize: 12,
              }}
            />

            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "1px solid #CBD5E1",
                background: "#FFFFFF",
              }}
            />

            <Line
              type="monotone"
              dataKey="activity"
              stroke="#2563EB"
              strokeWidth={3}
              dot={{
                r: 5,
                fill: "#2563EB",
              }}
              activeDot={{
                r: 8,
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm dark:border-slate-700">

        <span className="text-slate-500">
          Peak Activity:
          <span className="ml-2 font-semibold text-slate-900 dark:text-white">
            Friday
          </span>
        </span>

        <span className="font-semibold text-blue-600">
          Total:{" "}
          {chartData.reduce(
            (sum, item) => sum + item.activity,
            0
          )}{" "}
          Tasks
        </span>

      </div>

    </div>
  );
};

export default ActivityChart;