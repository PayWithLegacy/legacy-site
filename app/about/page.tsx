export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-brand-blue via-brand-blue/95 to-brand-blue/85 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              About Legacy Payments
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90 leading-relaxed">
              Driving innovation and excellence in payment processing
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Section 1: Company Overview */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We are dedicated to transforming the way businesses handle payments through 
                cutting-edge technology solutions and innovative approaches. Our mission 
                is to empower organizations to reach their full potential by providing 
                exceptional payment processing services that drive growth and success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With a focus on security, reliability, and customer satisfaction, we 
                strive to be the trusted partner that businesses can depend on for 
                their payment processing needs. Every solution we provide is an opportunity 
                to make a meaningful impact on your business operations.
              </p>
            </div>
            <div className="bg-gradient-to-br from-brand-blue/5 via-brand-red/3 to-brand-gold/5 rounded-2xl p-8 border border-gray-100">
              <div className="text-center">
                <div className="text-4xl font-bold text-brand-blue mb-2">10,000+</div>
                <div className="text-gray-600 mb-6">Transactions Processed</div>
                <div className="text-4xl font-bold text-brand-red mb-2">500+</div>
                <div className="text-gray-600 mb-6">Happy Merchants</div>
                <div className="text-4xl font-bold text-brand-gold mb-2">15+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Our Values */}
        <section>
          <div className="bg-gradient-to-br from-brand-blue/5 via-brand-red/3 to-brand-gold/5 rounded-3xl p-8 md:p-12 border border-gray-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Drives Us
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our core values guide everything we do and shape our payment processing excellence
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-blue to-brand-blue/90 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Speed</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lightning-fast approvals and processing times that keep your 
                  business moving at the speed of commerce.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-red to-brand-red/90 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Security</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Bank-level security and PCI compliance ensure your transactions 
                  and customer data are always protected.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-gold to-brand-gold/90 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  24/7 expert support from payment professionals who understand 
                  your business and industry needs.
                </p>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-brand-blue/80 to-brand-red/80 rounded-xl w-16 h-16 flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Growth</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Scalable solutions that grow with your business, from startup 
                  to enterprise-level payment processing needs.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
