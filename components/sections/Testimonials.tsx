"use client";

import Image from "next/image";
import { Star, ArrowBigRight, ArrowBigLeft } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, GreenLeaf CBD Solutions",
      text: "After being declined by 6 different processors, Legacy Payments approved us in 24 hours. Their team truly understands the CBD industry and provides outstanding technical support when we need it most.",
      image: "/test1.png",
    },
    {
      name: "Mike Rodriguez",
      role: "Founder, Elite Gaming Platform",
      text: "Hands down the best high-risk processor in the industry. Competitive rates, lightning-fast approvals, and they actually understand our complex business model. Couldn’t recommend them more highly!",
      image: "/test1.png",
    },
    {
      name: "Tom Johnson",
      role: "Director, Global Travel Solutions",
      text: "Professional white-glove service from day one. They handled our complex international transactions seamlessly and their advanced fraud protection suite is absolutely top-notch in the industry.",
      image: "/test1.png",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* Top Label */}
        <button className="inline-block text-xs font-medium border px-3 py-2 rounded-full mb-4 text-[#696969] border-[#D2B25399] bg-[#D2B25317]">
          Testimonials
        </button>

        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl font-bold text-[#DA2626] mb-12">
          What Our Clients Say!
        </h2>

        {/* Testimonials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-[#DA26260F]  p-6 rounded-xl text-left flex flex-col justify-between shadow-sm"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-sm text-[#182E56CC]">{t.name}</h4>
                  <p className="text-[13px] text-[#D4AF37] font-medium">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-[#696969E5] text-[18px] font-semibold mb-4 opacity-90">{`"${t.text}"`}</p>

              {/* Stars */}
              <div className="flex gap-[2px] justify-end">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#F9B233" stroke="#F9B233" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3">
          <button className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
            {/* <span className="w-1.5 h-1.5 bg-gray-700 rounded-full" /> */}
            <ArrowBigRight />
          </button>
          <button className="w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center">
            <ArrowBigLeft />
          </button>
        </div>
      </div>
    </section>
  );
}
