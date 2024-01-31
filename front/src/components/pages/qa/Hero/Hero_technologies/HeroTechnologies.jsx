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
          {/* <svg width={28} height={28} className={s.techno_icon}>
            <use href="/icons/sprite.svg#icon-figma"></use>
          </svg> */}

          <h4 className={s.techno_item_title}>Jira</h4>
        </li>
        <li className={s.techno_item}>
          {/* <svg width={28} height={28} className={s.techno_icon}>
            <use href="/icons/sprite.svg#icon-photoshop"></use>
          </svg> */}
          <h4 className={s.techno_item_title}>Postman</h4>
        </li>
        <li className={s.techno_item}>
          {/* <svg width={28} height={28} className={s.techno_icon}>
            <use href="/icons/sprite.svg#icon-llustrator"></use>
          </svg> */}
          <h4 className={s.techno_item_title}>TestRail</h4>
        </li>
      </ul>
    </div>
  );
}
