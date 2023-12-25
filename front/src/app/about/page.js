import LectureHall from "@/components/pages/about/LectureHall/LectureHall";
import Contact from "@/components/pages/home/Contact/Contact";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import OurTeam from "@/components/pages/about/OurTeam/OurTeam";
import Hero from "@/components/pages/about/Hero/Hero";
import Image from "next/image";
import s from "./styles.module.scss";

export default function About() {
  return (
    <>
      <Image
        src="/icons/unionAboutUs.svg"
        width={4041}
        height={4031}
        alt="декоративне зображення коло"
        className={s.hero_union}
      />
      <HiddenWrapper>
        <Hero />
        <LectureHall />
        <OurTeam />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
