// src/app/landing/CTA.jsx

import { Link } from "react-router-dom";
import {
  ArrowRight,
  Rocket,
  Sparkles,
} from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 py-24 text-white">

      {/* Background Blur */}

      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6">

        <div className="rounded-3xl border border-white/20 bg-white/10 p-12 text-center backdrop-blur-xl">

          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-2">

            <Sparkles size={18} />

            Join Thousands of Developers

          </div>

          {/* Heading */}

          <h2 className="mx-auto max-w-4xl text-4xl font-bold leading-tight md:text-5xl">
            Turn Your Hackathon Idea Into A Winning Project With AI
          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            From idea validation to roadmap generation, risk analysis,
            project planning and pitch preparation—HackSprint AI Coach
            helps you build faster and smarter.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <Link
              to="/register"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 transition hover:scale-105"
            >
              <Rocket size={20} />
              Get Started Free
            </Link>

            <Link
              to="/login"
              className="inline-flex items-center gap-3 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-blue-700"
            >
              Explore Dashboard
              <ArrowRight size={20} />
            </Link>

          </div>

          {/* Stats */}

          <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

            {[
              {
                value: "10K+",
                label: "Ideas Analyzed",
              },
              {
                value: "500+",
                label: "Hackathons",
              },
              {
                value: "98%",
                label: "User Satisfaction",
              },
              {
                value: "24/7",
                label: "AI Assistance",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/20 bg-white/10 p-6"
              >
                <h3 className="text-3xl font-bold">
                  {item.value}
                </h3>

                <p className="mt-2 text-blue-100">
                  {item.label}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;