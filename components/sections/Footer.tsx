"use client";

import { Shield } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-[#0B1F3A] text-white text-sm">
      {/* Top Banner */}
      <div className="bg-[#C72127] px-6 py-10 text-center text-white w-[70%] rounded relative top-[-35px] mx-auto width-100">
        <h2 className="text-xl sm:text-2xl font-bold mb-2">
          Let Us Show You Why Over 1,000+ Merchants Trust Legacy Payments
        </h2>
        <p className="mb-4 text-sm sm:text-base">
          Join the growing network of satisfied business owners who rely on our
          secure, transparent, and tailored payment solutions.
        </p>
        <div className="flex justify-center gap-6 flex-wrap text-sm mb-4">
          <div className="flex items-center gap-1">
            <span className="text-[#172D55] text-lg"> <Image
              src="blue-check.svg"
              alt="App Preview"
              width={20}
              height={20}
              className=""
            /></span>
            Transparent Pricing & No Hidden Fees
          </div>
          <div className="flex items-center gap-1">
            <span className="text-[#172D55] text-lg"> <Image
              src="blue-check.svg"
              alt="App Preview"
              width={20}
              height={20}
              className=""
            /></span>
            Dedicated U.S.-Based Support
          </div>
        </div>
        <button className="bg-[#D2B253] text-white px-10 py-5 rounded-full font-semibold shadow inline-flex items-center gap-2">
          Build Your Legacy
          <span className="text-white">→</span>
        </button>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src="/footer-logo.png"
            alt="Legacy Payments"
            className="object-contain footer-img"
          />
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-[#F7A600] mb-4 text-[18px]">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About Us</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>
            <li>
              <Link href="/#industries">Industries</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </div>

        {/* Other Links */}
        <div>
          <h4 className="font-bold text-[#F7A600] mb-4 text-[18px]">Other Links</h4>
          <ul className="space-y-3">
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms And Conditions</Link>
            </li>
            <li>
              <Link href="/refund-policy">Refund Policy</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-bold text-[#F7A600] mb-4 text-[18px] ">Contact Us At</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:Support@Paywithlegacy.com"
                className="text-[#F7A600]"
              >
                Support@Paywithlegacy.com
              </a>
            </li>
            <li><a href="tel:19046866960">1 904 686 6960</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#C72127] text-center text-sm py-3">
        Copyright © 2025. All rights reserved.
      </div>
    </footer>
  );
}
