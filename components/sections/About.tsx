"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, Zap, Headphones } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 bg-[#2b92cd1c] text-[#1E1E1E] mb-12">
      <div className="container mx-auto px-4 lg:px-10">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <Image
              src="/about1.png" // Replace with your image path
              alt="Payment Illustration"
              width={600}
              height={400}
              className="rounded-lg"
            />
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 ">
            <div className="text-center">
              <button className="inline-block text-[18px] font-medium border px-6 py-3 rounded-full mb-4 text-[#696969] border-[#D2B25399] bg-[#D2B25317]">
                Who We Are
              </button>
            </div>
            <h2 className="text-2xl lg:text-3xl font-semibold text-[#DA2626] mb-4">
              Why Make Us Different From Others?
            </h2>
            <p className="text-[16px] text-[#696969E5] mb-6 font-semibold leading-9">
              We specialize in high-risk industries, offering secure, fast, and
              tailored payment processing solutions. Our expertise ensures every
              transaction is approved, making us the final solution for
              high-risk businesses. With advanced technology and dedicated
              support, we simplify payment processing like no other.
            </p>
            <Button className="get-btn bg-gradient-to-r from-[#D2B253] to-[#D2B253B2] text-white text-[32px] px-6 py-10 rounded-full  hover:bg-[#D2B253] transition gap-2 font-semibold w-full">
              <a
                href="#signupform"
                className=" flex items-center justify-between w-full"
              >
                <span>
                  <Image
                    src="/star.svg" // Replace with actual logo path
                    alt="Legacy Payments Logo"
                    width={30}
                    height={30}
                    className="object-contain"
                  />
                </span>
                Get Specialized Processing{" "}
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
            </Button>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-[32px] font-semibold flex items-center text-[#DA2626] mb-4 justify-center">
              <span className="mr-2">
                <span>
                  <Image
                    src="/red-star.svg" // Replace with actual logo path
                    alt="Legacy Payments Logo"
                    width={35}
                    height={35}
                    className="object-contain"
                  />
                </span>
              </span>{" "}
              Our Mission
            </h3>
            <p className="text-[#696969E5] text-base leading-8">
              Our mission is to empower high-risk industries with reliable
              payment solutions, guaranteeing approval for every transaction. We
              prioritize security and exceptional service to be your ultimate
              partner in success.
            </p>
          </div>

          <div>
            <h3 className="text-[32px] font-semibold text-[#DA2626] mb-4 text-center">
              What We Provide For You.
            </h3>
            <ul className="grid grid-cols-2 gap-y-5 text-sm text-gray-700">
              <li className="flex items-center gap-2 text-[#696969E5] text-[17px] font-semibold">
                <CheckCircle className="text-[#B60522]" size={18} />
                Guaranteed Transaction Approvals
              </li>
              <li className="flex items-center gap-2 text-[#696969E5] text-[17px] font-semibold">
                <Shield className="text-[#B60522]" size={18} />
                Secure Payment Gateway
              </li>
              <li className="flex items-center gap-2 text-[#696969E5] text-[17px] font-semibold">
                <Zap className="text-[#B60522]" size={18} />
                Specialized High-Risk Support
              </li>
              <li className="flex items-center gap-2 text-[#696969E5] text-[17px] font-semibold">
                <Headphones className="text-[#B60522]" size={18} />
                24/7 Expert Assistance
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-[#DA26260F] p-8 rounded-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="border-t-[5px] border-[#DA2626]">
            <h4 className="text-[71px] font-bold text-[#182E56CC]">
              28<span className="text-[#DA2626]">+</span>
            </h4>
            <p className="text-[18px] mt-2 text-[#696969E5] font-bold">
              Years of Industry Expertise
            </p>
            <p className="text-[16px] text-[#696969E5] mt-1">
              Decades of hands-on experience navigating complex, high-risk
              payment landscapes.
            </p>
          </div>
          <div className="border-t-[5px] border-[#DA2626]">
            <h4 className="text-[71px] font-bold text-[#182E56CC]">
              250M<span className="text-[#DA2626]">+</span>
            </h4>
            <p className="text-[18px] mt-2 text-[#696969E5] font-bold">
              Revenue Processed For Merchants
            </p>
            <p className="text-[16px] text-[#696969E5] mt-1">
              From blocked to blacklisted, we&apos;ve helped clients move over
              $250 million in processed volume.
            </p>
          </div>
          <div className="border-t-[5px] border-[#DA2626]">
            <h4 className="text-[71px] font-bold text-[#182E56CC]">
              98 <span className="text-[#DA2626] text-[51px]">%</span>
            </h4>
            <p className="text-[18px] mt-2 text-[#696969E5] font-bold">
              Client Retention Rate
            </p>
            <p className="text-[16px] text-[#696969E5] mt-1">
              Merchants who came to us after being rejected elsewhere stay—and
              grow—with us.
            </p>
          </div>
          <div className="border-t-[5px] border-[#DA2626]">
            <h4 className="text-[71px] font-bold text-[#182E56CC]">
              52<span className="text-[#DA2626]">+</span>
            </h4>
            <p className="text-[18px] mt-2 text-[#696969E5] font-bold">
              Integrations & Tools
            </p>
            <p className="text-[16px] text-[#696969E5] mt-1">
              Robust API, CRM, POS, and eCommerce integrations to streamline
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
