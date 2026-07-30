// src/components/shared/Pagination.jsx

import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  siblingCount = 1,
}) => {
  if (totalPages <= 1) return null;

  const generatePages = () => {
    const pages = [];

    const start = Math.max(1, currentPage - siblingCount);
    const end = Math.min(totalPages, currentPage + siblingCount);

    if (start > 1) {
      pages.push(1);

      if (start > 2) {
        pages.push("...");
      }
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages) {
      if (end < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      {/* Previous */}

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Page Numbers */}

      {generatePages().map((page, index) =>
        page === "..." ? (
          <span
            key={index}
            className="px-2 text-slate-500"
          >
            ...
          </span>
        ) : (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg font-medium transition
              ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "border border-slate-300 bg-white hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
              }
            `}
          >
            {page}
          </button>
        )
      )}

      {/* Next */}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;