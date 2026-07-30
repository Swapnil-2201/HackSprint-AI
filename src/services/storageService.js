// src/services/storageService.js

const KEYS = {
  USER: "hacksprint_user",
  PROJECTS: "hacksprint_projects",
  ANALYSES: "hacksprint_analyses",
  ROADMAPS: "hacksprint_roadmaps",
  RISKS: "hacksprint_risks",
  CHECKLIST: "hacksprint_checklist",
  PITCHES: "hacksprint_pitches",
  ACTIVITIES: "hacksprint_activities",
};

/* ==========================================
   Helpers
========================================== */

const read = (key, fallback = []) => {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

const write = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

/* ==========================================
   Storage Service
========================================== */

const storageService = {
  /* ===========================
     USER
  =========================== */

  getUser() {
    return read(KEYS.USER, null);
  },

  saveUser(user) {
    write(KEYS.USER, user);
  },

  logout() {
    localStorage.removeItem(KEYS.USER);
  },

  /* ===========================
     PROJECTS
  =========================== */

  getProjects() {
    return read(KEYS.PROJECTS);
  },

  getProject(id) {
    return this.getProjects().find(
      (project) => project.id === id
    );
  },

  saveProject(project) {
    const projects = this.getProjects();

    const newProject = {
      id: crypto.randomUUID(),

      title: project.title || "",

      category: project.category || "",

      description: project.description || "",

      teamSize: Number(project.teamSize || 4),

      deadline:
        project.deadline || "",

      duration:
        project.duration || "",

      progress:
        Number(project.progress || 0),

      status:
        project.status || "Planning",

      tags:
        project.tags || [],

      createdAt:
        new Date().toISOString(),
    };

    projects.unshift(newProject);

    write(KEYS.PROJECTS, projects);

    this.addActivity(
      "Project Created",
      `${newProject.title} project initialized.`
    );

    return newProject;
  },

  updateProject(updatedProject) {
    const projects = this.getProjects().map(
      (project) =>
        project.id === updatedProject.id
          ? updatedProject
          : project
    );

    write(KEYS.PROJECTS, projects);
  },

  deleteProject(id) {
    const projects = this.getProjects().filter(
      (project) => project.id !== id
    );

    write(KEYS.PROJECTS, projects);

    this.addActivity(
      "Project Deleted",
      "Project removed successfully."
    );
  },
    /* ===========================
     IDEA ANALYSIS
  =========================== */

  getAnalyses() {
    return read(KEYS.ANALYSES);
  },

  getAnalysisByProject(projectId) {
    return this.getAnalyses().find(
      (analysis) => analysis.projectId === projectId
    );
  },

  saveAnalysis(data) {
    const analyses = this.getAnalyses();

    const analysis = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    };

    analyses.unshift(analysis);

    write(KEYS.ANALYSES, analyses);

    this.addActivity(
      "Idea Analysis Completed",
      `${data.project?.title || "Project"} analyzed using Gemini AI.`
    );

    return analysis;
  },

  deleteAnalysis(id) {
    const analyses = this.getAnalyses().filter(
      (analysis) => analysis.id !== id
    );

    write(KEYS.ANALYSES, analyses);
  },

  /* ===========================
     ROADMAPS
  =========================== */

  getRoadmaps() {
    return read(KEYS.ROADMAPS);
  },

  saveRoadmap(data) {
    const roadmaps = this.getRoadmaps();

    roadmaps.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    });

    write(KEYS.ROADMAPS, roadmaps);

    this.addActivity(
      "Roadmap Generated",
      "Development roadmap generated successfully."
    );
  },

  /* ===========================
     RISKS
  =========================== */

  getRisks() {
    return read(KEYS.RISKS);
  },

  saveRisk(data) {
    const risks = this.getRisks();

    risks.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    });

    write(KEYS.RISKS, risks);

    this.addActivity(
      "Risk Report Generated",
      "AI completed project risk assessment."
    );
  },

  /* ===========================
     CHECKLIST
  =========================== */

  getChecklist() {
    return read(KEYS.CHECKLIST);
  },

  saveChecklist(list) {
    write(KEYS.CHECKLIST, list);

    this.addActivity(
      "Checklist Updated",
      "Project checklist saved."
    );
  },

  /* ===========================
     PITCH GENERATOR
  =========================== */

  getPitches() {
    return read(KEYS.PITCHES);
  },

  savePitch(data) {
    const pitches = this.getPitches();

    pitches.unshift({
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...data,
    });

    write(KEYS.PITCHES, pitches);

    this.addActivity(
      "Pitch Generated",
      "AI presentation pitch created."
    );
  },
    /* ===========================
     ACTIVITIES
  =========================== */

  getActivities() {
    return read(KEYS.ACTIVITIES);
  },

  addActivity(title, description) {
    const activities = this.getActivities();

    activities.unshift({
      id: crypto.randomUUID(),
      title,
      description,
      time: new Date().toLocaleString(),
      createdAt: new Date().toISOString(),
    });

    write(KEYS.ACTIVITIES, activities);
  },

  clearActivities() {
    write(KEYS.ACTIVITIES, []);
  },

  /* ===========================
     DASHBOARD
  =========================== */

  getDashboardStats() {
    const checklist = this.getChecklist();

    return {
      totalProjects: this.getProjects().length,

      completedTasks: checklist.filter(
        (item) => item.completed
      ).length,

      totalTasks: checklist.length,

      analyses: this.getAnalyses().length,

      roadmaps: this.getRoadmaps().length,

      risks: this.getRisks().length,

      pitches: this.getPitches().length,
    };
  },

  /* ===========================
     SAMPLE DATA
  =========================== */

  seedSampleData() {
    if (this.getProjects().length > 0) return;

    this.saveProject({
      title: "HackSprint AI Coach",
      category: "Artificial Intelligence",
      description:
        "AI-powered assistant for hackathon teams.",
      teamSize: 4,
      duration: "10 Days",
      deadline: "30 Jul 2026",
      status: "In Progress",
      progress: 72,
      tags: [
        "React",
        "Gemini",
        "Node.js",
      ],
    });

    this.saveProject({
      title: "Smart Healthcare",
      category: "Healthcare",
      description:
        "Predictive healthcare platform using AI.",
      teamSize: 5,
      duration: "14 Days",
      deadline: "12 Aug 2026",
      status: "Planning",
      progress: 18,
      tags: [
        "Python",
        "TensorFlow",
      ],
    });

    this.saveProject({
      title: "Crowd Management System",
      category: "Smart City",
      description:
        "Computer Vision crowd monitoring.",
      teamSize: 6,
      duration: "15 Days",
      deadline: "15 Jul 2026",
      status: "Completed",
      progress: 100,
      tags: [
        "OpenCV",
        "YOLO",
      ],
    });
  },

  /* ===========================
     RESET
  =========================== */

  clearAll() {
    Object.values(KEYS).forEach((key) =>
      localStorage.removeItem(key)
    );
  },
};

export default storageService;