import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./diploma.module.scss";
import Image from "next/image";
import Title from "@/components/common/Title/Title";
export default function Diploma() {
  return (
    <section className={s.diploma} id="work">
      <CourseContainer>
        <div className={s.cont}>
          <Title
            text="ЗАКІНЧИВШИ КУРС ВИ ОТРИМАЄТЕ ДИПЛОМ, ЯКИЙ МОЖНА РОЗМІСТИТИ НА LINKEDIN"
            className="diploma_title"
            tagName="h2"
          />
          <div className={s.diploma_thumb}>
            <Image
              src="/images/diploma/diploma.png"
              className={s.dipImage}
              width={352}
              height={473}
              alt="image diploma"
            />
            <div className={s.info_thumb}>
              <Title
                text="ЗАКІНЧИВШИ КУРС ВИ ОТРИМАЄТЕ ДИПЛОМ, ЯКИЙ МОЖНА РОЗМІСТИТИ НА LINKEDIN"
                className="diploma_title_bottom"
                tagName="h2"
              />
              <div className={s.position_wrapper}>
                <div className={s.position}>
                  <h3 className={s.diploma_info_titles}>Позиція</h3>
                  <p className={s.position_param}>Junior QA Manual</p>
                </div>
                <div className={s.salary}>
                  <h3 className={s.diploma_info_titles}>Зарплата від</h3>
                  <p className={s.position_param}>$500</p>
                </div>
              </div>
              <div className={s.prof_skill}>
                <h3 className={s.diploma_info_titles}>Професійні навички</h3>
                <ul className={s.skills_list}>
                  <li className={s.skills_item}>
                    <span className={s.light}>Figma</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Написання тест-скриптів</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Створення тест-кейсів</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Аналіз відомостей</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>
                      Освоєння методик ручного тестування
                    </span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>Робота з базами данних SQL</span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>
                      Ознайомлення з тестовими інструментами
                    </span>
                  </li>
                  <li className={s.skills_item}>
                    <span className={s.light}>
                      Навички взаємодії з командою розробників
                    </span>
                  </li>
                </ul>
              </div>
              <div className={s.possibilities}>
                <h3 className={s.posibil_title}>Можливості</h3>
                <div className={s.possibilities_thumb}>
                  <svg width={40} height={40} className={s.icon_linkedin}>
                    <use href="/icons/sprite.svg#icon-linkedin"></use>
                  </svg>
                  <p className={s.possibilities_text}>
                    Ви зможете додати Ваш диплом до свого облікового запису
                    Linkedin з офіційним результатом підтвердженим SPACEIT
                    School
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CourseContainer>
    </section>
  );
}
