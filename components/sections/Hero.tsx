"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";
import { LeadForm } from "./LeadForm";

export function Hero() {
  return (
    <section className="relative bg-[#0e2a47] text-white pt-24 pt-16 overflow-hidden ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 mt-18 pt-[70px] banner-stripe">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          {/* <span className="text-sm  px-5 py-3 rounded-full font-normal w-fit mb-4 text-[#D2B253] border border-[#ffffff59]">
            Merchant Services
          </span> */}
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4 py-5">
            Your Business Is <br />
            Almost <span className="text-[#D4AF37]"> Approved</span>
          </h1>

          <p className="text-[22px] text-white/90 mb-6 max-w-lg leading-10 banner-sub">
            We&apos;ll get you processing – guaranteed or no fees. Same day
            approvals. Our dedicated team provides personalized support,
            ensuring your processing runs smoothly and efficiently.
          </p>

          <Button className="bg-gradient-to-r from-[#D2B253] to-[#D2B253B2] text-[#fff]  text-sm font-semibold px-10 py-6 rounded-full w-fit">
            Get Instant Pre-Approved
          </Button>

          <div className="mt-6 flex items-center space-x-3 flex-wrap pb-[50px]">
            {/* Stars */}

            <span className="text-sm flex gap-5 mt-5 marginb">
              <div className="flex gap-[2px]  items-center ">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#F9B233" stroke="#F9B233" />
                ))}
                <span className="ms-1">(5)</span>
              </div>{" "}
              <span className="text-[18px] font-normal">
                Positive Reviews From
                <br /> Our Merchants
              </span>
            </span>
            <div className="flex border-l border-[#eeeeee28] pl-5">
              <Image
                src="user-img.png"
                alt="App Preview"
                width={150}
                height={50}
                className=" drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative flex items-end">
          <div className="flex items-center justify-center">
            <Image
              src="/mobilehero.png"
              alt="App Preview"
              width="700"
              height={700}
              className="mobilehero-img"
              // className="rotate-[15deg] drop-shadow-2xl"
            />
          </div>
          <div className="absolute right-3 bottom-[0px]">
            <Image
              src="/paymentmethod.png"
              alt="App Preview"
              width={450}
              height={600}
            />
          </div>
          <div className="absolute top-[15%] left-[-25px] banner_checks">
            <div className="flex items-center space-x-2">
              <Image
                src="red-icon.svg"
                alt="App Preview"
                width={15}
                height={15}
              />
              <span className="font-semibold">100% Approval Potential</span>
            </div>
            <div className="flex items-center space-x-2 mt-3">
              <Image
                src="red-icon.svg"
                alt="App Preview"
                width={15}
                height={15}
              />
              <span className="font-semibold leading-0">
                {" "}
                Merchant Accounts for
                <br /> Any Business
              </span>
            </div>
          </div>

          <div className="absolute top-[1%] -right-[-150px]">
            <div className="flex items-center space-x-2">
              <Image
                src="banner-star.svg"
                alt="App Preview"
                width={50}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <LeadForm />
    </section>
  );
}
