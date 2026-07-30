// src/components/shared/Tooltip.jsx

import { useState } from "react";

const Tooltip = ({
  children,
  content,
  position = "top",
  className = "",
}) => {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrows = {
    top: "bottom-[-4px] left-1/2 -translate-x-1/2",
    bottom: "top-[-4px] left-1/2 -translate-x-1/2",
    left: "right-[-4px] top-1/2 -translate-y-1/2",
    right: "left-[-4px] top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {visible && (
        <div
          className={`
            absolute
            z-50
            whitespace-nowrap
            rounded-lg
            bg-slate-900
            px-3
            py-2
            text-xs
            font-medium
            text-white
            shadow-lg
            dark:bg-slate-700
            ${positions[position]}
          `}
        >
          {content}

          {/* Arrow */}

          <span
            className={`
              absolute
              h-2
              w-2
              rotate-45
              bg-slate-900
              dark:bg-slate-700
              ${arrows[position]}
            `}
          />
        </div>
      )}
    </div>
  );
};

export default Tooltip;