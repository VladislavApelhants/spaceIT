import s from "./ourTeam.module.scss";
import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import TeamList from "./TeamList/TeamList";

export default function OurTeam() {
  return (
    <section className={s.teacher_section}>
      <Container>
        <div className={s.teachers_wrapper}>
          <Title
            text="НАШІ ВИКЛАДАЧІ"
            className="teachers_title"
            tagName="h2"
          />
          <TeamList />
        </div>
      </Container>
    </section>
  );
}
