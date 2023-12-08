"use client";
import Image from "next/image";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import s from "./styles.module.scss";
export function TechnologyAccordion() {
  return (
    <Tabs
      className={s.tabs}
      defaultFocus={true}
      selectedTabPanelClassName={s.activeTabPanel}
    >
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
            ОписОп исОпи сОпис Оп исОпис ОписОпис ОписОписОпи сО писОписО писОпи
            сОп исО исОпи сОписОп исОписОпис Оп исОпис ОписОп исОпис Опис Оп
            исОп исОп исОпис
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
            Figma
          </span>
          <p>
            ОписОп исОпи сОпис Оп исОпис ОписОпис ОписОписОпи сО писОписО писОпи
            сОп исО исОпи сОписОп исОписОпис Оп исОпис ОписОп исОпис Опис Оп
            исОп исОп исОпис
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
            Figma
          </span>
          <p>
            ОписОп исОпи сОпис Оп исОпис ОписОпис ОписОписОпи сО писОписО писОпи
            сОп исО исОпи сОписОп исОписОпис Оп исОпис ОписОп исОпис Опис Оп
            исОп исОп исОпис
          </p>
        </div>
      </TabPanel>
    </Tabs>
  );
}
