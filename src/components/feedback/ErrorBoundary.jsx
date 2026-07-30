// src/components/ErrorBoundary.jsx

import React, { Component } from "react";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Link } from "react-router-dom";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error);
    console.error("Error Info:", errorInfo);

    this.setState({
      errorInfo,
    });

    // Send error to backend or logging service
    // Example:
    // logErrorToServer(error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleReset = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">
          <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

            {/* Icon */}

            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <AlertTriangle
                size={48}
                className="text-red-600"
              />
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-bold text-slate-900 dark:text-white">
              Oops! Something went wrong.
            </h1>

            <p className="mt-4 text-slate-600 dark:text-slate-400">
              An unexpected error occurred while rendering this page.
              Please try refreshing the page or return to the dashboard.
            </p>

            {/* Error Details */}

            {process.env.NODE_ENV === "development" &&
              this.state.error && (
                <div className="mt-8 overflow-auto rounded-xl bg-slate-100 p-5 text-left dark:bg-slate-800">
                  <h3 className="mb-3 font-semibold text-red-600">
                    Development Error
                  </h3>

                  <pre className="whitespace-pre-wrap break-words text-sm text-slate-700 dark:text-slate-300">
                    {this.state.error.toString()}
                  </pre>
                </div>
              )}

            {/* Buttons */}

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <button
                onClick={this.handleReload}
                className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              >
                <RefreshCw size={18} />
                Reload Page
              </button>

              <button
                onClick={this.handleReset}
                className="rounded-xl border border-slate-300 px-6 py-3 font-medium transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
              >
                Try Again
              </button>

              <Link
                to="/dashboard"
                className="flex items-center justify-center gap-2 rounded-xl bg-green-600 px-6 py-3 font-medium text-white transition hover:bg-green-700"
              >
                <Home size={18} />
                Dashboard
              </Link>

            </div>

          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;