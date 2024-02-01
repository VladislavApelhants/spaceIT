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
            text="Цей курс з нуля для тих, хто хоче швидко почати свій шлях в QA"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            Вивчите процеси аналізу вимог, розробку тест-кейсів та їх подальше
            виконання відповідно до заданих сценаріїв. Навчимо стежити за
            точністю та повнотою тестів, будете реєструвати виявлені помилки та
            співпрацювати із розробниками для їх виправлення.
          </p>
        </div>
        <CourseInfo name={name} />
      </CourseContainer>
    </section>
  );
}
