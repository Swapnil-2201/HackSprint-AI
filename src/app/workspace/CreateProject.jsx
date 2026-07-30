// src/app/workspace/CreateProject.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FolderPlus,
  FileText,
  Users,
  CalendarDays,
  Tag,
  Lightbulb,
  Save,
  ArrowLeft,
} from "lucide-react";
import toast from "react-hot-toast";

import Button from "@components/shared/Button";
import Input from "@components/shared/Input";
import storageService from "@services/storageService";

const CreateProject = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    teamSize: "",
    deadline: "",
    tags: "",
  });

  const handleChange = (e) => {
    setProject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreate = async (e) => {
  e.preventDefault();

  if (
    !project.title ||
    !project.category ||
    !project.description
  ) {
    toast.error("Please fill all required fields.");
    return;
  }

  try {
    setLoading(true);

    const newProject = {
      title: project.title,
      category: project.category,
      description: project.description,
      teamSize: Number(project.teamSize) || 1,
      deadline: project.deadline || "Not Set",
      duration: "Hackathon",
      progress: 0,
      status: "Planning",
      createdAt: new Date().toLocaleDateString(),
      tags: project.tags
        ? project.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [],
    };

    storageService.saveProject(newProject);

    toast.success("Project Created Successfully!");

    navigate("/workspace");
  } catch (err) {
    console.error(err);
    toast.error("Failed to create project.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="space-y-8">

      {/* Hero */}

      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-white/20 p-4">
            <FolderPlus size={34} />
          </div>

          <div>
            <h1 className="text-4xl font-bold">
              Create New Project
            </h1>

            <p className="mt-2 text-blue-100">
              Start a new hackathon project and organize
              your team's workflow.
            </p>
          </div>

        </div>

      </div>

      {/* Form */}

      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-900">

        <form
          onSubmit={handleCreate}
          className="space-y-6"
        >

          <Input
            label="Project Title *"
            name="title"
            value={project.title}
            onChange={handleChange}
            icon={<FolderPlus size={18} />}
            placeholder="AI Interview Assistant"
          />

          <Input
            label="Category *"
            name="category"
            value={project.category}
            onChange={handleChange}
            icon={<Lightbulb size={18} />}
            placeholder="Artificial Intelligence"
          />

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700 dark:text-slate-300">
              Description *
            </label>

            <textarea
              rows={5}
              name="description"
              value={project.description}
              onChange={handleChange}
              placeholder="Describe your project idea..."
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            />
          </div>

          <div className="grid gap-6 md:grid-cols-2">

            <Input
              label="Team Size"
              name="teamSize"
              value={project.teamSize}
              onChange={handleChange}
              icon={<Users size={18} />}
              placeholder="4 Members"
            />

            <Input
              label="Deadline"
              type="date"
              name="deadline"
              value={project.deadline}
              onChange={handleChange}
              icon={<CalendarDays size={18} />}
            />

          </div>

          <Input
            label="Tags"
            name="tags"
            value={project.tags}
            onChange={handleChange}
            icon={<Tag size={18} />}
            placeholder="AI, ML, React, Node.js"
          />

          {/* Tips */}

          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-800 dark:bg-blue-900/20">

            <h3 className="mb-3 font-semibold text-blue-700 dark:text-blue-300">
              💡 Project Tips
            </h3>

            <ul className="list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              <li>Choose a clear and unique project title.</li>
              <li>Describe the problem your solution solves.</li>
              <li>Mention your expected technology stack.</li>
              <li>Set a realistic deadline for the hackathon.</li>
            </ul>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4">

            <Button
              type="submit"
              loading={loading}
            >
              <Save size={18} />
              Create Project
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={() => navigate("/workspace")}
            >
              <ArrowLeft size={18} />
              Cancel
            </Button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CreateProject;