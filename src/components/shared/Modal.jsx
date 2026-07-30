// src/components/shared/Modal.jsx

import { useEffect } from "react";
import { X } from "lucide-react";

const sizes = {
  sm: "max-w-md",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-6xl",
};

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose?.();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleOverlayClick = () => {
    if (closeOnOverlay) {
      onClose?.();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay */}

      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleOverlayClick}
      />

      {/* Modal */}

      <div
        className={`
          relative
          z-10
          w-full
          ${sizes[size]}
          overflow-hidden
          rounded-2xl
          bg-white
          shadow-2xl
          dark:bg-slate-900
          animate-in
          fade-in
          zoom-in-95
          duration-200
        `}
      >
        {/* Header */}

        {(title || showCloseButton) && (
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 dark:border-slate-700">
            <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
              {title}
            </h2>

            {showCloseButton && (
              <button
                onClick={onClose}
                className="rounded-lg p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X size={20} />
              </button>
            )}
          </div>
        )}

        {/* Body */}

        <div className="max-h-[70vh] overflow-y-auto p-6">
          {children}
        </div>

        {/* Footer */}

        {footer && (
          <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4 dark:border-slate-700">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;