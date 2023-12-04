import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";
import CourseInfo from "./CourseInfo/CourseInfo";

import s from "./styles.module.scss";

export default function AboutCourse() {
  return (
    <section className={s.aboutCourse}>
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
            Опис Опис Опис asd asdaОпис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис ОписsdasdasОпис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Оda sпис Опис Опис Опис Опис Опис Опис Опds sda ис Опис Опис
            Опис Опис Опис Опиdsa asdс Опис Опис Опис Опис Опис Опис Опис Опис
            Опис Опис Опис Опис
          </p>
        </div>
        <CourseInfo />
      </CourseContainer>
    </section>
  );
}
