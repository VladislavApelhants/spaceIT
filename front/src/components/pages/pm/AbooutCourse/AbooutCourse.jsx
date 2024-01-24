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
            text="Цей курс з нуля для тих, хто хоче швидко почати свій шлях 
як Project Manager"
            tagName="h3"
            className="aboutCourseSecondTitle"
          />
          <p className={s.text}>
            Ви лідер по життю і хочете пов’язати з цим роботу? На курсі по PM ви
            навчитесь доносити інформацію до команди та керівництва, оцінювати
            ефективність проєкту, прогнозувати ризики та керувати ними та багато
            іншого, що дозволить вам стати видатним Project-менеджером.
          </p>
        </div>
        <CourseInfo />
      </CourseContainer>
    </section>
  );
}
