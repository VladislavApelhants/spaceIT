import Hero from "@/components/pages/course/Hero/Hero";
import AboutCourse from "@/components/pages/course/AbooutCourse/AbooutCourse";
import YouLearning from "@/components/pages/course/YouLearning/YouLearning";
import Courses from "@/components/pages/course/Courses/Courses.module";
import Contact from "@/components/pages/home/Contact/Contact";
import AboutProfession from "@/components/pages/course/AboutProfession/AboutProfession";

export default function Course() {
  return (
    <>
      <Hero />
      <AboutCourse />
      <YouLearning />
      <AboutProfession />
      <Courses />
      <Contact />
    </>
  );
}
