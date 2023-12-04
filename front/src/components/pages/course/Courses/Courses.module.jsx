import s from "./courses.module.scss";
import CourseList from "./CourseList/CourseList";
import Title from "@/components/common/Title/Title";
import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
export default function Courses() {
  return (
    <section className={s.courses_section}>
      <CourseContainer>
        <Title
          text="Курси"
          className={"courses_section_title"}
          tagName={"h2"}
        />
        <CourseList />
      </CourseContainer>
    </section>
  );
}
