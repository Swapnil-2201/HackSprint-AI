import { Outlet } from "react-router-dom";
import { BrainCircuit } from "lucide-react";

export default function AuthLayout() {
  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Section */}

        <div className="hidden flex-col justify-center bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-800 px-16 text-white lg:flex">
          <div className="max-w-md">
            <div className="mb-8 flex items-center gap-4">
              <div className="rounded-xl bg-white/20 p-3 backdrop-blur">
                <BrainCircuit size={42} />
              </div>

              <div>
                <h1 className="text-4xl font-bold">
                  Hackathon AI Coach
                </h1>

                <p className="text-blue-100">
                  Build. Analyze. Win.
                </p>
              </div>
            </div>

            <h2 className="mb-6 text-4xl font-bold leading-tight">
              Your AI-powered Hackathon Assistant
            </h2>

            <p className="text-lg leading-8 text-blue-100">
              Manage projects, generate ideas, create development
              roadmaps, identify risks, prepare presentations, and
              collaborate with your team—all from one dashboard.
            </p>

            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
                AI Idea Analyzer
              </div>

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
                AI Roadmap Generator
              </div>

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
                AI Risk Detection
              </div>

              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-green-400"></span>
                AI Pitch Generator
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}

        <div className="flex items-center justify-center px-6 py-10">
          <div className="w-full max-w-md">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}