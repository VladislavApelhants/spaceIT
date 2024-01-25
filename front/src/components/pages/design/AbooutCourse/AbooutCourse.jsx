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
            text=" Цей курс з нуля для тих, хто хоче швидко почати свій шлях в UI/UX
            дизайніс"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            Мріяли стати UI/UX дизайнером, але не маєте навичок малювання? Не
            хвилюйтеся, вони і не потрібні! З нуля навчимо всьому та детально
            розповімо, так що у вас не залишиться запитань. По закінченню курсу
            ви матимете портфоліо, за яким зможете влаштуватися на свою першу
            омріяну роботу в сфері IT
          </p>
        </div>
        <CourseInfo />
      </CourseContainer>
    </section>
  );
}
