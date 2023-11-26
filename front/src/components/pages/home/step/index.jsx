import Container from "@/components/common/Container/Container";
import StepList from "./stepList/StepList";
import s from "./stepSection.module.scss";
import Buttons from "./stepList/Buttons";

export default function StepSection() {
  return (
    <section className={s.step_section}>
      <Container>
        <div className={s.buttons_wrapper}>
          <h2 className={s.step_section_title}>ВІД НОВАЧКА ДО РОБОТИ В ІТ</h2>
          <Buttons />
        </div>
        <StepList />
      </Container>
    </section>
  );
}
