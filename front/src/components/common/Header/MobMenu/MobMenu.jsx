import s from "./mobMenu.module.scss";
import Button from "../../Button/Button";
export default function MobMenu({ isOpen }) {
  return (
    isOpen && (
      <div className={s.mobMenu}>
        <div className={s.mob_wrapper}>
          <div className={s.mob_menu_content}>
            <h2 className={s.mob_menu_title}>
              ПОЧНІТЬ ВАШУ КОСМІЧНУ ПРИГОДУ У СВІТІ ІТ-СФЕРИ
            </h2>
            <p className={s.mob_menu_description}>
              Долучайтесь до нашої ІТ-школи та гарантуйте собі працевлаштування
              в провідних компаніях
            </p>
            <Button text="Долучитись" className={s.mob_menu_btn} />
          </div>
          <div className={s.star_container}></div>
        </div>

        <div className={`${s.mob_rectangle} ${s.mob_rectangle_top}`}></div>
        <div className={`${s.mob_rectangle} ${s.mob_rectangle_bottom}`}></div>
      </div>
    )
  );
}
