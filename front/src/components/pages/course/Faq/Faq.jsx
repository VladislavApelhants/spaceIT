import Container from "@/components/common/Container/Container";

import CourseContainer from "@/components/common/CourseContainer/CourseContainer";

import Title from "@/components/common/Title/Title";
import { FaqAccordion } from "./FaqAccordion/FaqAccordion";
import { Circle } from "./Circle/Circle";

import s from "./styles.module.scss";

export default function Faq() {
  return (
    <section>
      <div className={s.backgroundContainer}>
        <Circle />
        <CourseContainer>
          <div className={s.faqContainer}>
            <Title text="FAQ" tagName="h2" className="faqTitle" />
            <FaqAccordion />
          </div>
        </CourseContainer>
      </div>
    </section>
  );
}
