"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import s from "./styles.module.scss";
export function TechnologyAccordion() {
  return (
    <Tabs className={s.tabs} selectedTabPanelClassName={s.activeTabPanel}>
      <TabList className={s.tabsList}>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          {/* <span className={s.headerIcon}>
            <Image
              src="/icons/figma.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span> */}
          Jira
        </Tab>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          {/* <span className={s.headerIcon}>
            <Image
              src="/icons/photoshop.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span> */}
          Postman
        </Tab>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          {/* <span className={s.headerIcon}>
            <Image
              src="/icons/illustrator.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span> */}
          TestRail
        </Tab>
      </TabList>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            {/* <Image
              src="/icons/figma.svg"
              width={24}
              height={24}
              alt="figma logo"
            /> */}
            Jira
          </span>
          <p>
            Управління задачами та проектами. JIRA використовується для
            відстеження задач, багів, нових функцій та інших елементів проекту.
            Він надає зручний інтерфейс для спільної роботи команди, дозволяючи
            слідкувати за роботою, призначати завдання та вести журнал змін.
            JIRA часто використовується в методах розробки програмного
            забезпеченн
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            {/* <Image
              src="/icons/photoshop.svg"
              width={24}
              height={24}
              alt="figma logo"
            /> */}
            Postman
          </span>
          <p>
            Тестування API. Postman є інструментом для тестування API, що
            дозволяє створювати, редагувати та виконувати запити до
            веб-сервісів. Він надає зручний інтерфейс для надсилання різних
            видів запитів (GET, POST, PUT, DELETE) та перевірки відповідей.
            Postman також дозволяє автоматизувати тестові сценарії та
            використовувати їх для тестування згодом.
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            {/* <Image
              src="/icons/illustrator.svg"
              width={24}
              height={24}
              alt="figma logo"
            /> */}
            TestRail
          </span>
          <p>
            Управління тестовими кейсами та результатами тестування. TestRail є
            інструментом для організації та ведення тестових кейсів, планування
            тестування та відстеження результатів. З його допомогою команди QA
            можуть створювати, керувати та виконувати тестові сценарії, а також
            відстежувати прогрес тестування.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
