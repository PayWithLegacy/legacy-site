"use client";

import { useState } from "react";

type LeadBody = {
  legal_name: string;
  dba_name: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
};

export default function ContactForm() {
  const [legalName, setLegalName] = useState("");
  const [dbaName, setDbaName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const leadData: LeadBody = {
        legal_name: legalName,
        dba_name: dbaName,
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
      };

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(leadData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit lead");
      }

      setIsSubmitted(true);
      // Reset form
      setLegalName("");
      setDbaName("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError("Failed to submit form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Start Processing Today
        </h2>
        <p className="text-gray-600 mt-2">Get your account set up in minutes</p>
      </div>

      {isSubmitted ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Thank you!
          </h3>
          <p className="text-gray-600">
            We'll be in touch within 24 hours to get you started.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <div>
            <label
              htmlFor="legalName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Company Legal Name *
            </label>
            <input
              type="text"
              id="legalName"
              value={legalName}
              onChange={(e) => setLegalName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172D55] focus:border-transparent transition-colors"
              placeholder="Your Company Inc."
            />
          </div>

          <div>
            <label
              htmlFor="dbaName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              DBA Name (if different)
            </label>
            <input
              type="text"
              id="dbaName"
              value={dbaName}
              onChange={(e) => setDbaName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172D55] focus:border-transparent transition-colors"
              placeholder="Doing Business As Name"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172D55] focus:border-transparent transition-colors"
                placeholder="John"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172D55] focus:border-transparent transition-colors"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Business Email *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172D55] focus:border-transparent transition-colors"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#172D55] focus:border-transparent transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#172D55] to-[#172D55] text-white py-3 px-6 rounded-lg font-semibold hover:from-[#172D55]/90 hover:to-[#172D55]/90 focus:outline-none focus:ring-2 focus:ring-[#172D55] focus:ring-offset-2 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? "Submitting..." : "Get Started Free"}
          </button>
        </form>
      )}
    </div>
  );
}
