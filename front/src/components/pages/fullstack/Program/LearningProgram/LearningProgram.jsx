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
            <h3 className={s.title}>Основи HTML/CSS</h3>
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
                <p>Розуміння структури HTML-документа.</p>
              </li>
              <li>
                <p>Знання CSS для стилізації і вигляду сторінок.</p>
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
            <h3 className={s.title}>оJavaScript та ES6+</h3>
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
                <p>снови синтаксису JavaScript.</p>
              </li>
              <li>
                <p>
                  Знання ES6+ функціональностей (стрілочні функції,
                  деструктуризація, async/await тощо).
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
            <h3 className={s.title}>Робота з DOM</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 3</span>
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
                  Вміння маніпулювати елементами сторінки через Document Object
                  Model.
                </p>
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
            <h3 className={s.title}>Вивчення бібліотек та фреймворків</h3>
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
                <p>Знання базових бібліотек</p>
              </li>
              <li>
                <p>Освоєння фреймворків</p>
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
            <h3 className={s.title}>Респонсивний дизайн</h3>
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
                <p>Розуміння принципів респонсивного веб-дизайну.</p>
              </li>
              <li>
                <p>
                  Використання медіазапитів для адаптації сторінок під різні
                  пристрої.
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
            <h3 className={s.title}>Робота з Git</h3>
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
                  Основи використання системи контролю версій Git для спільної
                  роботи та відстеження змін у коді.
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
            <h3 className={s.title}>Основи архітектури веб-додатків</h3>
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
                <p>
                  Розуміння основних архітектурних патернів, таких як MVC або
                  MVVM.
                </p>
              </li>
              <li>
                <p>Освоєння структури проектів.</p>
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
            <h3 className={s.title}>Взаємодія з API</h3>
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
                <p>Використання та розуміння HTTP-запитів.</p>
              </li>
              <li>
                <p>Робота з RESTful API.</p>
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
            <h3 className={s.title}>Основи тестування коду</h3>
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
                  Знання основ тестування, таких як юніт-тести, інтеграційні
                  тести.
                </p>
              </li>
              <li>
                <p>
                  Використання фреймворків для тестування (наприклад, Jest для
                  React).
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
            <h3 className={s.title}>Основи веб-дизайну</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 10</span>
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
                  Знання основних принципів веб-дизайну (кольори, шрифти,
                  композиція).
                </p>
              </li>
              <li>
                <p>Розуміння UX/UI принципів.</p>
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
            <h3 className={s.title}>Робота з інструментами розробки</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 11</span>
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
                <p>Використання інструментів розробки браузера (DevTools).</p>
              </li>
              <li>
                <p>Освоєння систем збірки (наприклад, Webpack).</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="12"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Мови програмування</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 12</span>
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
                  Одна або декілька мов програмування для розробки серверної
                  частини (наприклад, Python, Java, PHP, Ruby, Node.js)
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="13"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Основи баз даних</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 13</span>
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
                  Знання реляційних баз даних (наприклад, MySQL, PostgreSQL,
                  SQLite).
                </p>
              </li>
              <li>
                <p>Основи мови SQL для роботи з базами даних.</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="14"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Навички роботи з API</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 14</span>
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
                <p>Розуміння принципів роботи та розробка API.</p>
              </li>
              <li>
                <p>Використання та створення RESTful API.</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="15"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Основи веб-серверів</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 15</span>
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
                  Розуміння, як працюють веб-сервери (наприклад, Apache, Nginx).
                </p>
              </li>
              <li>
                <p>Конфігурування та взаємодія з веб-серверами.</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="16"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Фреймворки для розробки Back End</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 16</span>
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
                  Вивчення фреймворків, які популярні для розробки Back End
                  (наприклад, Django для Python, Spring для Java, Express для
                  Node.js).
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="17"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Моделювання та міграції баз даних</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 17</span>
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
                  Розуміння та використання інструментів для моделювання баз
                  даних (наприклад, ER-діаграми).
                </p>
              </li>
              <li>
                <p>Використання міграцій для оновлення структури бази даних.</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="18"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Безпека Back End</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 18</span>
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
                  Розуміння основ безпеки веб-додатків (наприклад, обробка
                  аутентифікації, захист від SQL-ін'єкцій та інших атак).
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="19"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Робота з системами контролю версій</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 19</span>
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
                <p>Основи використання систем контролю версій, таких як Git.</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="20"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Основи роботи з іншими технологіями</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 20</span>
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
                <p>Розуміння основних протоколів (HTTP/HTTPS).</p>
              </li>
              <li>
                <p>
                  Знання роботи з іншими інструментами (наприклад, Postman для
                  тестування API).
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="21"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Оптимізація та масштабування</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 21</span>
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
                <p>Основи оптимізації Back End для високої продуктивності.</p>
              </li>
              <li>
                <p>
                  Розуміння концепцій масштабування (горизонтального та
                  вертикального).
                </p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
      <AccordionItem
        key="22"
        aria-label="Accordion 1"
        title={
          <div className={s.titleWrapper}>
            <h3 className={s.title}>Інструменти відлагодження та логування</h3>
            <div className={s.labelsWrapper}>
              <span className={s.moduleLabel}>модуль 22</span>
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
                  Використання інструментів для логування (наприклад, Log4j).
                </p>
              </li>
              <li>
                <p>Вміння відлагоджувати та виявляти помилки в коді.</p>
              </li>
            </ul>
          </div>
        }
      </AccordionItem>
    </Accordion>
  );
}
