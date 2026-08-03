import React from "react";

const AuthPromptModal = ({
  isOpen,
  title,
  description,
  primaryText,
  secondaryText,
  onPrimary,
  onSecondary,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex min-h-screen items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-[28px] border border-[#24A8E0]/30 bg-[#0f1118] p-6 shadow-2xl shadow-black/80">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[4px] text-[#24A8E0]">Action required</p>
            <h2 className="mt-3 text-3xl font-bold text-white">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#24A8E0]/30 px-3 py-2 text-sm text-[#cbd5e1] hover:bg-[#24A8E0]/10"
          >
            Close
          </button>
        </div>

        <p className="mt-4 text-sm leading-7 text-gray-300">{description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          <button
            type="button"
            onClick={onSecondary}
            className="rounded-full border border-[#24A8E0] px-5 py-3 text-sm font-semibold text-[#24A8E0] transition hover:bg-[#24A8E0]/10"
          >
            {secondaryText}
          </button>
          <button
            type="button"
            onClick={onPrimary}
            className="rounded-full bg-[#F1CF45] px-5 py-3 text-sm font-semibold text-[#111015] transition hover:bg-[#e0c03b]"
          >
            {primaryText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPromptModal;
