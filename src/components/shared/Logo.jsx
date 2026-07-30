// src/components/shared/Logo.jsx

import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Logo = ({
  to = "/",
  size = "md",
  showText = true,
  className = "",
}) => {
  const sizes = {
    sm: {
      icon: "h-10 w-10",
      iconSize: 18,
      title: "text-lg",
      subtitle: "text-[11px]",
    },
    md: {
      icon: "h-12 w-12",
      iconSize: 22,
      title: "text-xl",
      subtitle: "text-xs",
    },
    lg: {
      icon: "h-14 w-14",
      iconSize: 28,
      title: "text-2xl",
      subtitle: "text-sm",
    },
  };

  const current = sizes[size];

  return (
    <Link
      to={to}
      className={`inline-flex items-center gap-3 ${className}`}
    >
      {/* Logo Icon */}

      <div
        className={`
          ${current.icon}
          flex
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-r
          from-blue-600
          to-indigo-600
          text-white
          shadow-lg
        `}
      >
        <Sparkles size={current.iconSize} />
      </div>

      {/* Logo Text */}

      {showText && (
        <div>
          <h1
            className={`${current.title} font-bold text-slate-900 dark:text-white`}
          >
            HackSprint AI
          </h1>

          <p
            className={`${current.subtitle} tracking-wide text-slate-500 dark:text-slate-400`}
          >
            AI Coach
          </p>
        </div>
      )}
    </Link>
  );
};

export default Logo;