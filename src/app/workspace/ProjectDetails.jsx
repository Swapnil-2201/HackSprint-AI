// src/app/workspace/ProjectDetails.jsx

import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FolderOpen,
  Users,
  CalendarDays,
  Clock3,
  Tag,
  CheckCircle2,
  ArrowLeft,
  Pencil,
  Trash2,
  Github,
  ExternalLink,
  FileText,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";

const ProjectDetails = () => {
  const { id } = useParams();

  // Replace with Backend API
  const [project] = useState({
    id,
    title: "AI Interview Assistant",
    category: "Artificial Intelligence",
    status: "In Progress",
    description:
      "An AI-powered interview preparation platform that helps students practice technical interviews with real-time AI feedback, coding challenges, and personalized improvement suggestions.",

    objective:
      "To improve interview preparation using AI-driven mock interviews and analytics.",

    team: [
      "Harsh Kumar",
      "Aman Singh",
      "Priya Sharma",
      "Rahul Patel",
    ],

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "OpenAI",
      "Tailwind CSS",
    ],

    repository:
      "https://github.com/example/ai-interview-assistant",

    liveDemo:
      "https://example.vercel.app",

    progress: 72,
    teamSize: 4,
    duration: "10 Days",
    deadline: "30 July 2026",
    createdAt: "20 July 2026",

    milestones: [
      "Project Planning",
      "Frontend Completed",
      "Backend API Completed",
      "AI Integration In Progress",
      "Deployment Pending",
    ],
  });

  const handleDelete = () => {
    toast.success("Project deleted successfully.");
  };

  return (
    <div className="space-y-8">
      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-5">
            <div className="rounded-2xl bg-white/20 p-4">
              <FolderOpen size={34} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                {project.title}
              </h1>

              <p className="mt-2 text-blue-100">
                {project.category}
              </p>
            </div>
          </div>

          <span className="rounded-full bg-green-500 px-5 py-2 text-sm font-semibold">
            {project.status}
          </span>
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-6 md:grid-cols-4">
        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <Users className="mb-3 text-blue-600" />
          <h3 className="text-3xl font-bold dark:text-white">
            {project.teamSize}
          </h3>
          <p className="text-slate-500">
            Team Members
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <CalendarDays className="mb-3 text-green-600" />
          <h3 className="text-xl font-bold dark:text-white">
            {project.deadline}
          </h3>
          <p className="text-slate-500">
            Deadline
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <Clock3 className="mb-3 text-orange-600" />
          <h3 className="text-xl font-bold dark:text-white">
            {project.duration}
          </h3>
          <p className="text-slate-500">
            Duration
          </p>
        </div>

        <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-900">
          <CheckCircle2 className="mb-3 text-purple-600" />
          <h3 className="text-3xl font-bold dark:text-white">
            {project.progress}%
          </h3>
          <p className="text-slate-500">
            Progress
          </p>
        </div>
      </div>

      {/* Main Content */}

      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left */}

        <div className="space-y-8 lg:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-5 text-2xl font-bold dark:text-white">
              Project Description
            </h2>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <h3 className="mt-8 mb-3 text-xl font-bold dark:text-white">
              Objective
            </h3>

            <p className="leading-8 text-slate-600 dark:text-slate-300">
              {project.objective}
            </p>
          </div>

          {/* Milestones */}

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-6 text-2xl font-bold dark:text-white">
              Milestones
            </h2>

            <div className="space-y-4">
              {project.milestones.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
                >
                  <CheckCircle2
                    size={18}
                    className="text-green-500"
                  />

                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}

        <div className="space-y-8">
          {/* Team */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-5 text-xl font-bold dark:text-white">
              Team Members
            </h2>

            <div className="space-y-3">
              {project.team.map((member, index) => (
                <div
                  key={index}
                  className="rounded-xl bg-slate-100 px-4 py-3 dark:bg-slate-800"
                >
                  {member}
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-5 text-xl font-bold dark:text-white">
              Technologies
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-2 rounded-full bg-blue-100 px-3 py-2 text-sm text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                >
                  <Tag size={14} />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-5 text-xl font-bold dark:text-white">
              Resources
            </h2>

            <div className="space-y-4">
              <a
                href={project.repository}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-blue-600 hover:underline"
              >
                <Github size={18} />
                GitHub Repository
              </a>

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-green-600 hover:underline"
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              <Link
                to="/pitch/result"
                className="flex items-center gap-3 text-purple-600 hover:underline"
              >
                <FileText size={18} />
                View Pitch
              </Link>
            </div>
          </div>

          {/* Actions */}

          <div className="flex flex-col gap-4">
            <Button>
              <Pencil size={18} />
              Edit Project
            </Button>

            <Button
              variant="danger"
              onClick={handleDelete}
            >
              <Trash2 size={18} />
              Delete Project
            </Button>

            <Link to="/workspace">
              <Button variant="outline" className="w-full">
                <ArrowLeft size={18} />
                Back to Workspace
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;