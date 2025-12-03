"use client";
import { useState } from "react";
import { CheckCircle, Plus, X } from "lucide-react";
import Image from "next/image";

const faqs = [
  {
    question:
      "What Industries Do You Specialize In For High-Risk Merchant Processing?",
    answer:
      "Epos Payment specializes in merchants in industries like Traditional Processors often decline, including CBD and Hemp Merchants, Adult Entertainment, Travel and Ticketing, Dating Platforms, High-Ticket Coaches, E-commerce Stores, and more.",
  },
  {
    question:
      "How Fast Can I Get Approved If I&apos;ve Been Declined By Other Processors?",
    answer:
      "We approve 89% of previously declined merchants within 24–48 hours.",
  },
  {
    question: "Do You Serve Low/Medium Risk Merchants As Well?",
    answer:
      "Yes. We proudly serve a wide range of low/medium risk merchants and guarantee the most competitive, cost-effective rates tailored to your industry.",
  },
  {
    question:
      "What Happens If My Current Processor Shuts Down My Account - Can You Help Immediately?",
    answer:
      "Yes! We offer emergency processing for merchants facing sudden account closures. Our emergency approval process can have you processing again within 24 hours!",
  },
  {
    question: "What Support Can I Expect As A High-Risk Merchant",
    answer:
      "You&apos;ll receive 24/7 dedicated support, chargeback management tools, and guidance to maintain compliance, ensuring your business operates smoothly and securely.",
  },
];

export function FrequentlyAdd() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-white px-4 container mx-auto my-20">
      <h2 className="text-2xl font-semibold text-[#DA2626] mb-8">
        Frequently Asked Questions
      </h2>

      <div className="flex gap-10 phone-wrap">
        {/* Left Side */}
        <div className="space-y-6 w-2/5 width-100">
          <Image
            src="faqcard1.png" // replace with actual path
            alt="Credit card"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full"
          />
          <div className="space-y-4">
            <div className="bg-red-600 text-white p-4 rounded-lg ">
              <div className="flex gap-10 items-center">
                <div className="contact-icon">
                  <Image
                    src="call-icon.svg" // replace with actual path
                    alt="contact-icom"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-bold text-[20px]">Call Us Now!</p>
                  <p className="text-lg">
                    <a href="tel:1-904-686-6960">1-904-686-6960</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-green-500 text-white p-4 rounded-lg ">
              <div className="flex gap-10 items-center">
                <div className="contact-icon">
                  <Image
                    src="whatsapp-icon.svg" // replace with actual path
                    alt="contact-icom"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-bold  text-[20px]">Whatsapp</p>
                  <p className="text-lg">
                    <a href="https://wa.me/19046866960" target="_blank">
                      1 904 686 6960
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-900 text-white p-4 rounded-lg ">
              <div className="flex gap-10 items-center">
                <div className="contact-icon">
                  <Image
                    src="live-chat.svg" // replace with actual path
                    alt="contact-icom"
                    width={40}
                    height={40}
                  />
                </div>
                <div>
                  <p className="font-bold  text-[20px]">Email Us</p>
                  <p className="text-lg">
                    <a
                      href="mailto:Support@Paywithlegacy.com"
                      className="text-[#fff]"
                    >
                      Support@Paywithlegacy.com
                    </a>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-4 w-3/5 width-100">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg p-8 shadow-sm transition duration-200"
            >
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="font-semibold text-sm md:text-base text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <X className="text-orange-500 w-5 h-5" />
                ) : (
                  <Plus className="text-orange-500 w-5 h-5" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-sm mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
