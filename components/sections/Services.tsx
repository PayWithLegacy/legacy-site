"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Headphones, AlertTriangle } from "lucide-react";

export function Services() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Fast, Flexible Merchant Accounts",
      description:
        "We specialize in placing hard-to-approve merchants. Whether you're in CBD, adult, supplements, or travel — we&apos;ll get you processing fast with custom-fit solutions and no games.",
    },
    {
      icon: Headphones,
      title: "24/7 U.S.-Based Support",
      description:
        "Our expert support team is here for you day or night — no offshore scripts, no endless hold times. Just real people solving real problems fast.",
    },
    {
      icon: AlertTriangle,
      title: "Chargeback & Risk Management",
      description:
        "We help you stay compliant and protect your business with proactive tools to reduce fraud and chargebacks — before they become a problem.",
    },
  ];

  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <span className="inline-block text-[18px] font-medium border px-6 py-3 rounded-full mb-4 text-[#696969] border-[#D2B25399] bg-[#D2B25317]">
            What We Do?
          </span>

          <h2 className="text-[28px]  font-bold text-[#DA2626] mb-8">
            Real Approvals. Real Support. No Games.
          </h2>

          <div className="p-4 shadow-sm">
            <div className="space-y-6">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 border-b border-[#eee] pb-4"
                >
                  <div className="bg-red-50 text-red-600 rounded-full p-2">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[22px] text-[#DA2626]">
                      {item.title}
                    </h3>
                    <p className="text-[16px] text-[#696969E5] font-semibold">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center flex justify-center items-center">
            <Button
              className="mt-8 bg-[#DA2626] text-[17px] text-[#fff] font-semibold px-8 py-8 rounded-full flex gap-5 justify-center items-center"
              size="lg"
            >
              <a
                href="#signupform"
                className="flex justify-center items-center gap-2"
              >
                Get Approved Now{" "}
                <span>
                  <Image
                    src="/rightarrow.svg" // Replace with actual logo path
                    alt="Legacy Payments Logo"
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                </span>
              </a>{" "}
            </Button>
          </div>
        </div>

        {/* Right Images */}
        <div className="flex flex-col space-y-6">
          <div className="rounded-2xl overflow-hidden border-8 border-[#0e2a47]">
            <Image
              src="/realsupport1.png"
              alt="Payment system"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border-8 border-[#0e2a47]">
            <Image
              src="/realsupport2.png"
              alt="Support team"
              width={600}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
