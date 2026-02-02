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
    "high risk merchant accounts, payment processing, peptide payment processing, adult entertainment payment processing, same day merchant account approval, gaming payment processor, crypto payment gateway",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "PayWithLegacy",
              description:
                "Leading provider of high-risk merchant accounts and payment processing solutions",
              url: "https://www.paywithlegacy.com",
              logo: "https://www.paywithlegacy.com/logo.png",
              sameAs: [
                "https://twitter.com/paywithlegacy",
                "https://linkedin.com/company/paywithlegacy",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-800-SECUREPAY",
                contactType: "Customer Service",
                areaServed: "US",
                availableLanguage: ["English"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Financial District",
                addressLocality: "New York",
                addressRegion: "NY",
                postalCode: "10004",
                addressCountry: "US",
              },
              serviceType: [
                "High-Risk Merchant Accounts",
                "Payment Processing",
                "Crypto Payment Gateway",
              ],
              priceRange: "$$",
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
