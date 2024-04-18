import { Metadata } from "next";
import ScrollUp from "./_components/ScrollUp";
import Hero from "./_components/Hero";
import WhyUs from "./_components/WhyUs";
import WeDo from "./_components/WeDo";
import Testo from "./_components/Testo";
import ContactUs from "./_components/ContactUs";
import Footer from "./_components/Footer";
import Title from "./_components/Title";

export const metadata: Metadata = {
  title: "MoveMate",
  description:
    "MoveMate is a platform for finding and booking moving services.",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <WhyUs />
      <Title mainTitle="Unsere Dienstleistungen" slogan="Was tun wir" />
      <WeDo />
      <div className="bg-[#ffffff5a] border-y">
        <Title mainTitle="Referenzen" slogan="Was sagen die Leute über uns" />
        <Testo />
      </div>
      <Title mainTitle="Kontaktieren uns" slogan="" />
      <ContactUs />
      <Footer />
    </>
  );
}
