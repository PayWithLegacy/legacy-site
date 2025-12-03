"use client";
import Image from "next/image";
import {
  DollarSign,
  HeartPulse,
  Plane,
  Bitcoin,
  CreditCard,
  Gamepad2,
  ShieldAlert,
} from "lucide-react";

export function Statistics() {
  const industries = [
    {
      title: "Nutraceuticals",
      icon: <HeartPulse size={24} className="   " />,
      image: "/pharma.png",
    },
    {
      title: "Gambling",
      icon: <Gamepad2 size={24} className="" />,
      image: "/gambling.png",
    },
    {
      title: "Firearms",
      icon: <ShieldAlert size={24} className="" />,
      image: "/firearm.png",
    },
    {
      title: "Travel",
      icon: <Plane size={24} className="" />,
      image: "/travel.png",
    },
    {
      title: "Crypto",
      icon: <Bitcoin size={24} className="" />,
      image: "/crypto.png",
    },
    {
      title: "High Tickets",
      icon: <CreditCard size={24} className="" />,
      image: "/ticket.png",
    },
  ];

  return (
    <section id="statistics" className="text-center ">
      <div className="container mx-auto px-4 lg:px-10 mt-12">
        <button className="inline-block text-[18px] font-medium border px-6 py-3  rounded-full mb-4 text-[#696969] border-[#D2B25399] bg-[#D2B25317]">
          Classified As High Risk?
        </button>

        <h2 className="text-2xl lg:text-3xl font-bold text-[#DA2626] mb-4">
          Expert Solutions For High-Risk Industries
        </h2>

        <p className="text-[#696969E5] max-w-3xl mx-auto mb-6 font-semibold">
          We understand the unique challenges of high-risk businesses and
          provide specialized processing solutions for industries that
          traditional processors won&apos;t touch.
        </p>

        <button className="bg-[#DA2626] text-white pl-8 py-1 pe-2 rounded-full font-semibold text-sm hover:bg-red-600 transition inline-flex items-center gap-2 mb-12">
          <a
            href="#signupform"
            className="flex justify-between items-center gap-3"
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
          </a>
        </button>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="relative group rounded-lg shadow-lg mb-10"
            >
              <Image
                src={industry.image}
                alt={industry.title}
                width={400}
                height={500}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-300 rounded-sm"
              />
              <div className="absolute -bottom-10 left-[8.5%] w-5/6 bg-[#00234D] bg-opacity-90 px-4 py-10 flex justify-between items-center rounded-sm">
                <div className="flex items-center gap-2 text-white font-semibold">
                  <div className="text-[#FF0000] w-12 h-12 flex items-center justify-center bg-white rounded-full">
                    {industry.icon}
                  </div>
                  {industry.title}
                </div>
                <span className="bg-[#B60522] text-white text-[10px] font-semibold px-2 py-[2px] rounded-full">
                  High Risk Industry
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
