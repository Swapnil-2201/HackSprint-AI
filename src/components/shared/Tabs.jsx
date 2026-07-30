// src/components/shared/Tabs.jsx

import { useState } from "react";

const Tabs = ({
  tabs = [],
  defaultTab,
  onChange,
  className = "",
}) => {
  const initialTab = defaultTab || tabs[0]?.id;
  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabClick = (id) => {
    setActiveTab(id);
    onChange?.(id);
  };

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div className={className}>
      {/* Tab Buttons */}

      <div className="mb-6 flex flex-wrap gap-2 border-b border-slate-200 dark:border-slate-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`
              flex items-center gap-2
              border-b-2
              px-4 py-3
              text-sm font-medium
              transition-all duration-200
              ${
                activeTab === tab.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
              }
            `}
          >
            {tab.icon && <tab.icon size={18} />}
            {tab.label}

            {tab.badge && (
              <span className="rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}

      <div>
        {currentTab?.content}
      </div>
    </div>
  );
};

export default Tabs;