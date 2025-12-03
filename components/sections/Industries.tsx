"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function Industries() {
  return (
    <section id="industries" className="py-20 bg-[#2b92cd1c] mt-12">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Top Labels */}
        <button className="inline-block text-[18px] font-medium border px-6 py-3 rounded-full mb-4 text-[#696969] border-[#D2B25399] bg-[#D2B25317]">
          How We Work?
        </button>

        <h2 className="text-[32px] lg:text-3xl font-bold text-[#DA2626] mb-2">
          4 Reliable Steps To Secure A Stable High-Risk Merchant Account
        </h2>
        <p className="text-[#696969E5]  mb-10 font-semibold">
          Rest assured, even if you&apos;ve been turned down by every financial
          institution, placed on the MATCH LIST, or faced rejection from other
          payment processors across the board, we&apos;re here to support you!
        </p>

        {/* Flex Container */}
        <div className="grid lg:grid-cols-2 gap-2 items-start">
          {/* Left Image + Box */}
          <div className="flex flex-col gap-2">
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/industries1.png" // Replace with actual image
                alt="Step Illustration"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="bg-[#00234D] text-white p-6 rounded-lg shadow-md">
              <p className="font-semibold text-[24px]">
                Skip The Endless Paperwork And Get Approved In 24-48 Hours With
                Our Specialized High-Risk Underwriting Team That Understands
                Your Business.
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#D2B253] to-[#D2B253B2] text-white px-6 py-5 justify-center text-[24px] text-center rounded-full text-[24px] font-semibold hover:bg-yellow-500 w-fit flex items-center justify-between gap-2 w-full">
              <a
                href="#signupform"
                className="flex items-center justify-between w-full"
              >
                GET LIGHTNING FAST APPROVAL
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
          </div>

          {/* Right Steps */}
          <div className="grid grid-cols-2 gap-6">
            {/* Step 1 */}
            <div className="col-span-2 bg-[#DA26260F] p-6 rounded-lg border border-[#FFDADA]">
              <h3 className="text-[#E35C5C] font-bold text-[71px] opacity-10">
                01
              </h3>
              <h4 className="font-semibold mb-1 text-[#182E56] text-[24px]">
                Submit Your Application (2–5 Minutes)
              </h4>
              <p className="text-[18px] text-[#696969E5] font-normal">
                Complete our streamlined application designed specifically for
                high-risk merchants. No lengthy paperwork, confusing forms, or
                unnecessary delays.
              </p>
            </div>

            {/* Step 2 */}
            <div className="shadow p-3 rounded-sm">
              <h3 className="text-[#E35C5C] font-bold text-[71px] opacity-10">
                02
              </h3>
              <h4 className="font-semibold mb-1 text-[#182E56] text-[24px]">
                24 Hour Underwriting Review
              </h4>
              <p className="text-[18px] text-[#696969E5] font-normal">
                Our high-risk specialists review your application with deep
                industry expertise. We understand your business challenges and
                work to approve, never decline.
              </p>
            </div>

            {/* Step 3 */}
            <div className="shadow p-3 rounded-sm">
              <h3 className="text-[#E35C5C] font-bold text-[71px] opacity-10">
                03
              </h3>
              <h4 className="font-semibold mb-1 text-[#182E56] text-[24px]">
                Account Setup & Integration
              </h4>
              <p className="text-[18px] text-[#696969E5] font-normal">
                Once approved, our technical team sets up your merchant account
                and integrates with your existing systems. Full white-glove
                support throughout the entire process.
              </p>
            </div>

            {/* Step 4 */}
            <div className="col-span-2 shadow p-3 rounded-sm ">
              <h3 className="text-[#E35C5C] font-bold text-[71px] opacity-10">
                04
              </h3>
              <h4 className="font-semibold mb-1 text-[#182E56] text-[24px]">
                Start Processing Payments
              </h4>
              <p className="text-[18px] text-[#696969E5] font-normal">
                Begin accepting payments immediately with 24/7 support,
                real-time reporting, and ongoing account management from our
                dedicated high-risk team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
