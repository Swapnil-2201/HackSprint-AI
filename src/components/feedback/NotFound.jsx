// src/components/NotFound.jsx

import { Link } from "react-router-dom";
import { Home, ArrowLeft, SearchX } from "lucide-react";

import Button from "@components/shared/Button";

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6 dark:bg-slate-950">

      <div className="w-full max-w-2xl rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-xl dark:border-slate-700 dark:bg-slate-900">

        {/* 404 Icon */}

        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/20">
          <SearchX
            size={56}
            className="text-blue-600"
          />
        </div>

        {/* Error Code */}

        <h1 className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-7xl font-extrabold text-transparent">
          404
        </h1>

        {/* Heading */}

        <h2 className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
          Sorry, the page you're looking for doesn't exist,
          may have been moved, or the URL is incorrect.
        </p>

        {/* Suggestions */}

        <div className="mt-8 rounded-2xl bg-slate-100 p-6 text-left dark:bg-slate-800">

          <h3 className="mb-3 font-semibold text-slate-900 dark:text-white">
            You can try:
          </h3>

          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>• Check the URL for typing mistakes.</li>
            <li>• Return to the Dashboard.</li>
            <li>• Go back to the previous page.</li>
            <li>• Start from the Home page.</li>
          </ul>

        </div>

        {/* Actions */}

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

          <Link to="/">
            <Button>
              <Home size={18} />
              Home
            </Button>
          </Link>

          <Button
            variant="outline"
            onClick={() => window.history.back()}
          >
            <ArrowLeft size={18} />
            Go Back
          </Button>

        </div>

      </div>

    </div>
  );
};

export default NotFound;