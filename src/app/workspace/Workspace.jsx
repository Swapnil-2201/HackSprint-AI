// // src/app/workspace/Workspace.jsx

// import { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FolderKanban,
//   Search,
//   Filter,
//   Plus,
//   FolderOpen,
// } from "lucide-react";

// import Button from "@components/shared/Button";
// import Input from "@components/shared/Input";
// import ProjectCard from "./ProjectCard";

// const Workspace = () => {
//   // Replace with Backend API

//   const [projects] = useState([
//     {
//       id: 1,
//       title: "AI Interview Assistant",
//       category: "Artificial Intelligence",
//       description:
//         "AI-powered interview preparation platform with mock interviews and feedback.",
//       status: "In Progress",
//       teamSize: 4,
//       deadline: "30 Jul 2026",
//       duration: "10 Days",
//       progress: 72,
//       createdAt: "20 Jul 2026",
//       tags: ["React", "Node", "MongoDB", "AI"],
//     },
//     {
//       id: 2,
//       title: "Smart Healthcare",
//       category: "Healthcare",
//       description:
//         "Predictive healthcare system using machine learning for early diagnosis.",
//       status: "Planning",
//       teamSize: 5,
//       deadline: "12 Aug 2026",
//       duration: "14 Days",
//       progress: 18,
//       createdAt: "25 Jul 2026",
//       tags: ["Python", "Flask", "ML"],
//     },
//     {
//       id: 3,
//       title: "Crowd Management",
//       category: "Smart City",
//       description:
//         "Real-time crowd monitoring and prediction using computer vision.",
//       status: "Completed",
//       teamSize: 6,
//       deadline: "15 Jul 2026",
//       duration: "15 Days",
//       progress: 100,
//       createdAt: "01 Jul 2026",
//       tags: ["OpenCV", "React", "Node"],
//     },
//   ]);

//   const [search, setSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const filteredProjects = projects.filter((project) => {
//     const matchesSearch =
//       project.title
//         .toLowerCase()
//         .includes(search.toLowerCase()) ||
//       project.category
//         .toLowerCase()
//         .includes(search.toLowerCase());

//     const matchesFilter =
//       filter === "All" || project.status === filter;

//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className="space-y-8">
//       {/* Hero */}

//       <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">

//         <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

//           <div className="flex items-center gap-4">

//             <div className="rounded-2xl bg-white/20 p-4">
//               <FolderKanban size={34} />
//             </div>

//             <div>
//               <h1 className="text-4xl font-bold">
//                 Project Workspace
//               </h1>

//               <p className="mt-2 text-blue-100">
//                 Organize, manage and track all your
//                 hackathon projects.
//               </p>
//             </div>

//           </div>

//           <Link to="/workspace/create">
//             <Button>
//               <Plus size={18} />
//               New Project
//             </Button>
//           </Link>

//         </div>

//       </div>

//       {/* Search */}

//       <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">

//         <div className="grid gap-5 md:grid-cols-3">

//           <Input
//             placeholder="Search projects..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             icon={<Search size={18} />}
//           />

//           <div className="relative">

//             <Filter
//               className="absolute left-3 top-3.5 text-slate-400"
//               size={18}
//             />

//             <select
//               value={filter}
//               onChange={(e) =>
//                 setFilter(e.target.value)
//               }
//               className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
//             >
//               <option>All</option>
//               <option>Planning</option>
//               <option>In Progress</option>
//               <option>Completed</option>
//             </select>

//           </div>

//           <div className="flex items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold dark:bg-slate-800 dark:text-white">
//             {filteredProjects.length} Projects Found
//           </div>

//         </div>

//       </div>

//       {/* Projects */}

//       {filteredProjects.length > 0 ? (

//         <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

//           {filteredProjects.map((project) => (
//             <ProjectCard
//               key={project.id}
//               project={project}
//             />
//           ))}

//         </div>

//       ) : (

//         <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">

//           <FolderOpen
//             className="mx-auto mb-5 text-slate-400"
//             size={60}
//           />

//           <h2 className="text-2xl font-bold dark:text-white">
//             No Projects Found
//           </h2>

//           <p className="mt-3 text-slate-500">
//             Try changing the search or create a new
//             project.
//           </p>

//           <div className="mt-8">
//             <Link to="/workspace/create">
//               <Button>
//                 <Plus size={18} />
//                 Create Project
//               </Button>
//             </Link>
//           </div>

//         </div>

//       )}
//     </div>
//   );
// };

// export default Workspace;

// src/app/workspace/Workspace.jsx

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  FolderKanban,
  Search,
  Filter,
  Plus,
  FolderOpen,
} from "lucide-react";

