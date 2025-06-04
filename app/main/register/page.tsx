"use client";
import NavigationBar from "@/app/pages/parts/navigation/navigation-bar";
import BackgroundWrapper from "@/app/main/front-end/background-wrapper/background-wrapper";
import { useState } from "react";
import { useRouter } from "next/navigation";
import sha256 from "crypto-js/sha256";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Simple PH number validation: starts with 09 or +639, 11 digits
  const isValidPHNumber = (num: string) => /^(\+639|09)\d{9}$/.test(num);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError(""); // clear error on change
  };

  const handleSubmit = async (e: React.FormEvent) => {
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

      setLoading(true);
      setError("");

      try {
        // Hash the password before sending
        const hashedPassword = sha256(form.password).toString();

        const res = await fetch("/api/register-api", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            account_name: form.name,
            account_email: form.email,
            account_password: hashedPassword,
            account_con_number: form.contact,
          }),
        });
        const data = await res.json();
        if (res.ok && data.ok) {
          setSubmitted(true);
          setForm({ name: "", email: "", password: "", contact: "" });
        } else {
          setError(data.message || "Registration failed.");
        }
      } catch (err) {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    };

  return (
    <>
      <NavigationBar />
      <BackgroundWrapper>
        <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-white dark:bg-gray-900">
          <div className="relative bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-3xl p-10 max-w-md w-full mt-16 mb-16 overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 text-center tracking-tight">
              Create Your Account
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Start your adoption journey with us!
            </p>
            {submitted ? (
              <div className="text-green-600 dark:text-green-400 text-center font-semibold py-8">
                Registration successful! You can now{" "}
                <a href="/main/login" className="text-orange-600 dark:text-orange-400 underline">
                  login
                </a>.
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="name">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="password">
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                    placeholder="Your password"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 dark:text-gray-200 font-semibold mb-1" htmlFor="contact">
                    Contact Number
                  </label>
                  <input
                    id="contact"
                    type="tel"
                    value={form.contact}
                    onChange={handleChange}
                    required
                    pattern="^(\+639|09)\d{9}$"
                    className={`w-full px-4 py-2 border ${
                      form.contact && !isValidPHNumber(form.contact)
                        ? "border-red-500 dark:border-red-500"
                        : "border-gray-300 dark:border-gray-700"
                    } rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition`}
                    placeholder="09XXXXXXXXX or +639XXXXXXXXX"
                  />
                  {form.contact && !isValidPHNumber(form.contact) && (
                    <span className="text-red-500 text-xs">
                      Enter a valid Philippine mobile number.
                    </span>
                  )}
                </div>
                {error && (
                  <div className="text-red-500 dark:text-red-400 text-sm text-center">{error}</div>
                )}
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg transition-all duration-200 flex items-center justify-center"
                  disabled={
                    loading ||
                    !form.name ||
                    !form.email ||
                    !form.password ||
                    !form.contact ||
                    !isValidPHNumber(form.contact) ||
                    form.password.length < 6
                  }
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </form>
            )}
            <p className="mt-6 text-center text-gray-600 dark:text-gray-300 text-sm">
              Already have an account?{" "}
              <a href="/main/login" className="text-orange-600 dark:text-orange-400 hover:underline font-semibold">
                Login
              </a>
            </p>
          </div>
        </section>
      </BackgroundWrapper>
    </>
  );
}