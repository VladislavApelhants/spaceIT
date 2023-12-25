import LectureHall from "@/components/pages/about/LectureHall/LectureHall";
import Contact from "@/components/pages/home/Contact/Contact";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import OurTeam from "@/components/pages/about/OurTeam/OurTeam";

export default function About() {
  return (
    <>
      <HiddenWrapper>
        <LectureHall />
        <OurTeam />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
