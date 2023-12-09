import Container from "@/components/common/Container/Container";

import Title from "@/components/common/Title/Title";
import { FaqAccordion } from "./FaqAccordion/FaqAccordion";
import { Circle } from "./Circle/Circle";

import s from "./styles.module.scss";

export default function Faq() {
  return (
    <section>
      <div className={s.backgroundContainer}>
        <Circle />
        <Container>
          <div className={s.faqContainer}>
            <Title text="FAQ" tagName="h2" className="faqTitle" />
            <FaqAccordion />
          </div>
        </Container>
      </div>
    </section>
  );
}
