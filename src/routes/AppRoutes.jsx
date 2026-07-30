import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import AuthLayout from "@layouts/AuthLayout";
import AppShellLayout from "@layouts/AppShellLayout";

// Public Pages
import LandingPage from "@app/landing/LandingPage";

// Authentication
import Login from "@app/auth/Login";
import Register from "@app/auth/Register";

// Protected Pages
import Dashboard from "@app/dashboard/Dashboard";
import Workspace from "@app/workspace/Workspace";
import IdeaAnalyzer from "@app/idea/IdeaAnalyzer";
import AnalysisResult from "@app/idea/AnalysisResult";
import Roadmap from "@app/roadmap/Roadmap";
import RiskReport from "@app/risks/RiskReport";
import Checklist from "@app/checklist/Checklist";
import PitchGenerator from "@app/pitch/PitchGenerator";
import Settings from "@app/settings/Settings";


const AppRoutes = () => {
  return (
    <Routes>

      {/* ========================= */}
      {/* Public Routes */}
      {/* ========================= */}

      <Route path="/" element={<LandingPage />} />

      {/* ========================= */}
      {/* Authentication */}
      {/* ========================= */}

      <Route element={<AuthLayout />}>
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />
      </Route>

      {/* ========================= */}
      {/* Protected Routes */}
      {/* ========================= */}

      <Route element={<ProtectedRoute />}>
        <Route element={<AppShellLayout />}>

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route
            path="/workspace"
            element={<Workspace />}
          />

          <Route
            path="/idea-analyzer"
            element={<IdeaAnalyzer />}
          />
          <Route
            path="/idea/result"
            element={<AnalysisResult />}
          />

          <Route
            path="/roadmap"
            element={<Roadmap />}
          />

          <Route
            path="/risk-report"
            element={<RiskReport />}
          />

          <Route
            path="/checklist"
            element={<Checklist />}
          />

          <Route
            path="/pitch-generator"
            element={<PitchGenerator />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Route>
      </Route>

      {/* ========================= */}
      {/* Fallback */}
      {/* ========================= */}

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />

    </Routes>
  );
};

export default AppRoutes;