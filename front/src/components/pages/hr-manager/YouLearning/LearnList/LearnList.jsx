import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>HR-стратегія та планування:</h3>
        <p className={s.learn_description}>
          - Розробка та впровадження стратегій управління персоналом, які
          відповідають стратегічним цілям компанії.
          <br />- Уміння планувати та координувати дії з найму, оцінки
          персоналу, розвитку та утримання талантів.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>Процеси найму та відбору:</h3>
        <p className={s.learn_description}>
          - Оволодіння методами ефективного пошуку та відбору кандидатів для
          різних позицій.
          <br />- Вивчення та впровадження кращих практик у проведенні
          співбесід, тестуванні та оцінці кандидатів.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>
          Управління взаємовідносинами та корпоративною культурою:
        </h3>
        <p className={s.learn_description}>
          - Розбудова атмосфери взаємної довіри та підтримки серед команди.
          <br />- Створення та підтримка корпоративної культури, що відображає
          цінності компанії.
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>Комунікаційні навички:</h3>
        <p className={s.learn_description}>
          - Розвиток ефективних навичок спілкування зі співробітниками на різних
          рівнях.
          <br />- Вивчення та впровадження стратегій збору та обробки зворотного
          зв'язку від співробітників.
        </p>
      </li>
    </ul>
  );
}