import Button from "@components/shared/Button";
import Input from "@components/shared/Input";
import ProjectCard from "./ProjectCard";
import storageService from "@services/storageService";
import CreateProjectModal from "./CreateProjectModal";

const Workspace = () => {
  const [projects, setProjects] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [showCreateModal, setShowCreateModal] = useState(false);

  // Load projects
  useEffect(() => {
    let storedProjects = storageService.getProjects();

    // Demo data on first launch
    if (storedProjects.length === 0) {
      storageService.saveProject({
        title: "HackSprint AI Coach",
        category: "Artificial Intelligence",
        description:
          "AI-powered assistant for hackathon teams. Analyze ideas, generate roadmaps, identify risks, create checklists and pitch presentations using Gemini AI.",
        status: "In Progress",
        teamSize: 4,
        deadline: "30 Jul 2026",
        duration: "10 Days",
        progress: 72,
        tags: ["React", "Gemini", "Node", "MongoDB"],
      });

      storageService.saveProject({
        title: "Smart Healthcare",
        category: "Healthcare",
        description:
          "Predictive healthcare platform using AI for early diagnosis and patient monitoring.",
        status: "Planning",
        teamSize: 5,
        deadline: "12 Aug 2026",
        duration: "14 Days",
        progress: 18,
        tags: ["Python", "Flask", "Machine Learning"],
      });

      storageService.saveProject({
        title: "Crowd Management System",
        category: "Smart City",
        description:
          "Real-time crowd prediction and emergency management using Computer Vision.",
        status: "Completed",
        teamSize: 6,
        deadline: "15 Jul 2026",
        duration: "15 Days",
        progress: 100,
        tags: ["OpenCV", "React", "Node.js"],
      });

      storedProjects = storageService.getProjects();
    }

    setProjects(storedProjects);
  }, []);

  // Refresh after creating projects
  useEffect(() => {
    const handleFocus = () => {
      setProjects(storageService.getProjects());
    };

    window.addEventListener("focus", handleFocus);

    return () =>
      window.removeEventListener("focus", handleFocus);
  }, []);

  // Search + Filter
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        project.category
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        project.description
          ?.toLowerCase()
          .includes(search.toLowerCase());

      const matchesFilter =
        filter === "All" ||
        project.status === filter;

      return matchesSearch && matchesFilter;
    });
  }, [projects, search, filter]);

  const totalProjects = projects.length;
  return (
    <div className="space-y-8">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 p-8 text-white shadow-xl">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
          <div className="flex items-center gap-4">
            <div className="rounded-2xl bg-white/20 p-4">
              <FolderKanban size={34} />
            </div>

            <div>
              <h1 className="text-4xl font-bold">
                Project Workspace
              </h1>

              <p className="mt-2 text-blue-100">
                Organize, manage and track all your hackathon projects.
              </p>

              <div className="mt-4 inline-flex rounded-xl bg-white/20 px-4 py-2 text-sm font-semibold">
                {totalProjects} Project{totalProjects !== 1 ? "s" : ""} Available
              </div>
            </div>
          </div>

          
            <Button
              onClick={() => setShowCreateModal(true)}
            >
              <Plus size={18} />
              New Project
            </Button>
          
        </div>
      </div>

      {/* Search & Filter */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
        <div className="grid gap-5 md:grid-cols-3">
          <Input
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            icon={<Search size={18} />}
          />

          <div className="relative">
            <Filter
              className="absolute left-3 top-3.5 text-slate-400"
              size={18}
            />

            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-10 pr-4 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            >
              <option value="All">All</option>
              <option value="Planning">Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          <div className="flex items-center justify-center rounded-xl bg-slate-100 text-sm font-semibold dark:bg-slate-800 dark:text-white">
            {filteredProjects.length} Projects Found
          </div>
        </div>
      </div>

      {/* Project Cards */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center shadow-sm dark:border-slate-700 dark:bg-slate-900">
          <FolderOpen
            className="mx-auto mb-5 text-slate-400"
            size={60}
          />

          <h2 className="text-2xl font-bold dark:text-white">
            No Projects Found
          </h2>

          <p className="mt-3 text-slate-500">
            No project matches your search or filter.
          </p>

          <div className="mt-8">
            <Link to="/workspace">
              <Button>
                <Plus size={18} />
                Create Project
              </Button>
            </Link>
          </div>
        </div>
      )}
      <CreateProjectModal
    open={showCreateModal}
    onClose={() => setShowCreateModal(false)}
    onSave={() => {
        setProjects(storageService.getProjects());
    }}
/>
    </div>
  );
};

export default Workspace;