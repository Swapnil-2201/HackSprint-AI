import {
  LayoutDashboard,
  FolderKanban,
  Lightbulb,
  Map,
  ShieldAlert,
  ClipboardCheck,
  Presentation,
  Settings,
} from "lucide-react";

/*
|--------------------------------------------------------------------------
| Navigation
|--------------------------------------------------------------------------
*/

export const NAVIGATION_ITEMS = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Workspace",
    path: "/workspace",
    icon: FolderKanban,
  },
  {
    name: "Idea Analyzer",
    path: "/idea-analyzer",
    icon: Lightbulb,
  },
  {
    name: "Roadmap",
    path: "/roadmap",
    icon: Map,
  },
  {
    name: "Risk Report",
    path: "/risk-report",
    icon: ShieldAlert,
  },
  {
    name: "Checklist",
    path: "/checklist",
    icon: ClipboardCheck,
  },
  {
    name: "Pitch Generator",
    path: "/pitch-generator",
    icon: Presentation,
  },
  {
    name: "Settings",
    path: "/settings",
    icon: Settings,
  },
];

/*
|--------------------------------------------------------------------------
| Project Status
|--------------------------------------------------------------------------
*/

export const PROJECT_STATUS = [
  "Planning",
  "In Progress",
  "Completed",
  "Blocked",
];

/*
|--------------------------------------------------------------------------
| Project Priority
|--------------------------------------------------------------------------
*/

export const PROJECT_PRIORITY = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

/*
|--------------------------------------------------------------------------
| AI Tools
|--------------------------------------------------------------------------
*/

export const AI_TOOLS = [
  {
    id: "idea-analyzer",
    title: "Idea Analyzer",
    description: "Analyze your hackathon idea with AI.",
    route: "/idea-analyzer",
  },
  {
    id: "roadmap",
    title: "Roadmap Generator",
    description: "Generate a development roadmap.",
    route: "/roadmap",
  },
  {
    id: "risk-report",
    title: "Risk Report",
    description: "Identify project risks and bottlenecks.",
    route: "/risk-report",
  },
  {
    id: "checklist",
    title: "Checklist Generator",
    description: "Create a project execution checklist.",
    route: "/checklist",
  },
  {
    id: "pitch-generator",
    title: "Pitch Generator",
    description: "Generate a winning hackathon pitch.",
    route: "/pitch-generator",
  },
];

/*
|--------------------------------------------------------------------------
| Dashboard Statistics
|--------------------------------------------------------------------------
*/

export const DASHBOARD_STATS = [
  {
    key: "projects",
    title: "Projects",
    color: "blue",
  },
  {
    key: "completedTasks",
    title: "Completed Tasks",
    color: "green",
  },
  {
    key: "pendingTasks",
    title: "Pending Tasks",
    color: "orange",
  },
  {
    key: "aiReports",
    title: "AI Reports",
    color: "purple",
  },
];

/*
|--------------------------------------------------------------------------
| Theme
|--------------------------------------------------------------------------
*/

export const THEME_OPTIONS = [
  "light",
  "dark",
];

/*
|--------------------------------------------------------------------------
| Local Storage Keys
|--------------------------------------------------------------------------
*/

export const STORAGE_KEYS = {
  TOKEN: "hackathon_ai_token",
  USER: "hackathon_ai_user",
  THEME: "hackathon_ai_theme",
  PROJECTS: "hackathon_ai_projects",
};

/*
|--------------------------------------------------------------------------
| API Endpoints
|--------------------------------------------------------------------------
*/

export const API_ENDPOINTS = {
  AUTH: "/auth",
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  PROFILE: "/auth/profile",

  PROJECTS: "/projects",
  PROJECT_BY_ID: "/projects/:id",

  IDEA_ANALYZER: "/ai/idea-analyzer",
  ROADMAP: "/ai/roadmap",
  RISK_REPORT: "/ai/risk-report",
  CHECKLIST: "/ai/checklist",
  PITCH_GENERATOR: "/ai/pitch-generator",
};

/*
|--------------------------------------------------------------------------
| Default Pagination
|--------------------------------------------------------------------------
*/

export const PAGINATION = {
  PAGE: 1,
  LIMIT: 10,
};

/*
|--------------------------------------------------------------------------
| App Information
|--------------------------------------------------------------------------
*/

export const APP_INFO = {
  NAME: "Hackathon AI Coach",
  VERSION: "1.0.0",
  AUTHOR: "Team Hackathon",
};