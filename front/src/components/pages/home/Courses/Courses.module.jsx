import Container from "@/components/common/Container/Container";
import s from "./courses.module.scss";
import CourseList from "./CourseList/CourseList";
import Title from "@/components/common/Title/Title";
export default function Courses() {
  return (
    <section className={s.courses_section}>
      <Container>
        <Title
          text="Курси"
          className={"courses_section_title"}
          tagName={"h2"}
        />
        <CourseList />
      </Container>
    </section>
  );
}
