"use client";

import { useState } from "react";
import { User, Phone, Mail, Globe } from "lucide-react";

export function LeadForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    website: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        console.error("Failed to submit form");
        alert("There was an error submitting your form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="text-white p-6 md:p-10 shadow-md mt-0 banner-form"
        id="signupform"
      >
        <div className="container mx-auto">
          <div className="text-center py-8">
            <h2 className="text-4xl font-semibold mb-4">
              Thanks for your submission!
            </h2>
            <p className="text-xl">We will be in contact shortly!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="text-white p-6 md:p-10 shadow-md mt-0 banner-form"
      id="signupform"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="w-full width-100">
            <h2 className="text-5xl font-semibold mb-2">Sign Up Now</h2>
            <p className="mb-4">No Setup Fees!</p>
          </div>
          <div className="ms-0 w-full width-100">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                  <User className="w-4 h-4 mr-2" />
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                  <User className="w-4 h-4 mr-2" />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                  <Phone className="w-4 h-4 mr-2" />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                  <Mail className="w-4 h-4 mr-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full outline-none"
                  />
                </div>
                <div className="flex items-center bg-white rounded px-3 py-2 text-black">
                  <Globe className="w-4 h-4 mr-2" />
                  <input
                    type="url"
                    name="website"
                    placeholder="Website"
                    value={formData.website}
                    onChange={handleChange}
                    required
                    className="w-full outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#f89f42] text-white font-semibold rounded px-4 py-2 hover:bg-[#e18b2f] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Get my Merchant Account"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <p className="mt-4 text-[18px] italic text-white text-center">
          <strong>Privacy Information:</strong> Your contact information will
          not be used for anything except contacting you regarding the question
          or comment you have.
        </p>
      </div>
    </div>
  );
}
