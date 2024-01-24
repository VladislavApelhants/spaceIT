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
              src="/pages/icons-tech/figma.png"
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
              src="/pages/icons-tech/nest.png"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          NestJS
        </Tab>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          <span className={s.headerIcon}>
            <Image
              src="/pages/icons-tech/postman.png"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          Postman
        </Tab>
      </TabList>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/pages/icons-tech/figma.png"
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
              src="/pages/icons-tech/nest.png"
              width={24}
              height={24}
              alt="figma logo"
            />
            NestJS
          </span>
          <p>
            NestJS — фреймворк для створення серверних додатків Node.js. Це
            просте середовище з чіткою архітектурою і широкими можливостями.
            Nest.JS створена для розробки вимогливих і нестандартних систем,
            містить у коробці все необхідне, щоб запустити проєкт, але при цьому
            підтримує інтеграцію будь-яких компонентів, бібліотек і модулів.
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/pages/icons-tech/postman.png"
              width={24}
              height={24}
              alt="figma logo"
            />
            Postman
          </span>
          <p>
            Postman - це інструмент, який використовується для тестування та
            взаємодії з API. Він надає функції створення запитів, авторизації,
            налагодження, тестування та співпраці. Що робить його широкий
            функціонал необхідним для розробників і команд, що працюють з API.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
