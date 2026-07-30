// src/app/pitch/PitchGenerator.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Presentation,
  Sparkles,
  Loader2,
  Rocket,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";
import PitchForm from "./PitchForm";

const PitchGenerator = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [pitchData, setPitchData] = useState({
    title: "",
    problem: "",
    solution: "",
    targetAudience: "",
    techStack: "",
    businessModel: "",
  });

  const handleChange = (e) => {
    setPitchData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGenerate = async (e) => {
    e.preventDefault();

    if (
      !pitchData.title ||
      !pitchData.problem ||
      !pitchData.solution
    ) {
      toast.error("Please fill all required fields.");
      return;
    }

    try {
      setLoading(true);

      // TODO:
      // Replace with Backend API

      await new Promise((resolve) =>
        setTimeout(resolve, 2000)
      );

      toast.success("Pitch Generated Successfully!");

      navigate("/pitch/result");
    } catch (error) {
      toast.error("Failed to generate pitch.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-700 p-8 text-white shadow-xl">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

            <Presentation size={18} />

            AI Pitch Generator

          </div>

          <h1 className="text-4xl font-bold">
            Generate Your Winning Pitch
          </h1>

          <p className="mt-4 max-w-3xl text-indigo-100">
            Create a professional hackathon presentation,
            executive summary, USP, business model and
            investor-ready pitch within seconds.
          </p>

        </div>

      </div>

      {/* Highlights */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <Presentation className="mb-4 text-blue-600" />

          <h3 className="font-bold text-lg">
            Presentation Ready
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Professional hackathon presentation generated instantly.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <Sparkles className="mb-4 text-yellow-500" />

          <h3 className="font-bold text-lg">
            AI Generated Content
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Executive summary, USP and market strategy created by AI.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <Rocket className="mb-4 text-purple-600" />

          <h3 className="font-bold text-lg">
            Investor Friendly
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Structured pitch suitable for hackathons and investors.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-8">

          <h2 className="text-2xl font-bold dark:text-white">
            Project Information
          </h2>

          <p className="mt-2 text-slate-500">
            Enter your project details and let AI generate
            an impressive project pitch.
          </p>

        </div>

        <form
          onSubmit={handleGenerate}
          className="space-y-8"
        >

          <PitchForm
            formData={pitchData}
            onChange={handleChange}
          />

          <Button
            type="submit"
            loading={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />

                Generating Pitch...
              </>
            ) : (
              <>
                <FileText size={18} />

                Generate Pitch
              </>
            )}
          </Button>

        </form>

      </div>

    </div>
  );
};

export default PitchGenerator;