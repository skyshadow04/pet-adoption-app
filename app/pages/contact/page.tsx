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
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-orange-100 px-4">
        <div className="bg-white/90 shadow-xl rounded-2xl p-10 max-w-xl w-full mt-16 mb-16">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-gray-600 text-center mb-8">
            Have questions or want to get in touch? Fill out the form below and our team will respond soon!
          </p>
          <form
            className="space-y-6"
            action={onSubmit}
            autoComplete="off"
          >
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-200 flex items-center justify-center"
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
              <div className="text-green-600 text-center font-semibold">{success}</div>
            )}
            {error && (
              <div className="text-red-600 text-center font-semibold">{error}</div>
            )}
          </form>
        </div>
      </section>
    </>
  );
}