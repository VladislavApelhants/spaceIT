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
              src="/icons/figma.svg"
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
              src="/icons/photoshop.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          Photoshop
        </Tab>
        <Tab className={s.tab} selectedClassName={s.tabActive}>
          <span className={s.headerIcon}>
            <Image
              src="/icons/illustrator.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
          </span>
          Illustrator
        </Tab>
      </TabList>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/icons/figma.svg"
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
            переваг платформи
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/icons/photoshop.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
            Photoshop
          </span>
          <p>
            Photoshop дозволяє дизайнерам обробляти фотографії, створювати
            ілюстрації, макети та інші графічні елементи. Надає можливості для
            ретуші, кольорокорекції, об'єднання різних елементів та багато
            іншого, роблячи його потужним інструментом для дизайнерів у всьому
            світі
          </p>
        </div>
      </TabPanel>
      <TabPanel className={s.tabPanel}>
        <div className={s.tabPanelContent}>
          <span className={s.contentIcon}>
            <Image
              src="/icons/illustrator.svg"
              width={24}
              height={24}
              alt="figma logo"
            />
            Illustrator
          </span>
          <p>
            Illustrator - векторний графічний редактор, який використовується
            для створення різних видів векторної графіки. Інструмент дозволяє
            дизайнерам створювати логотипи, ілюстрації, макети та інші графічні
            елементи, які легко масштабувати без втрати якості.
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
