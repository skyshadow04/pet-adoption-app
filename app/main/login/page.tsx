"use client";
import { useState } from "react";
import NavigationBar from "@/app/pages/parts/navigation/navigation-bar";
import BackgroundWrapper from "../front-end/background-wrapper/background-wrapper";
import { useRouter } from "next/navigation";
import sha256 from "crypto-js/sha256";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const hashedPassword = sha256(form.password).toString();
      const res = await fetch("/api/login-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          account_email: form.email,
          account_password: hashedPassword,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed.");
        setLoading(false);
        return;
      }

      localStorage.setItem("isLoggedIn", "true");
      window.dispatchEvent(new Event("loginStatusChanged"));

      console.log("Login success:", data.user);

      // On success, redirect or show a message
      router.push("/");
    } catch (err: any) {
      setError("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavigationBar />
      <BackgroundWrapper>
        <section className="flex flex-col items-center justify-center min-h-screen px-4">
          <div className="relative bg-white/90 dark:bg-gray-900/90 shadow-2xl rounded-3xl p-10 max-w-md w-full mt-16 mb-16 overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-orange-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-400 opacity-20 rounded-full blur-2xl pointer-events-none" />
            <h1 className="text-3xl font-extrabold text-gray-800 dark:text-gray-100 mb-2 text-center tracking-tight">
              Login
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
              Welcome back! Please sign in to your account.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit} autoComplete="off">
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
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                  placeholder="Your password"
                />
              </div>
              {error && (
                <div className="text-red-500 dark:text-red-400 text-center font-semibold">{error}</div>
              )}
              <button
                type="submit"
                className="w-full py-3 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-semibold shadow-lg transition-all duration-200 flex items-center justify-center"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
            <p className="mt-6 text-center text-gray-600 dark:text-gray-300 text-sm">
              Don't have an account?{" "}
              <a href="/main/register" className="text-orange-600 dark:text-orange-400 hover:underline font-semibold">
                Register
              </a>
            </p>
          </div>
        </section>
      </BackgroundWrapper>
    </>
  );
}