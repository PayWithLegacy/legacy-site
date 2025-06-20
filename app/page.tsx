import Hero from "./components/Hero";
import Features from "./components/Features";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legacy Payments",
  description:
    "Legacy Payments is a modern payment processing solution that enables businesses to securely accept payments, manage transactions, and streamline their financial operations with advanced features and robust security measures.",
  keywords: [
    "payment processing",
    "payment gateway",
    "merchant services",
    "online payments",
    "secure payments",
    "business payments",
  ],
  openGraph: {
    title: "Legacy Payments - Modern Payment Processing Solution",
    description:
      "Legacy Payments is a modern payment processing solution that enables businesses to securely accept payments, manage transactions, and streamline their financial operations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legacy Payments - Modern Payment Processing Solution",
    description:
      "Legacy Payments is a modern payment processing solution that enables businesses to securely accept payments, manage transactions, and streamline their financial operations.",
  },
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <Features />
    </div>
  );
}
