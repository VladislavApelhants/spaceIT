import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>Створення та виконання тест-кейсів:</h3>
        <p className={s.learn_description}>
          Освоєння технік розробки ефективних тест-кейсів та їх виконання для
          перевірки функціоналу програм
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Основи тестування ПЗ:</h3>
        <p className={s.learn_description}>
          Розуміння основних принципів, підходів та методологій в області
          тестування програмного забезпечення
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>Тестування веб-додатків:</h3>
        <p className={s.learn_description}>
          Вивчення методів та інструментів для тестування веб-додатків та
          взаємодії з їхнім інтерфейсом.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>Тестування різних типів:</h3>
        <p className={s.learn_description}>
          Освоєння тестування різних аспектів програмного забезпечення,
          включаючи функціональність, продуктивність та безпеку
        </p>
      </li>
    </ul>
  );
}
