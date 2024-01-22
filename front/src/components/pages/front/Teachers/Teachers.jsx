import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./teachers.module.scss";
import Title from "@/components/common/Title/Title";
import TeachersList from "./TeachersList/TeachersList";
import Ellipse from "@/components/common/Ellipse/Ellipse";
export default function Teachers() {
  return (
    <section className={s.teacher_section} id="teachers">
      <CourseContainer>
        <Title text="ВИКЛАДАЧІ" className="course_teacher_title" tagName="h2" />
        <TeachersList />
      </CourseContainer>
      <Ellipse className="teacher_ellipse" />
    </section>
  );
}
