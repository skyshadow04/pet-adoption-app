"use client";
import NavigationBar from "@/app/pages/parts/navigation/navigation-bar";
import BackgroundWrapper from "@/app/main/front-end/background-wrapper/background-wrapper";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // Simple PH number validation: starts with 09 or +639, 11 digits
  const isValidPHNumber = (num: string) => /^(\+639|09)\d{9}$/.test(num);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError(""); // clear error on change
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!form.name || !form.email || !form.password || !form.contact) {
      setError("All fields are required.");
      return;
    }
    if (!isValidPHNumber(form.contact)) {
      setError("Enter a valid Philippine mobile number.");
      return;
    }
    if (form.password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <NavigationBar />
      <BackgroundWrapper>
        <section className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-md w-full mt-16 mb-16">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
              Register
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Create your account to start adopting!
            </p>
            {submitted ? (
              <div className="text-green-600 text-center font-semibold py-8">
                Registration successful! You can now <a href="/main/login" className="text-orange-600 underline">login</a>.
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
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
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
                    placeholder="Your password"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-1" htmlFor="contact">
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    type="tel"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    pattern="^(\+639|09)\d{9}$"
                    className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-orange-400 ${
                      form.contact && !isValidPHNumber(form.contact)
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    placeholder="09XXXXXXXXX or +639XXXXXXXXX"
                  />
                  {form.contact && !isValidPHNumber(form.contact) && (
                    <span className="text-red-500 text-xs">
                      Enter a valid Philippine mobile number.
                    </span>
                  )}
                </div>
                {error && (
                  <div className="text-red-500 text-sm text-center">{error}</div>
                )}
                <button
                  type="submit"
                  className="w-full py-3 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-200"
                  disabled={
                    !form.name ||
                    !form.email ||
                    !form.password ||
                    !form.contact ||
                    !isValidPHNumber(form.contact) ||
                    form.password.length < 6
                  }
                >
                  Register
                </button>
              </form>
            )}
            <p className="mt-6 text-center text-gray-600 text-sm">
              Already have an account?{" "}
              <a href="/main/login" className="text-orange-600 hover:underline font-semibold">
                Login
              </a>
            </p>
          </div>
        </section>
      </BackgroundWrapper>
    </>
  );
}