"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import s from "./styles.module.scss";

export function LearningProgram() {
  const defaultContent = (
    <div className={s.contentWrapper}>
      {/* <div className={s.leftContent}>
        <p className={s.mainText}>
          Поринемо в основні концепції адекватного проектування
        </p>
        <p className={s.subtext}>Ви будете використовувати</p>
        <span className={s.technology}>
          <Image src="/icons/figma.svg" width={20} height={20} />
          Figma
        </span>
        <div className={s.result}>
          <p className={s.resultTitle}>Результат</p>
          <p className={s.resultText}>
            Ви зрозумієте, що таке UI/UX дизайн, розберетесь в чому різниця, як
            вибрати стиль для конкретного проекту, як стежити за трендами
            дизайнеру-початківцю
          </p>
        </div>
      </div> */}
      <ul className={s.list}>
        <li>
          <p>Основні інструменти Figma</p>
        </li>
        <li>
          <p>Іконки, ілюстрації та картинки</p>
        </li>
        <li>
          <p>Компоненти</p>
        </li>
        <li>
          <p>Бібліотеки компонентів та загальні стилі</p>
        </li>
        <li>
          <p>Auto Layout та Variants</p>
        </li>
        <li>
          <p>Складні багатосторінкові документи</p>
        </li>
        <li>
          <p>Додаткові можливості та спільнота авторів</p>
        </li>
        <li>
          <p>Підготовка макету для розробників</p>
        </li>
      </ul>
    </div>
  );

  return (
    <Accordion
      className={s.accordionBase}
      itemClasses={{
        base: s.base,
        content: s.content,
        heading: s.heading,
        trigger: s.trigger,
        title: s.title,
      }}
      hideIndicator={true}
    >
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Основи управління людськими ресурсами</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 1</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Розуміння ролі HR та її вплив на стратегію підприємства</p>
              </li>
              <li>
                <p>Основи кадрового обліку та адміністрації</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Рекрутинг та відбір</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 2</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Вміння планувати та виконувати рекрутингові процеси</p>
              </li>
              <li>
                <p>Проведення співбесід та оцінка кандидатів</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Оцінка та розвиток персоналу</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 3</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Використання інструментів для оцінки потенціалу та
                  компетентностей співробітників
                </p>
              </li>
              <li>
                <p>Розробка та впровадження програм розвитку персоналу</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Законодавство в області праці</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 4</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Основи трудового законодавства та знання правил праці</p>
              </li>
              <li>
                <p>
                  Врахування етичних та юридичних аспектів управління персоналом
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Комунікаційні навички</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 5</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Здатність ефективно спілкуватися як усередині команди HR, так
                  і з іншими відділами
                </p>
              </li>
              <li>
                <p>Вміння вести переговори та розв'язувати конфлікти</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Основи HR-аналітики</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 6</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Використання аналітичних інструментів для оцінки ефективності
                  HR-процесів
                </p>
              </li>
              <li>
                <p>
                  Аналіз даних та подання рекомендацій для вдосконалення
                  стратегій управління персоналом
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Планування та управління бюджетом</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 7</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Розуміння фінансових аспектів управління HR</p>
              </li>
              <li>
                <p>Планування та моніторинг бюджету HR-відділу</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="8"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>
              Організація навчань та інтеграція новачків
            </h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 8</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Розробка та впровадження програм орієнтації та навчання для
                  нових працівників
                </p>
              </li>
              <li>
                <p>Підтримка процесу інтеграції новачків у команду</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="9"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Технології у сфері HR</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 9</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Використання HR-систем, соціальних мереж та інших технологій
                  для оптимізації роботи HR-процесів
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="10"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Розуміння бізнес-процесів</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 1</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Розуміння стратегії та цілей компанії, а також взаємозв'язку
                  HR з іншими відділами
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="11"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Основи психології в організації</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 11</span>
              <span className={s.weeksLabel}>2 неділі</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>
                  Розуміння основ психології та її впливу на організаційну
                  культуру та клімат
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
    </Accordion>
  );
}
