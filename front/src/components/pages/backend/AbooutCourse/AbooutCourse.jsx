import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";
import CourseInfo from "./CourseInfo/CourseInfo";

import s from "./styles.module.scss";

export default function AboutCourse() {
  return (
    <section className={s.aboutCourse} id="about">
      <CourseContainer>
        <Title text="про курс" tagName="h2" className="aboutCourse" />
        <div className={s.textWrapper}>
          <Title
            text="Цей курс з нуля для тих, хто хоче швидко почати свій шлях в Back-end розробці"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            На курсі Back-end ти навчишся робити так, щоб усі елементи сайту
            працювали гладко: від обробки запитань користувачів до взаємодії з
            базою даних. Використовуючи різноманітні технології та мови
            програмування, ти забезпечиш, щоб всі функції веб-сайту працювали
            гладко. Ти станеш основою, на якій буде ґрунтуватись функціонал
            додатків.
          </p>
        </div>
        <CourseInfo />
      </CourseContainer>
    </section>
  );
}
