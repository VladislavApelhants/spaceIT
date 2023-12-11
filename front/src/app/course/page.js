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

export default function Course() {
  return (
    <>
      <Hero />
      <Sidebar />
      <AboutCourse />
      <YouLearning />
      <AboutProfession />
      <Teachers />
      <Ready />
      <Program />
      <HowLearn />
      <CourseTechnology />
      <Diploma />
      <Faq />
      <RegisterCourse />
      <Courses />
      <Contact />
    </>
  );
}
