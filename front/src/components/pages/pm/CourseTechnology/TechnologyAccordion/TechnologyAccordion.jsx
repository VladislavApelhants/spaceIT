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
          Figma
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
          Photoshop
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
          Illustrator
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
            Microsoft Project
          </span>
          <p>
            Десктопна програма для управління проектами. Microsoft Project є
            відомим інструментом для створення та управління розкладами
            проектів. Він надає можливість створювати завдання, визначати
            терміни, встановлювати залежності, розподіляти ресурси та створювати
            графіки Ганта. Microsoft Project також дозволяє відстежувати
            виконання завдань та робити звіти про стан проекту.
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
            Asana
          </span>
          <p>
            Веб-платформа для управління проектами та задачами. Asana є
            інструментом для організації роботи команди та управління
            завданнями. Він надає можливість створювати проекти, завдання,
            устанавлювати строки виконання, призначати відповідальних та стежити
            за прогресом. Asana також дозволяє інтегрувати інші інструменти та
            сервіси для зручності роботи.
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
            Monday.com
          </span>
          <p>
            Колаборативна платформа для управління проектами та робочими
            процесами. Monday.com пропонує гнучке рішення для організації та
            відстеження робочих завдань. За допомогою таблиць та карточок,
            команди можуть легко планувати роботу, надавати коментарі,
            призначати завдання та відстежувати прогрес. Платформа також має
            можливість створення власних шаблонів для різних типів проектів.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
