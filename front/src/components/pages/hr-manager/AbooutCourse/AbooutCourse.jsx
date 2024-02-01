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
            text="Цей курс з нуля для тих, хто хоче швидко почати свій шлях в HR менеджменті"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            Любиш працювати з людьми та хочеш на цьому заробляти? Наш курс
            плкаже тобі, як підтримувати компанію в досягненні її цілей через
            впровадження HR-стратегії, будувати таку систему найму, щоб позиції
            закривалися вчасно і без замін, будувати атмосферу взаємної довіри і
            постійного зворотного зв’язку.
          </p>
        </div>
        <CourseInfo name={name} />
      </CourseContainer>
    </section>
  );
}
