import LectureHall from "@/components/pages/about/LectureHall/LectureHall";
import Contact from "@/components/pages/home/Contact/Contact";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";

export default function About() {
  return (
    <>
      <HiddenWrapper>
        <LectureHall />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
