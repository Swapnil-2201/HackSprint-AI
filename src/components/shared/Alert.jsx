// src/components/Alert.jsx

import { useState } from "react";
import {
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  Info,
  X,
} from "lucide-react";

const variants = {
  success: {
    icon: CheckCircle2,
    container:
      "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300",
    iconColor: "text-green-600 dark:text-green-400",
  },

  error: {
    icon: AlertCircle,
    container:
      "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300",
    iconColor: "text-red-600 dark:text-red-400",
  },

  warning: {
    icon: AlertTriangle,
    container:
      "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-300",
    iconColor: "text-yellow-600 dark:text-yellow-400",
  },

  info: {
    icon: Info,
    container:
      "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-300",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
};

const Alert = ({
  variant = "info",
  title,
  children,
  dismissible = false,
  onClose,
}) => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  const style = variants[variant];
  const Icon = style.icon;

  const handleClose = () => {
    setVisible(false);

    if (onClose) {
      onClose();
    }
  };

  return (
    <div
      className={`flex items-start gap-4 rounded-xl border p-4 shadow-sm ${style.container}`}
    >
      <Icon
        size={22}
        className={`mt-0.5 shrink-0 ${style.iconColor}`}
      />

      <div className="flex-1">
        {title && (
          <h4 className="mb-1 font-semibold">
            {title}
          </h4>
        )}

        <div className="text-sm leading-6">
          {children}
        </div>
      </div>

      {dismissible && (
        <button
          onClick={handleClose}
          className="rounded-lg p-1 transition hover:bg-black/5 dark:hover:bg-white/10"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default Alert;