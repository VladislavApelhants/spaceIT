import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>Планування проекту:</h3>
        <p className={s.learn_description}>
          Розробка ефективних планів проектів з визначенням завдань, ресурсів та
          термінів.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Управління ресурсами:</h3>
        <p className={s.learn_description}>
          - Розподіл та оптимізація ресурсів для досягнення поставлених цілей
          проекту.
          <br />- Створення графіків робіт та визначення ключових моментів
          проекту.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>Комунікаційні навички:</h3>
        <p className={s.learn_description}>
          - Ефективна комунікація з усіма учасниками проекту, включаючи
          замовників, команду та інші зацікавлені сторони. <br /> - Вивчення та
          впровадження інструментів для моніторингу та звітування про стан
          проекту.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>Ризик-менеджмент:</h3>
        <p className={s.learn_description}>
          - Виявлення та аналіз потенційних ризиків, що можуть виникнути
          протягом життєвого циклу проекту.
          <br />- Розробка та виконання стратегій управління ризиками для
          мінімізації негативного впливу на проект.
        </p>
      </li>
    </ul>
  );
}
