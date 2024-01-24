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
            src={"/pages/front-end/hero/html.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>HTML</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/front-end/hero/js.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>JavaScript</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/front-end/hero/css.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>CSS</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/front-end/hero/figma.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>Figma</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/front-end/hero/react.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>React</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src={"/pages/front-end/hero/ts.png"}
            width={28}
            height={28}
            className={s.techno_icon}
          />
          <h4 className={s.techno_item_title}>TypeScript</h4>
        </li>
      </ul>
    </div>
  );
}
