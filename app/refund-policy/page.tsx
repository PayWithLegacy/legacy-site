import React from "react";

export default function RefundPolicy() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h1 className="text-4xl font-bold mb-8 text-[#0B1F3A]">Refund Policy</h1>
            <p className="mb-4 text-gray-600">Last Updated: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-gray-700">
                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">1. Overview</h2>
                    <p>
                        PayWithLegacy is committed to ensuring satisfaction with our merchant account services. This Refund Policy outlines the circumstances under which refunds may be issued and the process for requesting a refund.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">2. Setup Fees</h2>
                    <p>
                        We do not charge setup fees. There are no upfront costs associated with opening a merchant account with PayWithLegacy.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">3. Monthly Service Fees</h2>
                    <p>
                        Monthly service fees are non-refundable once the billing period has commenced. If you wish to cancel your account, you must do so before the start of the next billing cycle to avoid being charged for that period.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">4. Transaction Fees</h2>
                    <p>
                        Transaction fees are charged for each processed transaction and are non-refundable. These fees are earned at the time of transaction processing.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">5. Requesting a Refund</h2>
                    <p>
                        If you believe you are entitled to a refund under any exceptional circumstances, please contact our support team at <a href="mailto:Support@Paywithlegacy.com" className="text-blue-600 hover:underline">Support@Paywithlegacy.com</a>. All refund requests will be reviewed on a case-by-case basis.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">6. Chargebacks</h2>
                    <p>
                        Chargebacks initiated by your customers are handled separately from this refund policy. Please refer to your merchant agreement for details on chargeback procedures and associated fees.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-semibold mb-3 text-[#DA2626]">7. Contact Us</h2>
                    <p>
                        For any questions regarding this refund policy, please contact us at: <a href="mailto:Support@Paywithlegacy.com" className="text-blue-600 hover:underline">Support@Paywithlegacy.com</a>
                    </p>
                </section>
            </div>
        </div>
    );
}
