"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import s from "./style.module.scss";

export function FaqAccordion() {
  const defaultContent =
    "ОписОп исО писО писО писОп исОп исОписОп ЫисОпи сОписОпи сОпи сОп исОпис ОписОп исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис ОписОп исО писО писО писОп исОп исОписОп ЫисОпи сОписОпи сОпи сОп исОпис ОписОп исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОписОписОп исО писО писО писОп исОп исОписОп ЫисОпи сОписОпи сОпи сОп исОпис ОписОп исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОписОписОп исО писО писО писОп исОп исОписОп ЫисОпи сОписОпи сОпи сОп исОпис ОписОп исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис исОпис ОписО писОп исОписОп исОп исО писОп исО пис ОписО писОпис";

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
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 1"
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 1"
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 1"
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 1"
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 1"
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Accordion 1"
        title="Frequently asked question"
      >
        {defaultContent}
      </AccordionItem>
    </Accordion>
  );
}
