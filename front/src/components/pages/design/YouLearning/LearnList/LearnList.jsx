import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>Дизайн Інтерфейсу (UI):</h3>
        <p className={s.learn_description}>
          Навчитеся створювати привабливий та ефективний інтерфейс, навчимо
          працювати з кольорами, шрифтами, іконами та компонентами для
          забезпечення користувачам зручного та естетичного досвіду
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Взаємодія користувача (UX):</h3>
        <p className={s.learn_description}>
          Опануєте методи проектування для кращої взаємодії користувачів з
          продуктом, враховуючи їхні потреби. Розробка прототипів та тестування
          їх на користувачах допоможе створити ефективний UX
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>Дослідження та аналіз:</h3>
        <p className={s.learn_description}>
          Навчимо проводити аналіз ринку, вивчати поведінку користувачів та
          враховувати тренди в індустрії для розробки продукту, що відповідає
          вимогам ринку
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>Робота з інструментами дизайну:</h3>
        <p className={s.learn_description}>
          Освоїте популярні інструменти для дизайну,які стануть для вас
          повсякденністю , що дозволить вам створювати нереальні та креативні
          проекти
        </p>
      </li>
    </ul>
  );
}
