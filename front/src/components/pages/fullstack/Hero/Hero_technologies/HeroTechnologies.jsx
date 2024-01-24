import Title from "@/components/common/Title/Title";
import Image from "next/image";
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
            src="/pages/icons-tech/html.png"
            width={18}
            height={18}
            alt="html icon"
          />
          <h4 className={s.techno_item_title}>HTML</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src="/pages/icons-tech/js.png"
            width={18}
            height={18}
            alt="html icon"
          />
          <h4 className={s.techno_item_title}>JavaScript</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src="/pages/icons-tech/nest.png"
            width={18}
            height={18}
            alt="html icon"
          />
          <h4 className={s.techno_item_title}>NestJS</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src="/pages/icons-tech/ts.png"
            width={18}
            height={18}
            alt="html icon"
          />
          <h4 className={s.techno_item_title}>TypeScript</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src="/pages/icons-tech/postman.png"
            width={18}
            height={18}
            alt="html icon"
          />
          <h4 className={s.techno_item_title}>Postman</h4>
        </li>
        <li className={s.techno_item}>
          <Image
            src="/pages/icons-tech/node.png"
            width={18}
            height={18}
            alt="html icon"
          />
          <h4 className={s.techno_item_title}>Node.js</h4>
        </li>
      </ul>
    </div>
  );
}
