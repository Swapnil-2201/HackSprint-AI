// // src/app/idea/AnalysisResult.jsx

// import {
//   CheckCircle2,
//   AlertTriangle,
//   TrendingUp,
//   Lightbulb,
//   Target,
//   Rocket,
//   BarChart3,
//   Download,
//   RefreshCw,
// } from "lucide-react";

// const AnalysisResult = () => {
//   const analysis = {
//     score: 89,
//     feasibility: "High",
//     innovation: "Excellent",
//     marketDemand: "High",
//     competition: "Medium",
//     risk: "Low",
//     summary:
//       "Your project idea demonstrates strong innovation and solves a real-world problem. It has good market potential with manageable technical complexity.",
//     strengths: [
//       "Unique problem-solving approach",
//       "High scalability",
//       "Strong AI integration",
//       "Good user experience potential",
//     ],
//     weaknesses: [
//       "Requires quality dataset",
//       "Backend architecture can become complex",
//       "Deployment cost may increase with scale",
//     ],
//     suggestions: [
//       "Build MVP before adding advanced AI features.",
//       "Validate your idea with users.",
//       "Use cloud deployment for better scalability.",
//       "Focus on UI/UX during the hackathon.",
//     ],
//   };

//   const MetricCard = ({ title, value, icon: Icon, color }) => (
//     <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">
//       <div className="flex items-center justify-between">
//         <div>
//           <p className="text-sm text-slate-500">{title}</p>

//           <h3 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white">
//             {value}
//           </h3>
//         </div>

//         <div className={`rounded-xl p-3 ${color}`}>
//           <Icon size={22} className="text-white" />
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="space-y-8">
//       {/* Header */}

//       <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">
//         <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//           <div>
//             <h1 className="text-4xl font-bold">
//               AI Analysis Complete 🎉
//             </h1>

//             <p className="mt-3 max-w-3xl text-blue-100">
//               Your project idea has been successfully analyzed.
//               Below is the AI-generated feasibility report and
//               recommendations.
//             </p>
//           </div>

//           <div className="rounded-2xl bg-white/20 px-8 py-6 text-center backdrop-blur">
//             <p className="text-sm uppercase tracking-wide">
//               AI Score
//             </p>

//             <h2 className="mt-2 text-5xl font-bold">
//               {analysis.score}%
//             </h2>
//           </div>
//         </div>
//       </div>

//       {/* Metrics */}

//       <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
//         <MetricCard
//           title="Feasibility"
//           value={analysis.feasibility}
//           icon={Target}
//           color="bg-green-500"
//         />

//         <MetricCard
//           title="Innovation"
//           value={analysis.innovation}
//           icon={Lightbulb}
//           color="bg-yellow-500"
//         />

//         <MetricCard
//           title="Market Demand"
//           value={analysis.marketDemand}
//           icon={TrendingUp}
//           color="bg-blue-500"
//         />

//         <MetricCard
//           title="Risk Level"
//           value={analysis.risk}
//           icon={AlertTriangle}
//           color="bg-red-500"
//         />
//       </div>

//       {/* Summary */}

//       <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
//         <h2 className="mb-4 flex items-center gap-2 text-2xl font-bold">
//           <BarChart3 className="text-blue-600" />
//           Executive Summary
//         </h2>

//         <p className="leading-8 text-slate-600 dark:text-slate-300">
//           {analysis.summary}
//         </p>
//       </div>

//       {/* Strengths & Weaknesses */}

//       <div className="grid gap-6 lg:grid-cols-2">
//         {/* Strengths */}

//         <div className="rounded-2xl border border-green-200 bg-green-50 p-6 dark:border-green-700 dark:bg-green-900/20">
//           <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-green-700 dark:text-green-400">
//             <CheckCircle2 />
//             Strengths
//           </h2>

