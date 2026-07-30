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

  const buildPrompt = () => {
    return `
You are an expert Hackathon Mentor and Startup Consultant.

Analyze the following project.

Title:
${idea.title}

Domain:
${idea.domain}

Problem Statement:
${idea.problem}

Proposed Solution:
${idea.solution}

Technology Stack:
${idea.technologies}

Target Users:
${idea.targetUsers}

Return ONLY valid JSON.

{
  "innovationScore":0,
  "feasibilityScore":0,
  "marketPotential":0,
  "difficulty":"Easy | Medium | Hard",
  "summary":"",
  "strengths":[
    "",
    "",
    ""
  ],
  "weaknesses":[
    "",
    "",
    ""
  ],
  "risks":[
    "",
    "",
    ""
  ],
  "techStack":[
    "",
    "",
    ""
  ],
  "improvements":[
    "",
    "",
    ""
  ],
  "judgesFeedback":""
}
`;
  };
    const handleAnalyze = async (e) => {
    e.preventDefault();

    if (
      !idea.title ||
      !idea.problem ||
      !idea.solution
    ) {
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

      // Gemini AI Call
      const rawResult = await aiService.analyzeIdea(project);

      let result;

      try {
        result = JSON.parse(rawResult);
      } catch {
        console.error(rawResult);

        toast.error(
          "Gemini returned an invalid response."
        );

        return;
      }

      // Save for Result Page
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

      // Save in storageService (only if implemented)
      if (storageService.saveAnalysis) {
        storageService.saveAnalysis(analysis);
      }

      // Add activity (only if implemented)
      if (storageService.addActivity) {
        storageService.addActivity(
          "Idea Analysis Completed",
          `${idea.title} analyzed successfully`
        );
      }

      toast.success("Gemini AI Analysis Completed!");

      navigate("/idea/result");

    } catch (error) {

      console.error(error);

      toast.error(
        error?.message ||
        "Failed to analyze project."
      );

    } finally {

      setLoading(false);

    }
  };
    return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-700 p-8 text-white shadow-xl">

        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative z-10">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">

            <BrainCircuit size={18} />

            Gemini AI Powered

          </div>

          <h1 className="text-4xl font-bold">
            AI Project Idea Analyzer
          </h1>

          <p className="mt-4 max-w-3xl text-blue-100">
            Analyze your hackathon idea using Gemini AI.
            Receive innovation scores, feasibility analysis,
            technology suggestions, risks, improvements and
            judge-level feedback in seconds.
          </p>

        </div>

      </div>

      {/* AI Features */}

      <div className="grid gap-6 md:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

          <Sparkles
            size={34}
            className="mb-4 text-yellow-500"
          />

          <h3 className="text-lg font-bold dark:text-white">
            Innovation Analysis
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            AI scores your project's originality,
            uniqueness and market value.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

          <Rocket
            size={34}
            className="mb-4 text-blue-600"
          />

          <h3 className="text-lg font-bold dark:text-white">
            Feasibility Check
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Evaluate implementation complexity,
            scalability and technical readiness.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900">

          <BrainCircuit
            size={34}
            className="mb-4 text-purple-600"
          />

          <h3 className="text-lg font-bold dark:text-white">
            Smart Recommendations
          </h3>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Get technology suggestions,
            improvement ideas and judge-ready feedback.
          </p>

        </div>

      </div>

      {/* Form */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <div className="mb-8">

          <h2 className="text-2xl font-bold dark:text-white">
            Project Information
          </h2>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Complete the details below and let Gemini AI
            evaluate your project.
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

      {/* AI Features */}

      <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 dark:border-blue-800 dark:bg-slate-900">

        <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
          Gemini AI Will Generate
        </h2>

        <div className="grid gap-6 md:grid-cols-2">

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Innovation Score
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Feasibility Analysis
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Technology Suggestions
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Market Potential
            </div>

          </div>

          <div className="space-y-3">

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Expected Challenges
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Risk Assessment
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Improvement Suggestions
            </div>

            <div className="flex items-center gap-3">
              <span className="text-green-500">✅</span>
              Judge-Level Feedback
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default IdeaAnalyzer;