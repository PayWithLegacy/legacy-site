"use client";

import ContactForm from "./ContactForm";

export default function Hero() {
  return (
    <div className="relative bg-brand-blue overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Payments Made{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white">
                Simple
              </span>
            </h1>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              Transform your business with our secure, fast, and reliable
              payment processing platform. Accept payments globally, manage
              transactions effortlessly, and scale with confidence.
            </p>
          </div>

          {/* Right side - Form */}
          <div className="relative">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
