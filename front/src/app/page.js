import Contact from "@/components/pages/home/Contact/Contact";
import Courses from "@/components/pages/home/Courses/Courses.module";
import Hero from "@/components/pages/home/hero";
import HowLearning from "@/components/pages/home/HowLearning/HowLearning";
import StepSection from "@/components/pages/home/Step";
import Faq from "@/components/pages/home/Faq/Faq";
export default function Home() {
  return (
    <>
      <Hero />
      <StepSection />
      <Courses />
      <HowLearning />
      <Faq />
      <Contact />
    </>
  );
}
