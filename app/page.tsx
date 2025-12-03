import { Header } from "@/components/sections/Header";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Statistics } from "@/components/sections/Statistics";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { FrequentlyAdd } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { Hero } from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Statistics />
      <Industries />
      <Testimonials />
      <FrequentlyAdd />
      <Footer />
    </>
  );
}
