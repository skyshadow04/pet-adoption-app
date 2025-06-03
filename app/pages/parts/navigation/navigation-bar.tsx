"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const APP_NAME = "Pet Adoption App";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  // On mount, check localStorage for dark mode preference
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add("dark");
      }
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

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-white text-lg font-semibold">{APP_NAME}</div>
          {/* Dark mode button beside app name */}
          <button
            onClick={toggleDarkMode}
            className="ml-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600 text-yellow-300 dark:text-gray-200 transition"
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
            className="sm:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Navigation links */}
        <ul className={`flex-col sm:flex-row sm:flex space-y-2 sm:space-y-0 sm:space-x-4 absolute sm:static bg-gray-800 left-0 w-full sm:w-auto top-16 sm:top-auto transition-all duration-200 ${
          menuOpen ? "flex" : "hidden"
        } sm:flex`}>
          <li>
            <Link
              href="/"
              className={`block px-4 py-2 ${
                isActive("/") ? "text-orange-400 font-bold underline" : "text-gray-300"
              } hover:text-white`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/pages/about"
              className={`block px-4 py-2 ${
                isActive("/pages/about") ? "text-orange-400 font-bold underline" : "text-gray-300"
              } hover:text-white`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/pages/contact"
              className={`block px-4 py-2 ${
                isActive("/pages/contact") ? "text-orange-400 font-bold underline" : "text-gray-300"
              } hover:text-white`}
            >
              Contact
            </Link>
          </li>
          {pathname !== "/main/login" && (
            <li>
              <Link
                href="/main/login"
                className={`block px-4 py-2 ${
                  isActive("/main/login") ? "text-orange-400 font-bold underline" : "text-gray-300"
                } hover:text-white`}
              >
                Login
              </Link>
            </li>
          )}
          {pathname !== "/main/register" && (
            <li>
              <Link
                href="/main/register"
                className={`block px-4 py-2 ${
                  isActive("/main/register") ? "text-orange-400 font-bold underline" : "text-gray-300"
                } hover:text-white`}
              >
                Register
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}