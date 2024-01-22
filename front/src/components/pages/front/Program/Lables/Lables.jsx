import s from "./styles.module.scss";

export function Labels({ numberOfLessons, numberOfTasks }) {
  return (
    <ul className={s.iconsList}>
      <li className={s.iconsListItem}>
        <svg className={s.iconsListItemIcon}>
          <use href="/icons/sprite.svg#icon-lesson"></use>
        </svg>
        {numberOfLessons}
      </li>
      <li className={s.iconsListItem}>
        <svg className={s.iconsListItemIcon}>
          <use href="/icons/sprite.svg#icon-task-list"></use>
        </svg>
        {numberOfTasks}
      </li>
    </ul>
  );
}
