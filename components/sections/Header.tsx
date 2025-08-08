"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="absolute w-[96%] bg-white z-50 top-5 rounded-full  mx-auto max-w-[1200px] left-[50%] -translate-x-[50%] main-header">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`padding-hide flex items-center justify-between rounded-full  px-6 py-4 sm:px-2 transition-all duration-300 ${
            isScrolled ? "backdrop-blur-md" : ""
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/Logo.svg" // Replace with actual logo path
              alt="Legacy Payments Logo"
              width={230}
              height={80}
              className="object-contain"
            />
          
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-black hover:text-[#c23a3a] transition"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Button className="rounded-full bg-gradient-to-r from-[#D2B253] to-[#D2B253B2] text-white text-sm px-10 py-6 font-semibold">
              Get In Touch
            </Button>
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="mt-2 md:hidden bg-white rounded-lg shadow-md py-4 px-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-gray-700 hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full rounded-full bg-yellow-500 hover:bg-yellow-400 text-white text-sm font-semibold">
              <a href="#signupform">Get In Touch</a>
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
}
