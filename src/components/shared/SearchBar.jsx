// src/components/shared/SearchBar.jsx

import { Search, X } from "lucide-react";

const SearchBar = ({
  value,
  onChange,
  onClear,
  placeholder = "Search...",
  className = "",
  autoFocus = false,
  disabled = false,
}) => {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Search Icon */}

      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      {/* Input */}

      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoFocus={autoFocus}
        disabled={disabled}
        className="
          w-full
          rounded-xl
          border
          border-slate-300
          bg-white
          py-3
          pl-11
          pr-11
          text-sm
          text-slate-900
          placeholder:text-slate-400
          outline-none
          transition-all
          duration-200
          focus:border-blue-500
          focus:ring-2
          focus:ring-blue-500
          disabled:cursor-not-allowed
          disabled:opacity-60
          dark:border-slate-700
          dark:bg-slate-900
          dark:text-white
          dark:placeholder:text-slate-500
        "
      />

      {/* Clear Button */}

      {value && (
        <button
          type="button"
          onClick={onClear}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;