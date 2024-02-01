import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";
import CourseInfo from "./CourseInfo/CourseInfo";

import s from "./styles.module.scss";

export default function AboutCourse({ name }) {
  return (
    <section className={s.aboutCourse} id="about">
      <CourseContainer>
        <Title text="про курс" tagName="h2" className="aboutCourse" />
        <div className={s.textWrapper}>
          <Title
            text="Цей курс з нуля для тих, хто хоче швидко почати свій шлях в Full-stack розробці"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            Не змогли обрати між курсом Back-end чи Front-end? Тоді Full-stack
            саме для вас. Поєднання цих двох курсів зробить вас професіоналом в
            розробці та в створенні інтерфейсу. Ви самостійно зможете створити
            додаток від естетичності та зручності до серверної частини.
          </p>
        </div>
        <CourseInfo name={name} />
      </CourseContainer>
    </section>
  );
}
