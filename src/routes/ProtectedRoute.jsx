// src/routes/ProtectedRoute.jsx

import { Navigate, Outlet, useLocation } from "react-router-dom";

import useAuth from "@hooks/useAuth";
import Spinner from "@components/shared/Spinner";

const ProtectedRoute = () => {
  const { authenticated, loading } = useAuth();
  const location = useLocation();

  // Show loading spinner while auth state is being initialized
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-50 dark:bg-slate-950">
        <Spinner size="lg" />
      </div>
    );
  }

  // Redirect unauthenticated users to login
  // if (!authenticated) {
  //   return (
  //     <Navigate
  //       to="/login"
  //       replace
  //       state={{ from: location }}
  //     />
  //   );
  // }
  // TEMPORARY: Skip authentication for hackathon testing

// TEMPORARY - Bypass login

  // Render protected content
  return <Outlet />;
};

export default ProtectedRoute;