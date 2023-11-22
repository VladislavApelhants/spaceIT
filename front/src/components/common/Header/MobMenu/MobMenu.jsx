import s from "./mobMenu.module.scss";
import Button from "../../Button/Button";
import Container from "../../Container/Container";
export default function MobMenu({ isOpen }) {
  return (
    isOpen && (
      <div className={s.mobMenu}>
        <div className={s.mob_wrapper}>
          <ul>
            <li>qwe</li>
            <li>qwe</li>
            <li>qwe</li>
          </ul>
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
        </div>
      </div>
    )
  );
}
