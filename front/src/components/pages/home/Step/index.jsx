import Container from "@/components/common/Container/Container";
import StepList from "./stepList/StepList";
import s from "./stepSection.module.scss";
import Ellipse from "@/components/common/Ellipse/Ellipse";
import Title from "@/components/common/Title/Title";

export default function StepSection() {
  return (
    <section className={s.step_section}>
      <Container>
        <Title
          text="ВІД НОВАЧКА ДО РОБОТИ В ІТ"
          className={"step_section_title"}
          tagName={"h2"}
        />
        <StepList />
      </Container>
      <Ellipse className={"step_section_ellipse"} />
    </section>
  );
}