//           <ul className="space-y-4">
//             {analysis.strengths.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3"
//               >
//                 <CheckCircle2
//                   size={18}
//                   className="mt-1 text-green-600"
//                 />

//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Weaknesses */}

//         <div className="rounded-2xl border border-red-200 bg-red-50 p-6 dark:border-red-700 dark:bg-red-900/20">
//           <h2 className="mb-5 flex items-center gap-2 text-xl font-bold text-red-700 dark:text-red-400">
//             <AlertTriangle />
//             Weaknesses
//           </h2>

//           <ul className="space-y-4">
//             {analysis.weaknesses.map((item, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3"
//               >
//                 <AlertTriangle
//                   size={18}
//                   className="mt-1 text-red-500"
//                 />

//                 <span>{item}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Suggestions */}

//       <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
//         <h2 className="mb-5 flex items-center gap-2 text-2xl font-bold">
//           <Rocket className="text-purple-600" />
//           AI Recommendations
//         </h2>

//         <div className="space-y-4">
//           {analysis.suggestions.map((item, index) => (
//             <div
//               key={index}
//               className="rounded-xl bg-slate-100 p-4 dark:bg-slate-800"
//             >
//               {item}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Actions */}

//       <div className="flex flex-wrap gap-4">
//         <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
//           <Download size={18} />
//           Download Report
//         </button>

//         <button className="flex items-center gap-2 rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800">
//           <RefreshCw size={18} />
//           Analyze Again
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AnalysisResult;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  BrainCircuit,
  Copy,
  ArrowLeft,
  RefreshCcw,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import toast from "react-hot-toast";

import Button from "@components/shared/Button";

const AnalysisResult = () => {
  const navigate = useNavigate();

  const [analysis, setAnalysis] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("latestAnalysis");

    if (!saved) {
      toast.error("No analysis found.");
      navigate("/idea-analyzer");
      return;
    }

    setAnalysis(JSON.parse(saved));
  }, [navigate]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        analysis.result
      );

      toast.success("Copied to clipboard");
    } catch {
      toast.error("Copy failed");
    }
  };

  if (!analysis) {
    return (
      <div className="flex h-96 items-center justify-center">
        Loading...
      </div>
    );
  }
  return (
        <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-700 p-8 text-white shadow-xl">
        <div className="flex items-center gap-4">
          <div className="rounded-2xl bg-white/20 p-4">
            <BrainCircuit size={36} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              AI Analysis Result
            </h1>

            <p className="mt-2 text-blue-100">
              Gemini AI has completed analyzing your project idea.
            </p>
          </div>
        </div>
      </div>

      {/* Project Card */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-500">
              Project
            </p>

            <h2 className="mt-2 text-3xl font-bold dark:text-white">
              {analysis.project.title}
            </h2>

            <p className="mt-2 text-slate-500">
              {analysis.project.domain}
            </p>
          </div>

          <div className="rounded-xl bg-green-100 p-4 text-green-700 dark:bg-green-900/20 dark:text-green-400">
            <CheckCircle2 size={40} />
          </div>
        </div>
      </div>

      {/* AI Output */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-700">
          <div className="flex items-center gap-3">
            <Sparkles
              size={22}
              className="text-yellow-500"
            />

            <h2 className="text-2xl font-bold dark:text-white">
              Gemini AI Analysis
            </h2>
          </div>

          <Button
            onClick={handleCopy}
            variant="outline"
          >
            <Copy size={16} />

            Copy
          </Button>
        </div>

        <div className="max-h-[700px] overflow-y-auto p-8">
          <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-700 dark:text-slate-300">
            {analysis.result}
          </pre>
        </div>
      </div>

      {/* Actions */}

      <div className="flex flex-wrap gap-4">

        <Button
          onClick={() => navigate("/idea")}
        >
          <RefreshCcw size={18} />

          Analyze Again
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft size={18} />

          Dashboard
        </Button>

      </div>
    </div>
  );
};

export default AnalysisResult;