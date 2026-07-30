// src/app/risks/RiskReport.jsx

import {
  ShieldAlert,
  AlertTriangle,
  CheckCircle2,
  TrendingUp,
  Download,
  RefreshCw,
} from "lucide-react";

import RiskCard from "./RiskCard";

const RiskReport = () => {
  const report = {
    overallRisk: "Medium",
    score: 76,
    summary:
      "The project is technically feasible with manageable risks. Most identified risks can be minimized through proper planning, phased development, and continuous testing.",

    risks: [
      {
        title: "Technical Complexity",
        level: "High",
        description:
          "Integration of multiple AI services and APIs may increase implementation complexity.",
        impact:
          "Development time may increase and debugging can become difficult.",
        mitigation:
          "Develop features in small modules and perform continuous testing.",
      },
      {
        title: "Data Availability",
        level: "Medium",
        description:
          "High-quality datasets may not always be available during development.",
        impact:
          "AI model accuracy could decrease if insufficient data is used.",
        mitigation:
          "Use open datasets initially and collect user feedback to improve data quality.",
      },
      {
        title: "Scalability",
        level: "Low",
        description:
          "The application can scale well using cloud infrastructure.",
        impact:
          "Minimal impact during MVP stage.",
        mitigation:
          "Deploy using scalable cloud services like Docker and Kubernetes.",
      },
    ],
  };

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-500 p-8 text-white shadow-xl">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <ShieldAlert size={18} />
              AI Risk Assessment
            </div>

            <h1 className="text-4xl font-bold">
              Project Risk Report
            </h1>

            <p className="mt-4 max-w-3xl text-orange-100">
              AI has analyzed your project and identified
              potential implementation, technical and business
              risks with recommended mitigation strategies.
            </p>

          </div>

          <div className="rounded-2xl bg-white/20 px-8 py-6 text-center backdrop-blur">

            <p className="text-sm uppercase">
              Risk Score
            </p>

            <h2 className="mt-2 text-5xl font-bold">
              {report.score}%
            </h2>

          </div>

        </div>

      </div>

      {/* Overview */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">

          <AlertTriangle className="mb-3 text-red-600" />

          <p className="text-sm text-slate-500">
            Overall Risk
          </p>

          <h3 className="mt-2 text-2xl font-bold dark:text-white">
            {report.overallRisk}
          </h3>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">

          <TrendingUp className="mb-3 text-blue-600" />

          <p className="text-sm text-slate-500">
            Risk Score
          </p>

          <h3 className="mt-2 text-2xl font-bold dark:text-white">
            {report.score}%
          </h3>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">

          <CheckCircle2 className="mb-3 text-green-600" />

          <p className="text-sm text-slate-500">
            Status
          </p>

          <h3 className="mt-2 text-2xl font-bold dark:text-white">
            Feasible
          </h3>

        </div>

      </div>

      {/* Executive Summary */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <h2 className="mb-4 text-2xl font-bold dark:text-white">
          Executive Summary
        </h2>

        <p className="leading-8 text-slate-600 dark:text-slate-300">
          {report.summary}
        </p>

      </div>

      {/* Risk Cards */}

      <div className="space-y-6">

        {report.risks.map((risk, index) => (
          <RiskCard
            key={index}
            risk={risk}
          />
        ))}

      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-4">

        <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700">
          <Download size={18} />
          Download Report
        </button>

        <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
          <RefreshCw size={18} />
          Analyze Again
        </button>

      </div>

    </div>
  );
};

export default RiskReport;