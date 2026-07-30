// src/app/checklist/Checklist.jsx

import { useMemo, useState } from "react";
import {
  CheckCircle2,
  ClipboardCheck,
  Search,
  Filter,
} from "lucide-react";

import ChecklistItem from "./ChecklistItem";
import ProgressBar from "./ProgressBar";

const initialTasks = [
  {
    id: 1,
    title: "Finalize Project Idea",
    category: "Planning",
    completed: true,
  },
  {
    id: 2,
    title: "Create UI Design",
    category: "Design",
    completed: true,
  },
  {
    id: 3,
    title: "Setup React Project",
    category: "Frontend",
    completed: true,
  },
  {
    id: 4,
    title: "Build Authentication",
    category: "Frontend",
    completed: false,
  },
  {
    id: 5,
    title: "Develop Backend APIs",
    category: "Backend",
    completed: false,
  },
  {
    id: 6,
    title: "Integrate AI Model",
    category: "AI",
    completed: false,
  },
  {
    id: 7,
    title: "Connect MongoDB",
    category: "Database",
    completed: false,
  },
  {
    id: 8,
    title: "Deploy Project",
    category: "Deployment",
    completed: false,
  },
];

const Checklist = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    ...new Set(tasks.map((task) => task.category)),
  ];

  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        filter === "All" || task.category === filter;

      return matchesSearch && matchesCategory;
    });
  }, [tasks, search, filter]);

  const completedCount = tasks.filter(
    (task) => task.completed
  ).length;

  const progress = Math.round(
    (completedCount / tasks.length) * 100
  );

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  };

  return (
    <div className="space-y-8">

      {/* Header */}

      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

        <div>

          <h1 className="flex items-center gap-3 text-3xl font-bold text-slate-900 dark:text-white">
            <ClipboardCheck className="text-blue-600" />
            Project Checklist
          </h1>

          <p className="mt-2 text-slate-500 dark:text-slate-400">
            Track every important task before project submission.
          </p>

        </div>

        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-sm dark:border-slate-700 dark:bg-slate-900">

          <div className="mb-3 flex items-center justify-between">

            <span className="text-sm text-slate-500">
              Progress
            </span>

            <span className="font-semibold text-blue-600">
              {progress}%
            </span>

          </div>

          <ProgressBar value={progress} />

          <p className="mt-3 text-sm text-slate-500">
            {completedCount} of {tasks.length} tasks completed
          </p>

        </div>

      </div>

      {/* Search & Filter */}

      <div className="flex flex-col gap-4 md:flex-row">

        <div className="relative flex-1">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search task..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          />

        </div>

        <div className="relative">

          <Filter
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
            className="rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-8 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            {categories.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

        </div>

      </div>

      {/* Checklist */}

      <div className="rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">

        {filteredTasks.length === 0 ? (
          <div className="p-10 text-center">

            <CheckCircle2
              size={50}
              className="mx-auto mb-4 text-slate-300"
            />

            <h3 className="text-lg font-semibold">
              No Tasks Found
            </h3>

            <p className="mt-2 text-slate-500">
              Try changing your search or filter.
            </p>

          </div>
        ) : (
          filteredTasks.map((task) => (
            <ChecklistItem
              key={task.id}
              task={task}
              onToggle={toggleTask}
            />
          ))
        )}

      </div>

    </div>
  );
};

export default Checklist;