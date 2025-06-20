export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-brand-blue px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              Privacy Policy
            </h1>
            <p className="text-blue-100 text-center mt-2">
              Last updated: June 20, 2025
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-8 prose prose-lg max-w-none">
            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <p className="text-gray-700 leading-relaxed">
                  At Legacy Payments, we understand that your business
                  information is valuable and deserves the highest level of
                  protection. This Privacy Policy outlines how we collect, use,
                  safeguard, and share your nonpublic personal information in
                  the course of providing our payment processing services. We
                  are committed to transparency in our data practices and
                  maintaining the trust you place in us.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Information We Collect and How We Use It
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information only when you choose to provide it to
                  us. This includes data you share directly through our website,
                  transaction information we process on your behalf, and
                  information we obtain from trusted third-party sources such as
                  consumer reporting agencies and government entities.
                </p>
                <p className="text-gray-700 mb-4">
                  When you interact with our website, you provide us with
                  essential business information including your identity,
                  contact details, business description, and sales volume.
                  Additionally, your device automatically shares technical
                  information such as IP addresses, which helps us optimize our
                  services for your specific needs. We also collect financial
                  information necessary to ensure your sales proceeds are
                  deposited into the correct account. While we recognize the
                  sensitive nature of this information, it is essential for
                  providing you with our services.
                </p>
                <p className="text-gray-700 mb-4">
                  We utilize your information exclusively for the following
                  purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Providing information about our services and responding to
                    your inquiries
                  </li>
                  <li>
                    Processing and facilitating transactions between you and
                    your customers
                  </li>
                  <li>
                    Delivering exceptional customer support and technical
                    assistance
                  </li>
                  <li>
                    Monitoring account activity to detect and prevent fraudulent
                    transactions
                  </li>
                  <li>
                    Ensuring compliance with applicable laws and payment network
                    regulations
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">
                  We may also communicate with you regarding these services and
                  occasionally share relevant marketing information. You have
                  the right to opt out of marketing communications at any time
                  using the methods described below.
                </p>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Share Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is our priority. We do not share your business
                  information with third parties unless you explicitly authorize
                  us to do so, except in the specific circumstances outlined
                  below.
                </p>
                <p className="text-gray-700 mb-4">
                  As a financial services provider, we must share certain
                  information to conduct our daily operations effectively. This
                  includes sharing data with trusted partners for transaction
                  processing, account maintenance, fraud prevention, and
                  compliance with legal requirements. We work with carefully
                  selected financial institutions, payment networks, and service
                  providers who assist us in processing your transactions and
                  maintaining your account.
                </p>
                <p className="text-gray-700">
                  In the event of a business transfer, merger, or acquisition,
                  your information may be transferred as part of our business
                  assets. In such cases, we ensure that the receiving party
                  maintains the same level of privacy protection and
                  confidentiality standards.
                </p>
              </section>

              {/* Data Protection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  How We Protect Your Information
                </h2>
                <p className="text-gray-700">
                  We implement industry-leading security measures to protect
                  your sensitive information from unauthorized access, loss, or
                  misuse. Your data is stored on our secure internal network,
                  accessible only through unique user credentials and robust
                  authentication protocols. While no internet-based system can
                  guarantee absolute security, we continuously monitor and
                  enhance our security practices to provide the highest level of
                  protection possible. We cannot, however, guarantee the
                  security of information transmitted over the internet beyond
                  our control.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Data Retention and Former Customer Information
                </h2>
                <p className="text-gray-700">
                  We are legally required to maintain certain information about
                  former customers to comply with federal and state regulations,
                  as well as payment network rules. We apply the same privacy
                  protection standards to former customer information as we do
                  for active customers, ensuring consistent data security
                  regardless of account status.
                </p>
              </section>

              {/* Age Restrictions */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Age Requirements
                </h2>
                <p className="text-gray-700">
                  Our services are designed for business use and are not
                  intended for individuals under the age of 18. We do not
                  knowingly collect or maintain information from minors through
                  our website.
                </p>
              </section>

              {/* Policy Updates */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Updates to This Privacy Policy
                </h2>
                <p className="text-gray-700">
                  This Privacy Policy was established in February 2024, with
                  CCPA compliance measures effective January 1, 2020. We reserve
                  the right to modify this policy at any time to reflect changes
                  in our practices or legal requirements. Any updates will be
                  posted on our website, and modifications will apply only to
                  information collected after the revised policy is published.
                </p>
              </section>

              {/* Contact Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Contact Us and Opt-Out Options
                </h2>
                <p className="text-gray-700">
                  To update your information or opt out of marketing
                  communications, please contact us via email at{" "}
                  <a
                    href="mailto:support@paywithlegacy.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@paywithlegacy.com
                  </a>{" "}
                  or call us at{" "}
                  <a
                    href="tel:904-686-6960"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    904-686-6960
                  </a>
                  . We're here to help you manage your privacy preferences.
                </p>
              </section>

              {/* Third-Party Technologies */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Third-Party Technologies and Analytics
                </h2>
                <p className="text-gray-700 mb-4">
                  Our website utilizes advanced technologies from trusted
                  partners to enhance your experience and improve our services.
                  These technologies help us understand how you interact with
                  our site, enabling us to provide more relevant information and
                  optimize our platform for your needs.
                </p>
                <p className="text-gray-700 mb-4">
                  The data we collect through these technologies enables us to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>Analyze website traffic and user behavior patterns</li>
                  <li>
                    Display relevant advertisements for our services on other
                    platforms
                  </li>
                  <li>Measure the effectiveness of our marketing campaigns</li>
                </ul>
                <p className="text-gray-700">
                  This information may include anonymized email addresses and
                  other online identifiers that help us deliver personalized
                  experiences across different devices and browsers.
                </p>
              </section>

              {/* Opt-Out Options */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Managing Your Privacy Preferences
                </h2>
                <p className="text-gray-700 mb-4">
                  You have control over how your information is used for
                  interest-based advertising. While some third-party
                  technologies may not be affected by standard browser settings,
                  you can opt out of targeted advertising through these
                  industry-standard platforms:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    Network Advertising Initiative:{" "}
                    <a
                      href="http://www.networkadvertising.org/choices/"
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://www.networkadvertising.org/choices/
                    </a>
                  </li>
                  <li>
                    European Digital Advertising Alliance:{" "}
                    <a
                      href="http://www.youronlinechoices.com/"
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://www.youronlinechoices.com/
                    </a>
                  </li>
                  <li>
                    Digital Advertising Alliance:{" "}
                    <a
                      href="http://optout.aboutads.info/?c=2&lang=EN"
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      http://optout.aboutads.info/?c=2&lang=EN
                    </a>
                  </li>
                </ul>
              </section>

              {/* California Privacy Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  California Consumer Privacy Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  Under the California Consumer Privacy Act (CCPA), California
                  residents have specific rights regarding their personal
                  information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    Request disclosure of the categories and sources of personal
                    information we collect
                  </li>
                  <li>
                    Obtain a copy of your specific personal information from the
                    past 12 months
                  </li>
                  <li>
                    Request deletion of your personal information (subject to
                    legal exceptions)
                  </li>
                  <li>
                    Opt out of the sale of your personal information to third
                    parties
                  </li>
                  <li>
                    Protection against discrimination for exercising these
                    rights
                  </li>
                </ul>
              </section>

              {/* CCPA Requests */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Exercising Your California Privacy Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  To exercise your CCPA rights, contact us at{" "}
                  <a
                    href="mailto:support@paywithlegacy.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@paywithlegacy.com
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:904-686-6960"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    904-686-6960
                  </a>
                  . We'll respond to your request within 45 days and may need to
                  verify your identity to protect your privacy.
                </p>
                <p className="text-gray-700">
                  California consumers are limited to two personal information
                  requests per 12-month period for disclosure and production
                  purposes.
                </p>
              </section>

              {/* Final Contact Section */}
              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Questions About Your Privacy?
                </h2>
                <p className="text-gray-700">
                  We're committed to transparency and protecting your privacy.
                  If you have questions about our privacy practices or need
                  assistance with your privacy rights, please reach out to us at{" "}
                  <a
                    href="mailto:support@paywithlegacy.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@paywithlegacy.com
                  </a>{" "}
                  or{" "}
                  <a
                    href="tel:904-686-6960"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    904-686-6960
                  </a>
                  .
                </p>
              </section>

              {/* Footer */}
              <div className="text-center text-gray-400 text-xs pt-6 border-t border-gray-100">
                <p>Privacy Policy updated June 20, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
