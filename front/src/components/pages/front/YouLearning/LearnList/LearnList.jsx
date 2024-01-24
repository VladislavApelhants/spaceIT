import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>Розробка веб-сторінок:</h3>
        <p className={s.learn_description}>
          - Освоєння HTML для створення структури веб-сторінок.
          <br />
          - Вивчення CSS для стилізації та оформлення елементів веб-інтерфейсу.
          <br />- Навчання адаптивного дизайну для забезпечення коректного
          відображення на різних пристроях.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Програмування на JavaScript:</h3>
        <p className={s.learn_description}>
          - Вивчення основ JavaScript для взаємодії з елементами сторінки.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>
          Робота з фреймворками та бібліотеками:
        </h3>
        <p className={s.learn_description}>
          - Освоєння популярних фреймворків, таких як React.
          <br />
          - Розробка компонентів та взаємодія з ними в межах обраного
          фреймворку.
          <br />- Використання бібліотек для швидкого створення стилізованих
          елементів інтерфейсу.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>Відладка та оптимізація коду:</h3>
        <p className={s.learn_description}>
          - Навчання відладки коду в інструментах розробника браузера.
          <br />
          - Розуміння базових принципів оптимізації коду для забезпечення
          ефективної роботи веб-сторінок.
          <br />- Використання інструментів для вимірювання продуктивності та
          виправлення можливих недоліків.
        </p>
      </li>
    </ul>
  );
}
