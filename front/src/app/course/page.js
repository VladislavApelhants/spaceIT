import Hero from "@/components/pages/course/Hero/Hero";
import AboutCourse from "@/components/pages/course/AbooutCourse/AbooutCourse";
import YouLearning from "@/components/pages/course/YouLearning/YouLearning";
import Courses from "@/components/pages/course/Courses/Courses.module";
import Contact from "@/components/pages/home/Contact/Contact";
import AboutProfession from "@/components/pages/course/AboutProfession/AboutProfession";
import Teachers from "@/components/pages/course/Teachers/Teachers";
import Program from "@/components/pages/course/Program/Program";
import Ready from "@/components/pages/course/Ready/Ready";
import HowLearn from "@/components/pages/course/HowLearn/HowLearn";
import Diploma from "@/components/pages/course/Diploma/Diploma";
import RegisterCourse from "@/components/pages/course/RegisterCourse/RegisterCourse";
import CourseTechnology from "@/components/pages/course/CourseTechnology/CourseTechnology";
import Sidebar from "@/components/pages/course/sidebar/Sidebar";
import Faq from "@/components/pages/course/Faq/Faq";
import NasaCourses from "@/components/pages/course/NasaCourses/NasaCourses";
import HiddenWrapper from "@/components/common/HiddenWrapper/HiddenWrapper";
import { targets, labels } from "@/components/pages/course/sidebar/constants";
import s from "./style.module.scss";
export default function Course() {
  return (
    <>
      <div className={s.railway}>
        <Sidebar targets={targets} labels={labels} />
      </div>
      <HiddenWrapper>
        <Hero />
        <Sidebar className={"min"} targets={targets} labels={labels} />
        <AboutCourse />
        <YouLearning />
        <AboutProfession />
        <Teachers />
        <Ready />
        <Program />
        <HowLearn />
        <CourseTechnology />
        <NasaCourses />
        <Diploma />
        <RegisterCourse />
        <Faq />
        <Courses />
        <Contact />
      </HiddenWrapper>
    </>
  );
}
