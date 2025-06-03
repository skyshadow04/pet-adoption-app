"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export const APP_NAME = "Pet Adoption App";

export default function NavigationBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check if the current path matches the link
  const isActive = (href: string) => pathname === href;

  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">{APP_NAME}</div>
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