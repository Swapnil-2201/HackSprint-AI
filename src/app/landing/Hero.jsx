// src/app/landing/Hero.jsx

import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, BrainCircuit } from "lucide-react";

const Hero = () => {
  return (
    <section
  className="
    relative overflow-hidden transition-colors duration-300
    bg-gradient-to-br
    from-slate-50 via-blue-50 to-white
    text-slate-900
    dark:from-slate-900
    dark:via-blue-950
    dark:to-slate-950
    dark:text-white
  "
>

      {/* Background Blur Effects */}

      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-purple-600/20 blur-3xl"></div>

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

        {/* Badge */}

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm backdrop-blur">

          <Sparkles size={18} className="text-yellow-400" />

          AI Powered Hackathon Assistant

        </div>

        {/* Heading */}

        <h1 className="max-w-5xl text-5xl font-extrabold leading-tight md:text-6xl lg:text-7xl">

          Build Winning
          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            {" "}
            Hackathon Projects{" "}
          </span>
          Faster with AI

        </h1>

        {/* Description */}

        <p className="
          mt-8 max-w-3xl text-lg leading-8
          text-slate-600
          dark:text-slate-300
          md:text-xl
          transition-colors
        ">
          Analyze project ideas, generate development roadmaps,
          identify risks, create presentations and manage your
          complete hackathon workflow with one intelligent platform.
        </p>

        {/* Buttons */}

        <div className="mt-12 flex flex-col gap-5 sm:flex-row">

          <Link
            to="/register"
            className="inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-700"
          >
            Get Started

            <ArrowRight size={20} />
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300
                  text-slate-900
                  hover:bg-slate-100

                  dark:border-slate-600
                  dark:text-white
                  dark:hover:bg-slate-800 px-8 py-4 text-lg font-semibold transition hover:bg-slate-800"
          >
            Explore Dashboard
          </Link>

        </div>

        {/* Stats */}

        <div className="mt-20 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">

          {[
            {
              number: "10K+",
              label: "Projects",
            },
            {
              number: "5K+",
              label: "Developers",
            },
            {
              number: "98%",
              label: "Idea Accuracy",
            },
            {
              number: "24/7",
              label: "AI Support",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="
                rounded-2xl
                border
                border-slate-200
                bg-white/80

                dark:border-white/10
                dark:bg-white/5

                p-6
                backdrop-blur-md
                transition-colors
                "
            >
              <h2 className="text-3xl font-bold text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* AI Illustration */}

        <div className="mt-20 flex items-center justify-center">

          <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/30">

            <BrainCircuit size={60} />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;