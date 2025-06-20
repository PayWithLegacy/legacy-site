"use client";

import ContactForm from "./ContactForm";
import BulletPoint from "./BulletPoint";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue/85 overflow-hidden">
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
              payment processing platform. We specialize in merchant boarding
              with streamlined underwriting processes, helping businesses get
              approved for both high-risk and low-risk payment processing
              solutions.
            </p>

            {/* Bullet points */}
            <div className="hidden lg:block mx-auto max-w-lg lg:max-w-none">
              <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-3 justify-items-start">
                <BulletPoint text="24/7 Customer Support" />
                <BulletPoint text="Fast Approvals" />
                <BulletPoint text="High-Risk & Low-Risk Solutions" />
                <BulletPoint text="Streamlined Underwriting" />
              </div>
            </div>
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
