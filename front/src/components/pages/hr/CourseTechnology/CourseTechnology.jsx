import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";
import { TechnologyAccordion } from "./TechnologyAccordion/TechnologyAccordion";

import s from "./styles.module.scss";

export default function CourseTechnology() {
  return (
    <section className={s.courseTechnology}>
      <CourseContainer>
        <Title
          tagName="h2"
          text="інструменти, які ви вивчите на курсі"
          className="courseTechnologyTitle"
        />
        <TechnologyAccordion />
      </CourseContainer>
    </section>
  );
}
