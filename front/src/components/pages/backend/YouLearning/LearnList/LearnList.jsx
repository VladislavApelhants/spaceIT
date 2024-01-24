import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>
          Мови програмування для серверної розробки:
        </h3>
        <p className={s.learn_description}>
          - Освоєння мов програмування, таких як Python, JavaScript (з
          використанням Node.js), які часто використовуються для написання
          серверного коду. Важливо вивчити та розуміти синтаксис, структуру
          коду, та основні бібліотеки.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Системи управління базами даних:</h3>
        <p className={s.learn_description}>
          - Розуміння основ розробки баз даних, створення таблиць, запитів SQL
          та індексації.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>Веб-фреймворки для Back-end розробки:</h3>
        <p className={s.learn_description}>
          - Освоєння веб-фреймворків, таких як Express для Node.js. Ці
          фреймворки допомагають швидко створювати ефективні та безпечні
          серверні додатки.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>API та взаємодія з Front-end:</h3>
        <p className={s.learn_description}>
          - Навчання принципам створення API для взаємодії з клієнтською
          частиною веб-додатка. <br /> - Розуміння підходів до роботи з
          HTTP-методами, обробки запитів та відповідей.
        </p>
      </li>
    </ul>
  );
}
