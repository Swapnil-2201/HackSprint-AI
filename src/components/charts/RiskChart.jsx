// src/components/charts/RiskChart.jsx

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = [
  "#16A34A", // Low
  "#FACC15", // Medium
  "#F97316", // High
  "#DC2626", // Critical
];

const RiskChart = ({ data }) => {
  // Default Demo Data
  const chartData =
    data || [
      {
        level: "Low",
        risks: 8,
      },
      {
        level: "Medium",
        risks: 5,
      },
      {
        level: "High",
        risks: 3,
      },
      {
        level: "Critical",
        risks: 1,
      },
    ];

  const totalRisks = chartData.reduce(
    (sum, item) => sum + item.risks,
    0
  );

  const highestRisk = [...chartData].sort(
    (a, b) => b.risks - a.risks
  )[0];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">
            Risk Analysis
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Distribution of project risks by severity.
          </p>
        </div>

        <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-900/30 dark:text-red-300">
          Live Report
        </span>

      </div>

      {/* Chart */}

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <BarChart data={chartData}>

            <CartesianGrid
              strokeDasharray="4 4"
              stroke="#E2E8F0"
            />

            <XAxis
              dataKey="level"
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

            <Tooltip />

            <Bar
              dataKey="risks"
              radius={[10, 10, 0, 0]}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={
                    COLORS[index % COLORS.length]
                  }
                />
              ))}
            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

      {/* Risk Summary */}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        {chartData.map((risk, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-slate-800"
          >

            <div className="flex items-center gap-3">

              <span
                className="h-3 w-3 rounded-full"
                style={{
                  backgroundColor:
                    COLORS[index % COLORS.length],
                }}
              />

              <span className="font-medium dark:text-white">
                {risk.level}
              </span>

            </div>

            <span className="font-bold text-slate-700 dark:text-slate-200">
              {risk.risks}
            </span>

          </div>
        ))}

      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4 text-sm dark:border-slate-700">

        <span className="text-slate-500">
          Total Risks
        </span>

        <span className="font-bold text-red-600">
          {totalRisks}
        </span>

      </div>

      <div className="mt-2 text-center text-sm text-slate-500">
        Highest Risk Category:
        <span className="ml-2 font-semibold text-slate-900 dark:text-white">
          {highestRisk.level}
        </span>
      </div>

    </div>
  );
};

export default RiskChart;