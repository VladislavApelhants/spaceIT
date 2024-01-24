import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>
          Розробка клієнтської частини (Front-end):
        </h3>
        <p className={s.learn_description}>
          - Освоєння HTML, CSS та JavaScript для створення та оформлення
          веб-сторінок. <br />- Використання популярних фреймворків та бібліотек
          для створення динамічних та ефективних інтерфейсів користувача.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Взаємодія між клієнтом та сервером:</h3>
        <p className={s.learn_description}>
          - Створення та використання API для ефективної комунікації між
          клієнтом та сервером. <br />- Розробка навичок використання та
          тестування різних HTTP-методів, обробка запитів та відповідей.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>Робота з базами даних:</h3>
        <p className={s.learn_description}>
          - Опанування роботи з реляційними та нереляційними базами даних.
          <br />- Розуміння SQL для роботи з реляційними базами даних.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>
          Робота із серверною частиною (Back-end):
        </h3>
        <p className={s.learn_description}>
          - Вивчення мов програмування для серверного коду
          <br />- Розробка серверних додатків та API, використовуючи фреймворки.
        </p>
      </li>
    </ul>
  );
}
