import Courses from "@/components/common/Courses/Courses.module";
import Hero from "@/components/pages/course/Hero/Hero";
import AboutCourse from "@/components/pages/course/Hero/AbooutCourse/AbooutCourse";

export default function Course() {
  return (
    <>
      <Hero />
      <AboutCourse />
      <Courses />
    </>
  );
}
