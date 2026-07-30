// src/components/Avatar.jsx

import { User } from "lucide-react";

const sizeClasses = {
  xs: "h-8 w-8 text-xs",
  sm: "h-10 w-10 text-sm",
  md: "h-12 w-12 text-base",
  lg: "h-16 w-16 text-lg",
  xl: "h-20 w-20 text-xl",
};

const Avatar = ({
  src,
  alt = "Avatar",
  name = "",
  size = "md",
  rounded = true,
  status,
  className = "",
}) => {
  const initials = name
    ? name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 2)
        .toUpperCase()
    : "";

  const statusColors = {
    online: "bg-green-500",
    offline: "bg-gray-400",
    busy: "bg-red-500",
    away: "bg-yellow-500",
  };

  return (
    <div className="relative inline-flex">
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`
            ${sizeClasses[size]}
            ${rounded ? "rounded-full" : "rounded-xl"}
            object-cover
            border-2
            border-white
            shadow-md
            dark:border-slate-800
            ${className}
          `}
        />
      ) : (
        <div
          className={`
            ${sizeClasses[size]}
            ${rounded ? "rounded-full" : "rounded-xl"}
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-blue-600
            to-indigo-600
            text-white
            font-semibold
            shadow-md
            ${className}
          `}
        >
          {initials || <User size={20} />}
        </div>
      )}

      {status && (
        <span
          className={`
            absolute
            bottom-0
            right-0
            h-3.5
            w-3.5
            rounded-full
            border-2
            border-white
            dark:border-slate-900
            ${statusColors[status]}
          `}
        />
      )}
    </div>
  );
};

export default Avatar;