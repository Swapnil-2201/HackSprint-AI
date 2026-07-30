// src/app/workspace/ProjectCard.jsx

import { Link } from "react-router-dom";
import {
  CalendarDays,
  Users,
  Tag,
  ArrowRight,
  Clock3,
  CheckCircle2,
} from "lucide-react";

import Button from "@components/shared/Button";

const statusColors = {
  Planning:
    "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",

  "In Progress":
    "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",

  Completed:
    "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

const ProjectCard = ({ project }) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900">

      {/* Header */}

      <div className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-6 text-white">

        <div className="flex items-start justify-between">

          <div>

            <h2 className="text-xl font-bold">
              {project.title}
            </h2>

            <p className="mt-2 text-sm text-blue-100">
              {project.category}
            </p>

          </div>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              statusColors[project.status]
            }`}
          >
            {project.status}
          </span>

        </div>

      </div>

      {/* Body */}

      <div className="space-y-5 p-6">

        <p className="line-clamp-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        {/* Details */}

        <div className="grid gap-4 text-sm md:grid-cols-2">

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Users
              size={18}
              className="text-blue-600"
            />

            {project.teamSize} Members
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <CalendarDays
              size={18}
              className="text-green-600"
            />

            {project.deadline}
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <Clock3
              size={18}
              className="text-orange-600"
            />

            {project.duration}
          </div>

          <div className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
            <CheckCircle2
              size={18}
              className="text-purple-600"
            />

            {project.progress}% Complete
          </div>

        </div>

        {/* Progress */}

        <div>

          <div className="mb-2 flex justify-between text-sm">

            <span className="font-medium dark:text-white">
              Progress
            </span>

            <span className="font-semibold text-blue-600">
              {project.progress}%
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{
                width: `${project.progress}%`,
              }}
            />

          </div>

        </div>

        {/* Tags */}

        {project.tags?.length > 0 && (

          <div className="flex flex-wrap gap-2">

            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-300"
              >
                <Tag size={12} />

                {tag}
              </span>
            ))}

          </div>

        )}

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-slate-200 pt-5 dark:border-slate-700">

          <span className="text-xs text-slate-500">
            Created: {project.createdAt}
          </span>

          <Link to={`/workspace/${project.id}`}>

            <Button size="sm">

              View Project

              <ArrowRight size={16} />

            </Button>

          </Link>

        </div>

      </div>

    </div>
  );
};

export default ProjectCard;