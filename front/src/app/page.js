import Contact from "@/components/pages/home/Contact/Contact";
import Courses from "@/components/pages/home/Courses/Courses.module";
import Hero from "@/components/pages/home/hero";
import StepSection from "@/components/pages/home/Step";

export default function Home() {
  return (
    <>
      <Hero />
      <StepSection />
      <Courses />
      <Contact />
    </>
  );
}
