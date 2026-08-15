"use client";

import { FormEvent, useEffect, useState } from "react";

const RATINGS = [
  { value: "Very Good", label: "👍 Very Good" },
  { value: "Good", label: "🙂 Good" },
  { value: "Okay", label: "😐 Okay" },
  { value: "Needs Improvement", label: "👎 Needs Improvement" },
];

export default function TestVersionPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState("Very Good");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem("ilaguard-test-version-popup");
    if (!hasSeenPopup) setIsOpen(true);
  }, []);

  function handleContinue() {
    localStorage.setItem("ilaguard-test-version-popup", "true");
    setIsOpen(false);
  }

  function openFeedback() {
    setShowFeedback(true);
    setStatus("idle");
    setErrorMessage("");
  }

  function closeFeedback() {
    if (status !== "sending") setShowFeedback(false);
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your feedback.");
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          message: message.trim(),
          email: email.trim(),
          website: honeypot,
          page: window.location.href,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Unable to send feedback.");
      }

      setStatus("success");
      setMessage("");
      setEmail("");
      setHoneypot("");
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Unable to send feedback right now. Please try again."
      );
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="test-version-title"
    >
      {!showFeedback ? (
        <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl">
            🧪
          </div>

          <div className="mt-5 text-center">
            <div className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold tracking-wide text-yellow-700">
              TEST VERSION
            </div>

            <h2 id="test-version-title" className="mt-4 text-2xl font-bold text-gray-900 sm:text-3xl">
              Welcome to IlaGuard Labs
            </h2>

            <p className="mt-3 text-gray-600">
              Our website is currently in the <strong>testing and development phase.</strong>
            </p>
          </div>

          <div className="mt-6 rounded-2xl bg-green-50 p-5">
            <p className="text-sm leading-relaxed text-gray-700">
              🌱 Some features may still be under development, and you may notice changes,
              incomplete information, or occasional errors while we continue improving the platform.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-gray-700">
              💬 Your feedback is extremely valuable to us. It will help us build better technology
              for farmers, agriculture, and smart farming.
            </p>
          </div>

          <p className="mt-5 text-center text-sm text-gray-500">
            Thank you for being an early user of IlaGuard Labs. 🙏
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={openFeedback}
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
        </div>
      ) : (
        <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-2xl">💬</div>
              <h2 className="mt-2 text-2xl font-bold text-gray-900">Share Your Feedback</h2>
              <p className="mt-1 text-sm text-gray-500">Help us improve the IlaGuard website.</p>
            </div>

            <button
              type="button"
              onClick={closeFeedback}
              className="rounded-full px-3 py-2 text-xl text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              aria-label="Close feedback form"
            >
              ×
            </button>
          </div>

          {status === "success" ? (
            <div className="mt-8 rounded-2xl bg-green-50 p-6 text-center">
              <div className="text-4xl">✅</div>
              <h3 className="mt-3 text-xl font-bold text-green-900">Thank you!</h3>
              <p className="mt-2 text-sm leading-relaxed text-green-800">
                Your feedback has been sent to the IlaGuard team. It will help us improve the platform.
              </p>
              <button
                type="button"
                onClick={handleContinue}
                className="mt-6 w-full rounded-xl bg-green-700 px-5 py-3.5 font-semibold text-white hover:bg-green-800"
              >
                ✓ Continue to Website
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6">
              <fieldset>
                <legend className="text-sm font-semibold text-gray-800">How was your experience?</legend>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {RATINGS.map((item) => (
                    <button
                      key={item.value}
                      type="button"
                      onClick={() => setRating(item.value)}
                      className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
                        rating === item.value
                          ? "border-green-700 bg-green-50 text-green-800"
                          : "border-gray-200 text-gray-700 hover:border-green-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <label className="mt-5 block text-sm font-semibold text-gray-800" htmlFor="feedback-message">
                Your feedback <span className="text-red-500">*</span>
              </label>
              <textarea
                id="feedback-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                maxLength={5000}
                required
                rows={5}
                placeholder="Tell us what worked, what did not work, or what you would like us to add..."
                className="mt-2 w-full resize-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />
              <div className="mt-1 text-right text-xs text-gray-400">{message.length}/5000</div>

              <label className="mt-3 block text-sm font-semibold text-gray-800" htmlFor="feedback-email">
                Email <span className="font-normal text-gray-400">(optional)</span>
              </label>
              <input
                id="feedback-email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
              />

              {/* Honeypot field. Hidden from normal users; useful against simple bots. */}
              <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(event) => setHoneypot(event.target.value)}
                />
              </div>

              {status === "error" && (
                <div className="mt-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-5 w-full rounded-xl bg-green-700 px-5 py-3.5 font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending Feedback..." : "Send Feedback"}
              </button>

              <p className="mt-3 text-center text-xs text-gray-400">
                Your feedback will be sent securely to the IlaGuard team.
              </p>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
