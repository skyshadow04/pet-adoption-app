import NavigationBar from "@/app/pages/parts/navigation/navigation-bar"
import BackgroundWrapper from "../front-end/background-wrapper/background-wrapper";

export default function Login() {
  return (
        <>
            <NavigationBar />
            <BackgroundWrapper>
                <section className="flex flex-col items-center justify-center min-h-screen px-4">
                    <div className="bg-white/90 shadow-xl rounded-2xl p-8 max-w-md w-full mt-16 mb-16">
                        <h1 className="text-3xl font-extrabold text-gray-800 mb-2 text-center">
                        Login
                        </h1>
                        <p className="text-gray-600 text-center mb-8">
                        Welcome back! Please sign in to your account.
                        </p>
                        <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-semibold mb-1" htmlFor="email">
                            Email
                            </label>
                            <input
                            id="email"
                            type="email"
                            required
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
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
                            required
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 transition"
                            placeholder="Your password"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 rounded bg-orange-600 hover:bg-orange-700 text-white font-semibold transition-all duration-200"
                        >
                            Sign In
                        </button>
                        </form>
                        <p className="mt-6 text-center text-gray-600 text-sm">
                        Don't have an account?{" "}
                        <a href="/pages/register" className="text-orange-600 hover:underline font-semibold">
                            Register
                        </a>
                        </p>
                    </div>
                </section>
            </BackgroundWrapper>
        </>
    );
}