import Hero from "@/components/pages/course/Hero/Hero";
import AboutCourse from "@/components/pages/course/Hero/AbooutCourse/AbooutCourse";
import YouLearning from "@/components/pages/course/YouLearning/YouLearning";
import Courses from "@/components/pages/course/Courses/Courses.module";

export default function Course() {
  return (
    <>
      <Hero />
      <AboutCourse />
      <YouLearning />
      <Courses />
    </>
  );
}
