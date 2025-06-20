export default function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header */}
          <div className="bg-brand-blue px-6 py-8">
            <h1 className="text-3xl font-bold text-white text-center">
              Terms of Service
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
                  Welcome to Legacy Payments. These Terms of Service govern your
                  use of our website and services. By accessing or using our
                  website, you agree to be bound by these terms and our Privacy
                  Policy. If you do not agree with any part of these terms,
                  please do not use our services.
                </p>
              </section>

              {/* Information Collection */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 mb-4">
                  We collect information that you voluntarily provide when using
                  our services, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Personal Information:</strong> Name, email address,
                    phone number, and other details you provide through our lead
                    forms
                  </li>
                  <li>
                    <strong>Usage Data:</strong> Information about your
                    interactions with our website, collected automatically via
                    Google Analytics, such as IP address, browser type, pages
                    visited, and time spent on our site
                  </li>
                </ul>
                <p className="text-gray-700">
                  We do not collect personal information unless you actively
                  submit it through our forms.
                </p>
              </section>

              {/* How We Use Information */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We use the information we collect for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>
                    <strong>Lead Processing:</strong> To contact you regarding
                    your submitted lead, provide requested services, or respond
                    to your inquiries
                  </li>
                  <li>
                    <strong>Analytics:</strong> To analyze website usage,
                    improve user experience, and optimize our services using
                    Google Analytics
                  </li>
                  <li>
                    <strong>Legal Compliance:</strong> To comply with applicable
                    laws, regulations, or legal processes
                  </li>
                </ul>
              </section>

              {/* Information Sharing */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  3. How We Share Your Information
                </h2>
                <p className="text-gray-700 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Service Providers:</strong> With third-party service
                    providers, such as Google Analytics, to analyze website
                    usage. Google Analytics may collect anonymized data to
                    provide insights into site performance. For more details,
                    see{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="text-blue-600 hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google's Privacy Policy
                    </a>
                  </li>
                  <li>
                    <strong>Legal Obligations:</strong> When required by law,
                    such as in response to a subpoena or court order
                  </li>
                  <li>
                    <strong>Business Transfers:</strong> In connection with a
                    merger, acquisition, or sale of assets, your information may
                    be transferred to a third party
                  </li>
                </ul>
                <p className="text-gray-700">
                  We do not sell your personal information to third parties.
                </p>
              </section>

              {/* Cookies and Tracking */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  4. Cookies and Tracking Technologies
                </h2>
                <p className="text-gray-700">
                  We use cookies and similar technologies through Google
                  Analytics to track user interactions with our website. These
                  cookies help us understand how you use our site and improve
                  its functionality. You can manage cookie preferences through
                  your browser settings or opt out of Google Analytics tracking
                  via tools provided at{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    className="text-blue-600 hover:text-blue-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://tools.google.com/dlpage/gaoptout
                  </a>
                  .
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  5. Data Security
                </h2>
                <p className="text-gray-700">
                  We implement reasonable technical and organizational measures
                  to protect your personal information from unauthorized access,
                  loss, or misuse. However, no online system is completely
                  secure, and we cannot guarantee absolute security.
                </p>
              </section>

              {/* User Rights */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  6. Your Rights
                </h2>
                <p className="text-gray-700 mb-4">
                  Depending on your jurisdiction, you may have the following
                  rights regarding your personal information:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                  <li>
                    <strong>Access:</strong> Request a copy of the personal
                    information we hold about you
                  </li>
                  <li>
                    <strong>Correction:</strong> Request correction of
                    inaccurate or incomplete information
                  </li>
                  <li>
                    <strong>Deletion:</strong> Request deletion of your personal
                    information, subject to legal obligations
                  </li>
                  <li>
                    <strong>Opt-Out:</strong> Opt out of certain data
                    processing, such as Google Analytics tracking
                  </li>
                </ul>
                <p className="text-gray-700">
                  To exercise these rights, contact us at{" "}
                  <a
                    href="mailto:support@paywithlegacy.com"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    support@paywithlegacy.com
                  </a>
                  . We will respond within the timeframes required by applicable
                  law.
                </p>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  7. Data Retention
                </h2>
                <p className="text-gray-700">
                  We retain your personal information only for as long as
                  necessary to fulfill the purposes outlined in this Privacy
                  Policy or as required by law. Lead data is typically retained
                  for 12 months unless you request deletion.
                </p>
              </section>

              {/* Third-Party Links */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  8. Third-Party Links
                </h2>
                <p className="text-gray-700">
                  Our website may contain links to third-party websites. We are
                  not responsible for the privacy practices or content of these
                  websites. We encourage you to review their privacy policies
                  before providing any personal information.
                </p>
              </section>

              {/* Changes to Policy */}
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  9. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700">
                  We may update this Privacy Policy from time to time. Changes
                  will be posted on this page with an updated "Last Updated"
                  date. Your continued use of our website after changes are
                  posted constitutes acceptance of the updated policy.
                </p>
              </section>

              {/* Contact Information */}
              <section className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  10. Contact Us
                </h2>
                <p className="text-gray-700 mb-4">
                  If you have questions or concerns about this Privacy Policy,
                  please contact us at:
                </p>
                <div className="text-gray-700">
                  <p>
                    <strong>Legacy Payments</strong>
                  </p>
                  <p>
                    Email:{" "}
                    <a
                      href="mailto:support@paywithlegacy.com"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      support@paywithlegacy.com
                    </a>
                  </p>
                  <p>
                    Phone:{" "}
                    <a
                      href="tel:904-686-6960"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      904-686-6960
                    </a>
                  </p>
                </div>
              </section>

              {/* Footer */}
              <div className="text-center text-gray-400 text-xs pt-6 border-t border-gray-100">
                <p>Terms of Service updated June 20, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
