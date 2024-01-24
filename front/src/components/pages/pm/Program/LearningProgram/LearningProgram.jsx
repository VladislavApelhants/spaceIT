"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import s from "./styles.module.scss";

export function LearningProgram() {
  const defaultContent = (
    <div className={s.contentWrapper}>
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
            <h3 className={s.title}>Базові поняття управління проектами:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 1</span>
              <span className={s.weeksLabel}>2 тиждня</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Знання про ключові етапи циклу проекту</p>
              </li>
              <li>
                <p>
                  Освоєння процесів планування, виконання та контролю проектів.
                </p>
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
            <h3 className={s.title}>Методології управління проектами:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 2</span>
              <span className={s.weeksLabel}>2 тиждня</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Розуміння Agile (Scrum, Kanban) та Waterfall методологій</p>
              </li>
              <li>
                <p>
                  Основи використання інструментів, таких як Jira або Trello
                </p>
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
            <h3 className={s.title}>основні інструменти figma</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 3</span>
              <span className={s.weeksLabel}>2 тиждня</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Комунікаці методики:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 4</span>
              <span className={s.weeksLabel}>2 тиждня</span>
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
                  Вміння ефективно спілкуватися з різними зацікавленими
                  сторонами
                </p>
              </li>
              <li>
                <p>Здатність складати звіти та презентації</p>
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
            <h3 className={s.title}>Управління ресурсами та витратами:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 5</span>
              <span className={s.weeksLabel}>2 тиждня</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Знання основ бюджетування та фінансового планування</p>
              </li>
              <li>
                <p>
                  Вміння ефективно розподіляти ресурси для досягнення мети
                  проекту
                </p>
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
            <h3 className={s.title}>Технічні знання:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 6</span>
              <span className={s.weeksLabel}>2 тиждня</span>
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
                  Основи роботи з проектними інструментами (Microsoft Project,
                  Asana тощо)
                </p>
              </li>
              <li>
                <p>
                  Розуміння технічних термінів, які можуть виникнути в роботі з
                  інженерами та іншими членами команди
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
            <h3 className={s.title}>Управління ризиками:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 7</span>
              <span className={s.weeksLabel}>2 тиждня</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Здатність ідентифікувати та аналізувати ризики проекту</p>
              </li>
              <li>
                <p>Розробка стратегій управління ризиками</p>
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
            <h3 className={s.title}>Робота в команді:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 8</span>
              <span className={s.weeksLabel}>2 тиждня</span>
            </div>
            <span className={s.indicator}></span>
          </div>
        }
      >
        {
          <div className={s.contentWrapper}>
            <ul className={s.list}>
              <li>
                <p>Вміння створювати ефективні робочі групи</p>
              </li>
              <li>
                <p>Здатність мотивувати та управляти командою</p>
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
            <h3 className={s.title}>Оцінка та вдосконалення процесів:</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 9</span>
              <span className={s.weeksLabel}>2 тиждня</span>
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
                  Аналіз та оцінка результатів проектів для подальшого
                  вдосконалення процесів.
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
    </Accordion>
  );
}
