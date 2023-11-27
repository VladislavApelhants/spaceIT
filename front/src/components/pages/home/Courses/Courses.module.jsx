import Container from "@/components/common/Container/Container";
import s from "./courses.module.scss";
import CourseList from "./CourseList/CourseList";
export default function Courses() {
  return (
    <section className={s.courses_section}>
      <Container>
        <div className={s.button_title_wrapper}>
          <h2>Курси</h2>
        </div>
        <CourseList />
      </Container>
    </section>
  );
}
