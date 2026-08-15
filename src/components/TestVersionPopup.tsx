"use client";

import { useEffect, useState } from "react";

const FEEDBACK_EMAIL = "feedback@ilaguard.com";

export default function TestVersionPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem(
      "ilaguard-test-version-popup"
    );

    if (!hasSeenPopup) {
      setIsOpen(true);
    }
  }, []);

  function handleContinue() {
    localStorage.setItem("ilaguard-test-version-popup", "true");
    setIsOpen(false);
  }

  function handleFeedback() {
    const subject = encodeURIComponent("IlaGuard Website Feedback");
    const body = encodeURIComponent(
      "Hello IlaGuard Labs,\n\nI would like to share feedback about the IlaGuard website.\n\nFeedback:\n\n\nThank you."
    );

    window.location.href = `mailto:${FEEDBACK_EMAIL}?subject=${subject}&body=${body}`;
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="test-version-title"
    >
      <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
          🧪
        </div>

        <div className="mt-5 text-center">
          <div className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold tracking-wide text-yellow-700">
            TEST VERSION
          </div>

          <h2
            id="test-version-title"
            className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl"
          >
            Welcome to IlaGuard Labs
          </h2>

          <p className="mt-3 text-gray-600">
            Our website is currently in the{" "}
            <strong>testing and development phase.</strong>
          </p>
        </div>

        <div className="mt-6 rounded-2xl bg-green-50 p-5">
          <p className="text-sm leading-relaxed text-gray-700">
            🌱 Some features may still be under development, and you may
            notice changes, incomplete information, or occasional errors while
            we continue improving the platform.
          </p>

          <p className="mt-4 text-sm leading-relaxed text-gray-700">
            💬 Your feedback is extremely valuable to us. It will help us build
            better technology for farmers, agriculture, and smart farming.
          </p>
        </div>

        <p className="mt-5 text-center text-sm text-gray-500">
          Thank you for being an early user of IlaGuard Labs. 🙏
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={handleFeedback}
            className="flex-1 rounded-xl border border-green-700 px-5 py-3.5 font-semibold text-green-700 transition hover:bg-green-50"
          >
            💬 Share Feedback
          </button>

          <button
            type="button"
            onClick={handleContinue}
            className="flex-1 rounded-xl bg-green-700 px-5 py-3.5 font-semibold text-white transition hover:bg-green-800"
          >
            ✓ Continue to Website
          </button>
        </div>

        <p className="mt-3 text-center text-xs text-gray-400">
          Feedback will open your email app and be addressed to {FEEDBACK_EMAIL}.
        </p>
      </div>
    </div>
  );
}
