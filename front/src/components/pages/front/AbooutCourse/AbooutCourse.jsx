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
            text="Цей курс з нуля для тих, хто хоче швидко почати свій шлях в Front-end розробці"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            Хочеш одночасно програмувати та створювати щось прекрасне? Почни
            свій шлях в Front-end розробці! Від розробки дизайну та вибору
            кольорів до створення анімацій, кнопок та інтерактивних форм. Ваша
            робота буде полягати в тому, щоб забезпечити приємний та зручний
            досвід для відвідувачів.
          </p>
        </div>
        <CourseInfo name={name} />
      </CourseContainer>
    </section>
  );
}
