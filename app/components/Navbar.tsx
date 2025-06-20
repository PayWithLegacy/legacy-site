"use client";
import Logo from "../components/Logos/HorizintalLogo";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 py-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="h-12">
                <Logo />
              </div>
            </Link>
          </div>

          {/* Navigation Links and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* <Link
              href="/services"
              className="text-gray-600 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Services
            </Link> */}
            <Link
              href="/about"
              className="text-gray-600 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-brand-red px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors ml-4"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-blue"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
            {/* <Link
              href="/services"
              className="text-gray-600 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link> */}
            <Link
              href="/about"
              className="text-gray-600 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-brand-blue block px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/get-started"
              className="bg-brand-blue hover:bg-brand-blue/90 text-white block px-3 py-2 rounded-md text-base font-medium mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
