import Image from "next/image";

import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";

import s from "./styles.module.scss";

export default function AboutProfession() {
  return (
    <section className={s.aboutProfession}>
      <CourseContainer>
        <Title
          text="HR MANAGER З НУЛЯ ДО JUNIOR"
          tagName="h2"
          className="aboutProfessionTitle"
        />
        <Title
          text="Отримайте бажану професію"
          tagName="h3"
          className="aboutProfessionSubtitle"
        />
        <div className={s.graphWrapper}>
          <ul className={s.list}>
            <li className={s.listItem}>
              <p className={s.price}>10000</p>
              <p className={s.text}>Вакансій</p>
            </li>
            <li className={s.listItem}>
              <p className={s.price}>20000 - 25000 грн</p>
              <p className={s.text}>Середня зарплатня</p>
            </li>
          </ul>
          <div className={s.graph}>
            <Title
              text="графік росту вакансій"
              tagName="h4"
              className="aboutProfessionGraphTitle"
            />
            <Image
              src="/images/aboutProfession/test.png"
              width={717}
              height={408}
              alt="salary graph"
            />
          </div>
        </div>
        <div className={s.vacancies}>
          <Title
            text="приклад вакансій на ринку"
            tagName="h4"
            className="aboutProfessionVacanciesTitle"
          />
          <ul>
            <li className={s.vacanciesListItem}>
              <span>
                <p className={s.listItemText}>HR-менеджер</p>
                <p className={s.listItemSecondText}>Дніпро, офіс</p>
              </span>
              <p className={s.vacanciesListItemSalary}>20000 грн</p>
            </li>
            <li className={s.vacanciesListItem}>
              <span>
                <p className={s.listItemText}>HR-менеджер</p>
                <p className={s.listItemSecondText}>Дніпро, офіс</p>
              </span>
              <p className={s.vacanciesListItemSalary}>30000 грн</p>
            </li>
            <li className={s.vacanciesListItem}>
              <span>
                <p className={s.listItemText}>HR-менеджер</p>
                <p className={s.listItemSecondText}>Київ, офіс</p>
              </span>
              <p className={s.vacanciesListItemSalary}>35000 грн</p>
            </li>
          </ul>
        </div>
      </CourseContainer>
    </section>
  );
}
