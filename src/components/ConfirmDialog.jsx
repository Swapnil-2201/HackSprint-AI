import Modal from "./shared/Modal";
import { AlertTriangle } from "lucide-react";

export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = "Confirm Action",
  message = "Are you sure you want to continue?",
  confirmText = "Confirm",
  cancelText = "Cancel",
  type = "danger",
  loading = false,
}) {
  const buttonStyles = {
    danger:
      "bg-red-600 hover:bg-red-700 focus:ring-red-500",
    warning:
      "bg-yellow-500 hover:bg-yellow-600 focus:ring-yellow-500",
    primary:
      "bg-blue-600 hover:bg-blue-700 focus:ring-blue-500",
  };

  const iconStyles = {
    danger:
      "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    warning:
      "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    primary:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={
        <>
          <button
            onClick={onClose}
            disabled={loading}
            className="rounded-lg border border-slate-300 px-4 py-2 font-medium transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:hover:bg-slate-800"
          >
            {cancelText}
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className={`rounded-lg px-4 py-2 font-medium text-white transition focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50 ${
              buttonStyles[type] || buttonStyles.danger
            }`}
          >
            {loading ? "Please wait..." : confirmText}
          </button>
        </>
      }
    >
      <div className="flex items-start gap-4">
        <div
          className={`rounded-full p-3 ${
            iconStyles[type] || iconStyles.danger
          }`}
        >
          <AlertTriangle size={28} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-2 leading-6 text-slate-600 dark:text-slate-400">
            {message}
          </p>
        </div>
      </div>
    </Modal>
  );
}