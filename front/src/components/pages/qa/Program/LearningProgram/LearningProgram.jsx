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
            <h3 className={s.title}>База тестування:</h3>
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
                <p>Типи тестування</p>
              </li>
              <li>
                <p>Життєвий цикл тестування</p>
              </li>
              <li>
                <p>Тестова документація</p>
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
            <h3 className={s.title}>Основи програмування:</h3>
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
                <p>Основи мов програмування</p>
              </li>
              <li>
                <p>Основи роботи з командним рядком</p>
              </li>
              <li>
                <p>Розуміння базових структур даних</p>
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
            <h3 className={s.title}>Робота з базами даних:</h3>
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
                <p>Розуміння SQL</p>
              </li>
              <li>
                <p>Вміння виконувати базові запити до баз даних</p>
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
            <h3 className={s.title}>Робота з системами управління версіями:</h3>
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
                <p>Знання Git</p>
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
            <h3 className={s.title}>Принципи тестування веб-додатків:</h3>
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
                <p>Розуміння клієнт-серверної архітектури</p>
              </li>
              <li>
                <p>Основи роботи з браузерними інструментами розробника</p>
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
            <h3 className={s.title}>Принципи тестування мобільних додатків:</h3>
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
                <p>Знання основних платформ (iOS, Android)</p>
              </li>
              <li>
                <p>Основи тестування мобільних додатків</p>
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
            <h3 className={s.title}>Основи тестування безпеки:</h3>
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
                <p>Основні принципи тестування безпеки.</p>
              </li>
              <li>
                <p>Розуміння вразливостей і методів їх виявлення</p>
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
            <h3 className={s.title}>Загальні навички:</h3>
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
                <p>Основи роботи з системами слідкування (наприклад, Jira)</p>
              </li>
              <li>
                <p>
                  Вміння ефективно комунікувати та документувати свою роботу
                </p>
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
            <h3 className={s.title}>Методології розробки</h3>
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
                <p>Розуміння Agile технології</p>
              </li>
              <li>
                <p>Навички роботи за методологією аджайл</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
    </Accordion>
  );
}
