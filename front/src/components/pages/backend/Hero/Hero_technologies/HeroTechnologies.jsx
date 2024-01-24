import Image from "next/image";
import Title from "@/components/common/Title/Title";

import s from "./hero_technologies.module.scss";

export default function HeroTechnologies() {
  return (
    <div className={s.hero_box_technologies}>
      <Title
        text="ТЕХНОЛОГІЇ, ЯКІ ВИ ОПАНУЄТЕ"
        className={"courses_hero_tech_title"}
        tagName={"h3"}
      />
      <ul className={s.technologies_list}>
        <li className={s.techno_item}>
          <Image
            src={"/pages/back-end/hero/nodejs.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          {/* <svg width={28} height={28} className={s.techno_icon}>
            <use href="/pages/back-end/hero/nodejs.png"></use>
          </svg> */}
          <h4 className={s.techno_item_title}>Node.js</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/back-end/hero/nestjs.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>NestJS</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/back-end/hero/sql.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>SQL</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/back-end/hero/nosql.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>No SQL</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/back-end/hero/postman.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>Postman</h4>
        </li>
      </ul>
    </div>
  );
}
