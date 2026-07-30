// src/app/idea/IdeaAnalyzer.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BrainCircuit,
  Sparkles,
  Rocket,
  Loader2,
} from "lucide-react";
import toast from "react-hot-toast";

import IdeaForm from "./IdeaForm";
import Button from "@components/shared/Button";

import aiService from "@services/aiService";
import storageService from "@services/storageService";

const IdeaAnalyzer = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [idea, setIdea] = useState({
    title: "",
    domain: "",
    problem: "",
    solution: "",
    technologies: "",
    targetUsers: "",
  });

  const handleChange = (e) => {
    setIdea((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();

    if (!idea.title || !idea.problem || !idea.solution) {
      toast.error("Please complete all required fields.");
      return;
    }

    try {
      setLoading(true);

      const project = {
        title: idea.title,
        description: `
Domain:
${idea.domain}

Problem Statement:
${idea.problem}

Solution:
${idea.solution}

Technology Stack:
${idea.technologies}

Target Users:
${idea.targetUsers}
        `,
      };

      console.log("Sending project to Gemini...");
      console.log(project);

      const result = await aiService.analyzeIdea(project);

      console.log("Gemini Result:", result);

      const analysis = {
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
        project: idea,
        result,
      };

      localStorage.setItem(
        "latestAnalysis",
        JSON.stringify(analysis)
      );

      if (storageService.saveAnalysis) {
        storageService.saveAnalysis(analysis);
      }

      if (storageService.addActivity) {
        storageService.addActivity(
          "Idea Analysis",
          `${idea.title} analyzed successfully`
        );
      }

      toast.success("Gemini AI Analysis Completed!");

      navigate("/idea/result");
    } catch (error) {
      console.error(error);

      toast.error(
        error?.message || "Failed to analyze idea."
      );
    } finally {
      setLoading(false);
    }
  };

  return (    <div className="space-y-8">

      {/* Hero Section */}

      <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative z-10">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

            <BrainCircuit size={18} />

            Gemini AI Powered

          </div>

          <h1 className="text-4xl font-bold">
            AI Project Idea Analyzer
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100">
            Analyze your hackathon project using Gemini AI.
            Get innovation score, feasibility analysis,
            market potential, risks, technology suggestions,
            and judge-style feedback instantly.
          </p>

        </div>

      </div>

      {/* Feature Cards */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <Sparkles
            size={36}
            className="mb-4 text-yellow-500"
          />

          <h3 className="text-lg font-bold">
            Innovation Analysis
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Measure originality and uniqueness of your idea.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <Rocket
            size={36}
            className="mb-4 text-blue-600"
          />

          <h3 className="text-lg font-bold">
            Feasibility Check
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Evaluate implementation complexity and execution.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <BrainCircuit
            size={36}
            className="mb-4 text-purple-600"
          />

          <h3 className="text-lg font-bold">
            AI Suggestions
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Receive smart improvements and judge feedback.
          </p>

        </div>

      </div>

      {/* Project Form */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

        <div className="mb-8">

          <h2 className="text-2xl font-bold">
            Project Information
          </h2>

          <p className="mt-2 text-slate-500">
            Enter your project details below to generate
            an AI-powered analysis.
          </p>

        </div>

        <form
          onSubmit={handleAnalyze}
          className="space-y-8"
        >

          <IdeaForm
            formData={idea}
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
                Analyzing with Gemini AI...
              </>
            ) : (
              <>
                <BrainCircuit size={18} />
                Analyze Project
              </>
            )}

          </Button>

        </form>

      </div>
    </div>
  );
};

export default IdeaAnalyzer;