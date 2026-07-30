import { lazy } from "react";
import AnalysisResult from "@/idea/AnalysisResult";
// Auth
const Login = lazy(() => import("../app/auth/Login"));
const Register = lazy(() => import("../app/auth/Register"));

// Main Pages
const Dashboard = lazy(() => import("../app/dashboard/Dashboard"));
const Workspace = lazy(() => import("../app/workspace/Workspace"));
const IdeaAnalyzer = lazy(() => import("../app/idea/IdeaAnalyzer"));
const Roadmap = lazy(() => import("../app/roadmap/Roadmap"));
const RiskReport = lazy(() => import("../app/risks/RiskReport"));
const Checklist = lazy(() => import("../app/checklist/Checklist"));
const PitchGenerator = lazy(() => import("../app/pitch/PitchGenerator"));
const Settings = lazy(() => import("../app/settings/Settings"));

// Error Page
const NotFound = lazy(() => import("../components/feedback/NotFound"));

const routes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/workspace",
    element: <Workspace />,
  },
  {
    path: "/idea-analyzer",
    element: <IdeaAnalyzer />,
  },
  {
    path: "/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/risk-report",
    element: <RiskReport />,
  },
  {
    path: "/checklist",
    element: <Checklist />,
  },
  {
    path: "/pitch-generator",
    element: <PitchGenerator />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;