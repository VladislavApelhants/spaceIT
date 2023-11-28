import Title from "@/components/common/Title/Title";
import Container from "@/components/common/Container/Container";
import s from "./teacers.module.scss";
import TeachersList from "./TeachersList/TeachersList";

export default function Teachers() {
  return (
    <section>
      <Container>
        <Title text="НАШІ ВИКЛАДАЧІ" className="teachers_title" tagName="h2" />
        <TeachersList />
      </Container>
    </section>
  );
}
