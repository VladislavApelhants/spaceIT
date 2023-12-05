import Hero from "@/components/pages/course/Hero/Hero";
import AboutCourse from "@/components/pages/course/AbooutCourse/AbooutCourse";
import YouLearning from "@/components/pages/course/YouLearning/YouLearning";
import Courses from "@/components/pages/course/Courses/Courses.module";
import Contact from "@/components/pages/home/Contact/Contact";
import AboutProfession from "@/components/pages/course/AboutProfession/AboutProfession";
import Teachers from "@/components/pages/course/Teachers/Teachers";
import Program from "@/components/pages/course/Program/Program";

export default function Course() {
  return (
    <>
      <Hero />
      <AboutCourse />
      <YouLearning />
      <AboutProfession />
      <Teachers />
      <Program />
      <Courses />
      <Contact />
    </>
  );
}
