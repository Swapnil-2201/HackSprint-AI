import { useState } from "react";
import {
  X,
  FolderKanban,
  Calendar,
  Users,
  Tag,
  FileText,
} from "lucide-react";

import Button from "@components/shared/Button";
import Input from "@components/shared/Input";

import storageService from "@services/storageService";
import { createPortal } from "react-dom";
const CreateProjectModal = ({
  open,
  onClose,
  onSave,
}) => {
  const [project, setProject] = useState({
    title: "",
    category: "",
    description: "",
    status: "Planning",
    teamSize: 4,
    deadline: "",
    duration: "",
    progress: 0,
    tags: "",
  });

  if (!open) return null;

  const handleChange = (e) => {
    setProject((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    if (
      !project.title ||
      !project.category ||
      !project.description
    ) {
      alert("Please fill all required fields.");
      return;
    }

    storageService.saveProject({
      ...project,
      tags: project.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean),
    });

    storageService.addActivity(
      "Project Created",
      `${project.title} project created successfully.`
    );

    if (onSave) onSave();

    setProject({
      title: "",
      category: "",
      description: "",
      status: "Planning",
      teamSize: 4,
      deadline: "",
      duration: "",
      progress: 0,
      tags: "",
    });

    onClose();
  };

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-6 overflow-y-auto">
        <div className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-200 p-6 dark:border-slate-700">

          <div className="flex items-center gap-4">

            <div className="rounded-xl bg-blue-100 p-3 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">

              <FolderKanban size={28} />

            </div>

            <div>

              <h2 className="text-2xl font-bold dark:text-white">
                Create New Project
              </h2>

              <p className="text-sm text-slate-500">
                Start a new hackathon project.
              </p>

            </div>

          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X size={22} />
          </button>

        </div>

        {/* Form */}

        <div className="space-y-6 p-6">

          <Input
            label="Project Title"
            name="title"
            value={project.title}
            onChange={handleChange}
            placeholder="AI Hackathon Assistant"
          />

          <Input
            label="Category"
            name="category"
            value={project.category}
            onChange={handleChange}
            placeholder="Artificial Intelligence"
          />

          <div>

            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              name="description"
              value={project.description}
              onChange={handleChange}
              rows={4}
              className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800"
              placeholder="Describe your project..."
            />

          </div>
                    <div className="grid gap-6 md:grid-cols-2">

            <Input
              label="Team Size"
              name="teamSize"
              type="number"
              value={project.teamSize}
              onChange={handleChange}
              placeholder="4"
            />

            <Input
              label="Deadline"
              name="deadline"
              value={project.deadline}
              onChange={handleChange}
              placeholder="30 Jul 2026"
            />

            <Input
              label="Duration"
              name="duration"
              value={project.duration}
              onChange={handleChange}
              placeholder="10 Days"
            />

            <div>

              <label className="mb-2 block text-sm font-medium dark:text-white">
                Status
              </label>

              <select
                name="status"
                value={project.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 bg-white p-3 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                <option value="Planning">Planning</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
              </select>

            </div>

          </div>

          <Input
            label="Tags"
            name="tags"
            value={project.tags}
            onChange={handleChange}
            placeholder="React, Gemini, Node.js, MongoDB"
          />

        </div>

        {/* Footer */}

        <div className="flex justify-end gap-4 border-t border-slate-200 p-6 dark:border-slate-700">

          <Button
            variant="outline"
            onClick={onClose}
          >
            Cancel
          </Button>

          <Button
            onClick={handleSubmit}
          >
            Create Project
          </Button>

        </div>

      </div>

    </div>,
    document.body
  );
};

export default CreateProjectModal;