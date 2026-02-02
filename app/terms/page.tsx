import React from "react";

export default function TermsOfService() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-[#0B1F3A]">Terms of Service</h1>
            <p className="mb-4 text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">2. Services Description</h2>
                    <p>
                        PayWithLegacy provides merchant account services and payment processing solutions, specifically tailored for high-risk industries. We connect merchants with banking partners willing to accept their business type.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">3. User Responsibilities</h2>
                    <p>
                        You agree to use the site only for lawful purposes. You agree not to take any action that might compromise the security of the site, render the site inaccessible to others, or otherwise cause damage to the site or the content.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">4. Disclaimer of Warranties</h2>
                    <p>
                        The site and its original content, features, and functionality are owned by PayWithLegacy and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">5. Limitation of Liability</h2>
                    <p>
                        In no event shall PayWithLegacy, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">6. Governing Law</h2>
                    <p>
                        These Grants shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">7. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us at: <a href="mailto:Support@Paywithlegacy.com" className="text-blue-600 hover:underline">Support@Paywithlegacy.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
