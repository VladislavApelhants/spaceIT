import s from "./ourTeam.module.scss";
import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import TeamList from "./TeamList/TeamList";

export default function OurTeam() {
  return (
    <section className={s.team_section}>
      <Container>
        <div className={s.title_wrapper}>
          <Title
            text="КОМАНДА SPACEIT SCHOOL"
            className="team_title"
            tagName="h2"
          />
          <p className={s.specialists}>100+ КРУТИХ ФАХІВЦІВ</p>
        </div>
        <TeamList />
      </Container>
    </section>
  );
}
