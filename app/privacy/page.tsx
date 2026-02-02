import React from "react";

export default function PrivacyPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-[#0B1F3A]">Privacy Policy</h1>
            <p className="mb-4 text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">1. Introduction</h2>
                    <p>
                        PayWithLegacy ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit the website www.paywithlegacy.com (our "Website") and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">2. Information We Collect</h2>
                    <p>
                        We collect information identifying you, such as name, email address, phone number, and business details ("Personal Information"), when you fill out forms on our Website.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">3. How We Use Your Information</h2>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>To provide you with information, products, or services that you request from us.</li>
                        <li>To fulfill any other purpose for which you provide it.</li>
                        <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">4. Disclosure of Your Information</h2>
                    <p>
                        We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">5. Data Security</h2>
                    <p>
                        We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">6. Contact Information</h2>
                    <p>
                        To ask questions or comment about this privacy policy and our privacy practices, contact us at: <a href="mailto:Support@Paywithlegacy.com" className="text-blue-600 hover:underline">Support@Paywithlegacy.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
