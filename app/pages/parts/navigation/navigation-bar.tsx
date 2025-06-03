"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export const APP_NAME = "Pet Adoption App";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  // On mount, check localStorage for dark mode and login state
 useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
      setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");

      // Listen for changes to localStorage (cross-tab and in-app)
      const handleStorage = () => {
        setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
      };
      window.addEventListener("storage", handleStorage);

      // Listen for custom event in the same tab
      window.addEventListener("loginStatusChanged", handleStorage);

      return () => {
        window.removeEventListener("storage", handleStorage);
        window.removeEventListener("loginStatusChanged", handleStorage);
      };
    }
  }, []);

  // Toggle dark mode and save preference
  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return next;
    });
  };

  // Helper to check if the current path matches the link
  const isActive = (href: string) => pathname === href;

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
    window.dispatchEvent(new Event("loginStatusChanged"));
    router.push("/");
  };

  return (
    <nav className="bg-white/90 dark:bg-gray-900/90 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-extrabold text-orange-600 dark:text-orange-400 tracking-tight">{APP_NAME}</span>
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-orange-100 dark:hover:bg-gray-800 text-yellow-400 dark:text-gray-200 transition"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              // Moon icon for dark mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
              </svg>
            ) : (
              // Sun icon for light mode
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth={2} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95l-1.41-1.41M6.46 6.46L5.05 5.05m12.02 0l-1.41 1.41M6.46 17.54l-1.41 1.41" />
              </svg>
            )}
          </button>
        </div>
        <div className="flex items-center gap-2">
          {/* Hamburger button for small screens */}
          <button
            className="sm:hidden text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-200 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <ul 
           className={`${
            menuOpen
              ? "flex flex-col justify-center items-center text-center absolute left-0 w-full bg-white/95 dark:bg-gray-900/95 top-16 z-40 space-y-2 rounded-b-2xl shadow-lg"
              : "hidden"
            } sm:static sm:flex sm:flex-row sm:space-x-4 sm:space-y-0 sm:bg-transparent sm:shadow-none sm:rounded-none transition-all duration-200`}
          >
          <li>
            <Link
              href="/"
              className={`block px-4 py-2 rounded-xl ${
                isActive("/") ? "text-orange-600 dark:text-orange-400 font-bold underline bg-orange-50 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
              } hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-800 transition`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className={`block px-4 py-2 rounded-xl ${
                isActive("/pages/about") ? "text-orange-600 dark:text-orange-400 font-bold underline bg-orange-50 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
              } hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-800 transition`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className={`block px-4 py-2 rounded-xl ${
                isActive("/pages/contact") ? "text-orange-600 dark:text-orange-400 font-bold underline bg-orange-50 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
              } hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-800 transition`}
            >
              Contact
            </Link>
          </li>
          {!isLoggedIn && (
            <>
              <li>
                <Link
                  href="/main/login"
                  className={`block px-4 py-2 rounded-xl ${
                    isActive("/main/login") ? "text-orange-600 dark:text-orange-400 font-bold underline bg-orange-50 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
                  } hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-800 transition`}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="/main/register"
                  className={`block px-4 py-2 rounded-xl ${
                    isActive("/main/register") ? "text-orange-600 dark:text-orange-400 font-bold underline bg-orange-50 dark:bg-gray-800" : "text-gray-700 dark:text-gray-200"
                  } hover:text-orange-700 dark:hover:text-orange-300 hover:bg-orange-100 dark:hover:bg-gray-800 transition`}
                >
                  Register
                </Link>
              </li>
            </>
          )}
          {isLoggedIn && (
            <li>
              <button
                onClick={handleLogout}
                className="block px-4 py-2 rounded-xl text-white bg-orange-600 hover:bg-orange-700 font-semibold shadow transition"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}