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
          HRIS
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
          ATS
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
          Performance Management Software
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
            HRIS
          </span>
          <p>
            HRIS — це програма, яка дозволяє збирати, зберігати та аналізувати
            дані про співробітників. Вона включає в себе такі функції, як
            управління персональними даними, відслідковування робочого часу,
            оплати праці, адміністрування відпусток та інші HR-процеси. HRIS
            спрощує обробку та аналіз даних, допомагає автоматизувати рутинні
            завдання та підвищує ефективність управління персоналом.' Applicant
            Tracking System (ATS):
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
            ATS
          </span>
          <p>
            Управління процесом рекрутингу та відбору. ATS допомагає вести
            процес рекрутингу, включаючи публікацію вакансій, отримання резюме,
            управління кандидатами та проведення співбесід. Він дозволяє
            HR-спеціалістам ефективно оцінювати та обробляти кандидатів, стежити
            за статусами вакансій та взаємодіяти зі всіма учасниками процесу
            рекрутингу.
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
            Performance Management Software
          </span>
          <p>
            Оцінка та управління результативністю. Програми управління
            результативністю дозволяють визначати та відстежувати цілі
            співробітників, проводити регулярні оцінки та обговорення в рамках
            процесу управління перформансом. Вони можуть включати інструменти
            для визначення KPI (ключових показників ефективності), надання
            обратної зв'язку, розвитку кар'єри та планування навчання. Ці
            програми сприяють покращенню ефективності та розвитку персоналу.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
