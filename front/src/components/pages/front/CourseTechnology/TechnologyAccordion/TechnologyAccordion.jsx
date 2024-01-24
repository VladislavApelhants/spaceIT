"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import s from "./styles.module.scss";
export function TechnologyAccordion() {
  return (
    <Tabs className={s.tabs} selectedTabPanelClassName={s.activeTabPanel}>
      <TabList className={s.tabsList}>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          <span className={s.headerIcon}>
            <Image
              src="/pages/front-end/technologyAccordion/figma.png"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          Figma
        </Tab>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          <span className={s.headerIcon}>
            <Image
              src="/pages/front-end/technologyAccordion/react.png"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          React
        </Tab>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          <span className={s.headerIcon}>
            <Image
              src="/pages/front-end/technologyAccordion/js.png"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          JavaScript
        </Tab>
      </TabList>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/pages/front-end/technologyAccordion/figma.png"
              width={24}
              height={24}
              alt="figma logo"
            />
            Figma
          </span>
          <p>
            Figma хмарний багатоплатформовий сервіс, що володіє потужним
            інструментарієм для створення прототипів та макетів з яким можна
            працювати безпосередньо в браузері. І це лише одне з важливих
            переваг платформи.
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/pages/front-end/technologyAccordion/react.png"
              width={24}
              height={24}
              alt="figma logo"
            />
            Figma
          </span>
          <p>
            React - це бібліотека для створення інтерфейсів користувача (UI).
            Вона дозволяє розробникам побудувати ефективні та масштабовані
            веб-додатки, які оновлюються динамічно при зміні даних, без
            перезавантаження сторінки.
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/pages/front-end/technologyAccordion/js.png"
              width={24}
              height={24}
              alt="figma logo"
            />
            Figma
          </span>
          <p>
            JavaScript - високорівнева, мова програмування, яка використовується
            для розробки динамічних веб-сайтів і веб-додатків. Вона є однією з
            найпоширеніших та найбільш використовуваних мов програмування на
            сучасному етапі розвитку веб-технологій
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
