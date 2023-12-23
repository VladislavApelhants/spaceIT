import Title from "@/components/common/Title/Title";
import s from "./lectureHall.module.scss";
import Container from "@/components/common/Container/Container";
import SliderList from "./SliderList/SliderList";

export default function LectureHall() {
  return (
    <section className={`lecture_hall ${s.lecture_section}`}>
      <Container>
        <Title
          text="ЛЕКТОРІЙ SPACEIT SCHOOL - ЦЕ МІСЦЕ, ДЕ ВИ ПОЧИНАЄТЕ ПОДОРОЖ В СВІТ ІТ"
          className="lecture_hall_title"
          tagName="h2"
        />
        <SliderList />
      </Container>
    </section>
  );
}
