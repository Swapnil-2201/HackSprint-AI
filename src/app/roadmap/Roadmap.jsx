// src/app/roadmap/Roadmap.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Route,
  Sparkles,
  Loader2,
  CalendarDays,
  Clock3,
  Target,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";
import MilestoneCard from "./MilestoneCard";

const Roadmap = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const roadmap = {
    project: "AI Hackathon Assistant",
    duration: "8 Weeks",
    completion: 28,
    milestones: [
      {
        title: "Project Planning",
        phase: "Phase 1",
        status: "Completed",
        description:
          "Finalize problem statement, requirements and technology stack.",
        startDate: "01 Aug",
        endDate: "03 Aug",
        duration: "3 Days",
        progress: 100,
        tasks: [
          "Requirement Analysis",
          "Project Scope",
          "Technology Selection",
        ],
      },
      {
        title: "Frontend Development",
        phase: "Phase 2",
        status: "In Progress",
        description:
          "Build React frontend, authentication and dashboard.",
        startDate: "04 Aug",
        endDate: "14 Aug",
        duration: "10 Days",
        progress: 55,
        tasks: [
          "Authentication",
          "Dashboard",
          "Idea Analyzer",
          "Risk Module",
        ],
      },
      {
        title: "Backend Development",
        phase: "Phase 3",
        status: "Pending",
        description:
          "Develop REST APIs and connect MongoDB database.",
        startDate: "15 Aug",
        endDate: "22 Aug",
        duration: "7 Days",
        progress: 0,
        tasks: [
          "JWT Authentication",
          "MongoDB",
          "REST APIs",
          "Testing",
        ],
      },
      {
        title: "AI Integration",
        phase: "Phase 4",
        status: "Pending",
        description:
          "Integrate AI services for roadmap, pitch and risk generation.",
        startDate: "23 Aug",
        endDate: "29 Aug",
        duration: "6 Days",
        progress: 0,
        tasks: [
          "Gemini API",
          "Prompt Engineering",
          "Testing",
        ],
      },
    ],
  };

  const handleGenerate = async () => {
    try {
      setLoading(true);

      // Replace with Backend API
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Roadmap Generated Successfully!");
    } catch (error) {
      toast.error("Failed to generate roadmap.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 backdrop-blur">
              <Route size={18} />
              AI Roadmap Generator
            </div>

            <h1 className="text-4xl font-bold">
              Smart Project Roadmap
            </h1>

            <p className="mt-4 max-w-3xl text-blue-100">
              AI automatically creates a structured roadmap,
              milestones, development phases and timeline
              for your hackathon project.
            </p>
          </div>

          <Button
            onClick={handleGenerate}
            disabled={loading}
            className="bg-white text-blue-700 hover:bg-slate-100"
          >
            {loading ? (
              <>
                <Loader2
                  size={18}
                  className="animate-spin"
                />
                Generating...
              </>
            ) : (
              <>
                <Sparkles size={18} />
                Generate Again
              </>
            )}
          </Button>
        </div>
      </div>

      {/* Overview */}

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <CalendarDays className="mb-3 text-blue-600" />

          <p className="text-sm text-slate-500">
            Duration
          </p>

          <h2 className="mt-2 text-2xl font-bold dark:text-white">
            {roadmap.duration}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <Clock3 className="mb-3 text-orange-600" />

          <p className="text-sm text-slate-500">
            Milestones
          </p>

          <h2 className="mt-2 text-2xl font-bold dark:text-white">
            {roadmap.milestones.length}
          </h2>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <Target className="mb-3 text-green-600" />

          <p className="text-sm text-slate-500">
            Completion
          </p>

          <h2 className="mt-2 text-2xl font-bold dark:text-white">
            {roadmap.completion}%
          </h2>
        </div>
      </div>

      {/* Progress */}

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="mb-3 flex justify-between">
          <h2 className="text-xl font-bold dark:text-white">
            Overall Progress
          </h2>

          <span className="font-semibold text-blue-600">
            {roadmap.completion}%
          </span>
        </div>

        <div className="h-4 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
            style={{
              width: `${roadmap.completion}%`,
            }}
          />
        </div>
      </div>

      {/* Milestones */}

      <div className="space-y-6">
        {roadmap.milestones.map((milestone, index) => (
          <MilestoneCard
            key={index}
            milestone={milestone}
          />
        ))}
      </div>

      {/* Bottom Buttons */}

      <div className="flex flex-wrap gap-4">
        <Button>
          Download Roadmap
        </Button>

        <Button
          variant="outline"
          onClick={() => navigate("/dashboard")}
        >
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
};

export default Roadmap;