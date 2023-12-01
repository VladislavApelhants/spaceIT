import Contact from "@/components/pages/home/Contact/Contact";
import Courses from "@/components/common/Courses/Courses.module";
import Hero from "@/components/pages/home/hero";
import HowLearning from "@/components/pages/home/HowLearning/HowLearning";
import StepSection from "@/components/pages/home/Step";
import JoinUs from "@/components/pages/home/JoinUs/JoinUs";
import Faq from "@/components/pages/home/Faq/Faq";
import Teachers from "@/components/pages/home/Teachers/Teachers";
import Socials from "@/components/pages/home/Socials/Socials";
import Nasa from "@/components/pages/home/Nasa/Nasa";
export default function Home() {
  return (
    <>
      <Hero />
      <StepSection />
      <Courses />
      <HowLearning />
      <Teachers />
      <Nasa />
      <JoinUs />
      <Socials />
      <Faq />
      <Contact />
    </>
  );
}
