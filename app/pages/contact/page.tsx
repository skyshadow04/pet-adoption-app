"use client";
import NavigationBar from '../parts/navigation/navigation-bar';
import { handleContact } from '@/app/main/backend/contact-backend/handle-contact';
import { useState, useTransition } from "react";

export default function Contact() {
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const onSubmit = (formData: FormData) => {
    setSuccess(null);
    setError(null);
    startTransition(async () => {
      const result = await handleContact(formData);
      if (result?.ok) {
        setSuccess("Thank you! Your message has been sent.");
      } else {
        setError("Something went wrong. Please try again.");
      }
    });
  };

  return (
    <>
      <NavigationBar />
      <section className="flex flex-col items-center justify-center min-h-screen dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4">
        <div className="relative bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-3xl p-10 max-w-xl w-full mt-16 mb-16 overflow-hidden">
          {/* Decorative gradient blur */}
          <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
          <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
            Have questions or want to get in touch? Fill out the form below and our team will respond soon!
          </p>
          <form
            className="space-y-6"
            action={onSubmit}
            autoComplete="off"
          >
            <div>
              <label className="block text-gray-700 dark:text-gray-900 font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-200 flex items-center justify-center shadow-lg"
              disabled={isPending}
            >
              {isPending ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
            {success && (
              <div className="text-green-600 dark:text-green-400 text-center font-semibold">{success}</div>
            )}
            {error && (
              <div className="text-red-600 dark:text-red-400 text-center font-semibold">{error}</div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}