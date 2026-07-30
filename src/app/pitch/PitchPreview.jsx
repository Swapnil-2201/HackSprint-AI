// src/app/pitch/PitchPreview.jsx

import {
  CheckCircle2,
  Lightbulb,
  Users,
  Code2,
  Briefcase,
  Rocket,
} from "lucide-react";

import DownloadPitch from "./DownloadPitch";

const PitchPreview = ({ pitch }) => {
  const sections = [
    {
      title: "Problem Statement",
      value: pitch.problem,
      icon: Lightbulb,
    },
    {
      title: "Solution",
      value: pitch.solution,
      icon: CheckCircle2,
    },
    {
      title: "Target Audience",
      value: pitch.targetAudience,
      icon: Users,
    },
    {
      title: "Technology Stack",
      value: pitch.techStack,
      icon: Code2,
    },
    {
      title: "Business Model",
      value: pitch.businessModel,
      icon: Briefcase,
    },
    {
      title: "Future Scope",
      value: pitch.futureScope,
      icon: Rocket,
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-700 p-8 text-white shadow-xl">
        <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
          AI Generated Pitch
        </span>

        <h1 className="mt-5 text-4xl font-bold">
          {pitch.title || "Project Pitch"}
        </h1>

        <p className="mt-4 max-w-3xl text-indigo-100">
          This AI-generated pitch summarizes your project and is
          ready for hackathon presentations or investor meetings.
        </p>
      </div>

      {/* Pitch Sections */}

      <div className="grid gap-6">
        {sections.map((section, index) => {
          const Icon = section.icon;

          return (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 dark:bg-slate-800">
                  <Icon
                    size={22}
                    className="text-blue-600"
                  />
                </div>

                <h2 className="text-xl font-bold text-slate-900 dark:text-white">
                  {section.title}
                </h2>
              </div>

              <p className="leading-8 text-slate-600 dark:text-slate-300">
                {section.value || "No information available."}
              </p>
            </div>
          );
        })}
      </div>

      {/* Download */}

      <div className="flex justify-end">
        <DownloadPitch pitch={pitch} />
      </div>
    </div>
  );
};

export default PitchPreview;