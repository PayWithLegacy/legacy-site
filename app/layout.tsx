import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "PayWithLegacy - High-Risk Merchant Account Specialists",
  description:
    "Leading provider of high-risk merchant accounts and payment processing solutions. Same-day approval for gaming, adult entertainment, peptides, crypto, and more.",
  keywords:
    "high risk merchant accounts, payment processing, peptide payment processing, adult entertainment payment processing, same day merchant account approval, gaming payment processor, crypto payment gateway, bad credit merchant account, match list acceptance, tmf merchant account, offshore merchant accounts, instant approval high risk",
  authors: [{ name: "PayWithLegacy" }],
  creator: "PayWithLegacy",
  publisher: "PayWithLegacy",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.paywithlegacy.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "PayWithLegacy - High-Risk Merchant Account Specialists",
    description:
      "Leading provider of high-risk merchant accounts and payment processing solutions. Same-day approval for gaming, adult entertainment, peptides, crypto, and more.",
    url: "https://www.paywithlegacy.com",
    siteName: "PayWithLegacy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "PayWithLegacy - High-Risk Payment Processing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PayWithLegacy - High-Risk Merchant Account Specialists",
    description:
      "Leading provider of high-risk merchant accounts and payment processing solutions. Same-day approval for gaming, adult entertainment, peptides, crypto, and more.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        {/* Enhanced Schema.org Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://www.paywithlegacy.com/#organization",
                  name: "PayWithLegacy",
                  url: "https://www.paywithlegacy.com",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.paywithlegacy.com/logo.png",
                  },
                  sameAs: [
                    "https://twitter.com/paywithlegacy",
                    "https://linkedin.com/company/paywithlegacy",
                    "https://facebook.com/paywithlegacy",
                  ],
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-904-686-6960",
                    contactType: "Customer Service",
                    email: "Support@Paywithlegacy.com",
                    areaServed: "US",
                    availableLanguage: ["English"],
                  },
                },
                {
                  "@type": "FinancialService",
                  "@id": "https://www.paywithlegacy.com/#service",
                  name: "PayWithLegacy - High-Risk Merchant Accounts",
                  description: "Leading provider of high-risk merchant accounts and payment processing solutions. Same-day approval for CBD, adult entertainment, gaming, crypto, and other high-risk industries.",
                  url: "https://www.paywithlegacy.com",
                  telephone: "+1-904-686-6960",
                  email: "Support@Paywithlegacy.com",
                  priceRange: "$$",
                  areaServed: {
                    "@type": "Country",
                    name: "United States",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "High-Risk Payment Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "High-Risk Merchant Accounts",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "CBD Payment Processing",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Chargeback Protection",
                        },
                      },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    reviewCount: "127",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "FAQPage",
                  mainEntity: [
                    {
                      "@type": "Question",
                      name: "What is a high-risk merchant account?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "A high-risk merchant account is a payment processing account for businesses in industries with higher chargeback rates or regulatory scrutiny, such as CBD, adult entertainment, gaming, and crypto.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "Can I get approved if I'm on the MATCH list?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes! PayWithLegacy specializes in helping merchants on the MATCH list (TMF) get approved for payment processing through our network of understanding banking partners.",
                      },
                    },
                    {
                      "@type": "Question",
                      name: "How long does approval take?",
                      acceptedAnswer: {
                        "@type": "Answer",
                        text: "Most merchants receive same-day or 24-48 hour approval. Our streamlined application process is designed specifically for high-risk businesses.",
                      },
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://www.paywithlegacy.com/#website",
                  url: "https://www.paywithlegacy.com",
                  name: "PayWithLegacy",
                  publisher: {
                    "@id": "https://www.paywithlegacy.com/#organization",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">{children}</main>
        </div>
        <Toaster />
      </body>
    </html>
  );
}
