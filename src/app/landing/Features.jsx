// src/app/landing/Features.jsx

import {
  BrainCircuit,
  Lightbulb,
  Route,
  ShieldAlert,
  ClipboardCheck,
  Presentation,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "AI Idea Analyzer",
    description:
      "Validate your hackathon idea using AI with feasibility, innovation, market demand and scalability analysis.",
    icon: BrainCircuit,
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: 2,
    title: "Smart Roadmap Generator",
    description:
      "Generate a complete development roadmap with milestones, timelines and recommended technologies.",
    icon: Route,
    color: "from-purple-500 to-pink-600",
  },
  {
    id: 3,
    title: "Risk Assessment",
    description:
      "Identify technical, business and implementation risks before they become project blockers.",
    icon: ShieldAlert,
    color: "from-red-500 to-orange-500",
  },
  {
    id: 4,
    title: "Project Checklist",
    description:
      "Track project progress using an intelligent checklist with completion percentage.",
    icon: ClipboardCheck,
    color: "from-green-500 to-emerald-600",
  },
  {
    id: 5,
    title: "Pitch Generator",
    description:
      "Generate a professional hackathon pitch, presentation points and executive summary instantly.",
    icon: Presentation,
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 6,
    title: "AI Recommendations",
    description:
      "Receive personalized AI suggestions to improve architecture, features and project quality.",
    icon: Lightbulb,
    color: "from-yellow-500 to-orange-500",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Header */}

        <div className="mx-auto mb-16 max-w-3xl text-center">

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            Powerful Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 dark:text-white">
            Everything You Need To Win A Hackathon
          </h2>

          <p className="mt-5 text-lg text-slate-600 dark:text-slate-400">
            HackSprint AI Coach provides powerful AI tools that help
            you transform your idea into a successful hackathon
            project.
          </p>

        </div>

        {/* Feature Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
              >
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${feature.color} text-white shadow-lg`}
                >
                  <Icon size={30} />
                </div>

                <h3 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                  {feature.title}
                </h3>

                <p className="leading-7 text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all group-hover:translate-x-1">
                  Learn More →
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Features;