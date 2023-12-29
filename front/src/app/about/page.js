import LectureHall from "@/components/pages/about/LectureHall/LectureHall";
import Contact from "@/components/pages/home/Contact/Contact";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import OurTeam from "@/components/pages/about/OurTeam/OurTeam";
import Hero from "@/components/pages/about/Hero/Hero";
import TopDecor from "@/components/common/TopDecor/TopDecor";
import Customers from "@/components/pages/about/Customers/Customers";
import Roadmap from "@/components/pages/about/Roadmap/Roadmap";

export default function About() {
  return (
    <>
      <TopDecor />
      <HiddenWrapper>
        <Hero />
        <LectureHall />
        <Roadmap />
        <OurTeam />
        <Customers />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
