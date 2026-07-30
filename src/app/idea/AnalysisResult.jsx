// src/app/idea/AnalysisResult.jsx

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

const toArray = (value) => {
  if (!value) return [];

  if (Array.isArray(value)) return value;

  if (typeof value === "string") {
    return value
      .split(/\n|,/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [String(value)];
};

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

    const parsed = JSON.parse(saved);

    if (typeof parsed.result === "string") {
      try {
        parsed.result = JSON.parse(parsed.result);
      } catch {
        parsed.result = {
          summary: parsed.result,
        };
      }
    }

    console.log("Loaded Analysis:", parsed);

    setAnalysis(parsed);
  }, [navigate]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        JSON.stringify(analysis.result, null, 2)
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

  const result = analysis.result || {};

  return (    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-linear-to-r from-purple-600 via-indigo-600 to-blue-700 p-8 text-white shadow-xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-white/20 p-4">
            <BrainCircuit size={38} />
          </div>

          <div>

            <h1 className="text-4xl font-bold">
              AI Analysis Result
            </h1>

            <p className="mt-2 text-blue-100">
              Gemini AI has successfully analyzed your project.
            </p>

          </div>

        </div>

      </div>

      {/* Project */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm text-slate-500">
              Project
            </p>

            <h2 className="mt-2 text-3xl font-bold">
              {analysis.project?.title || "Untitled Project"}
            </h2>

            <p className="mt-2 text-slate-500">
              {analysis.project?.domain || "-"}
            </p>

          </div>

          <div className="rounded-xl bg-green-100 p-4 text-green-700">
            <CheckCircle2 size={40} />
          </div>

        </div>

      </div>

      {/* AI Output */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-slate-200 p-6">

          <div className="flex items-center gap-3">

            <Sparkles
              size={22}
              className="text-yellow-500"
            />

            <h2 className="text-2xl font-bold">
              Gemini AI Report
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

        <div className="space-y-8 p-8">

          <div>

            <h3 className="text-xl font-bold">
              Innovation Score
            </h3>

            <p>{result.innovationScore ?? "-"}</p>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Feasibility Score
            </h3>

            <p>{result.feasibilityScore ?? "-"}</p>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Market Potential
            </h3>

            <p>{result.marketPotential ?? "-"}</p>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Difficulty
            </h3>

            <p>{result.difficulty ?? "-"}</p>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Summary
            </h3>

            <p className="leading-8">
              {result.summary || "No summary available."}
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Strengths
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              {toArray(result.strengths).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Weaknesses
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              {toArray(result.weaknesses).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Risks
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              {toArray(result.risks).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Recommended Tech Stack
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              {toArray(result.techStack).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Improvements
            </h3>

            <ul className="list-disc pl-6 space-y-2">
              {toArray(result.improvements).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Future Scope
            </h3>

            <p>
              {result.futureScope || "-"}
            </p>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Judges Feedback
            </h3>

            <p className="leading-8">
              {result.judgesFeedback || "-"}
            </p>

          </div>

        </div>

      </div>      {/* Actions */}

      <div className="flex flex-wrap gap-4">

        <Button
          onClick={() => navigate("/idea-analyzer")}
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