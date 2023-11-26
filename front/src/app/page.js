import Contact from "@/components/pages/home/Contact/Contact";
import Image from "next/image";
import Hero from "@/components/pages/home/hero";
import StepSection from "@/components/pages/home/step";

export default function Home() {
  return (
    <>
      <Hero />
      <StepSection />
      <Contact />
    </>
  );
}
