import s from "./learnList.module.scss";

export default function LearnList() {
  return (
    <ul className={s.learn_list}>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-star"></use>
        </svg>
        <h3 className={s.learn_title}>ЗАГОЛОВОК</h3>
        <p className={s.learn_description}>
          Опис Опис Опис Опис Опис Опис Опис Опиc Опис Опис Опис Опис Опис Опис
          Опис Опис Опис Опис Опис Опис ООпи сОпи сОпис Опис Опис Опи сОпи
          сОписО пис Оп исОпи сО пис Оп исОпи сОписО писОпи сОпи сОпис ОписО
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-moon"></use>
        </svg>
        <h3 className={s.learn_title}>ЗАГОЛОВОК</h3>
        <p className={s.learn_description}>
          Опис Опис Опис Опис Опис Опис Опис Опиc Опис Опис Опис Опис Опис Опис
          Опис Опис Опис Опис Опис Опис ООпи сОпи сОпис Опис Опис Опи сОпи
          сОписО пис Оп исОпи сО пис Оп исОпи сОписО писОпи сОпи сОпис ОписО
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-saturn"></use>
        </svg>
        <h3 className={s.learn_title}>ЗАГОЛОВОК</h3>
        <p className={s.learn_description}>
          Опис Опис Опис Опис Опис Опис Опис Опиc Опис Опис Опис Опис Опис Опис
          Опис Опис Опис Опис Опис Опис ООпи сОпи сОпис Опис Опис Опи сОпи
          сОписО пис Оп исОпи сО пис Оп исОпи сОписО писОпи сОпи сОпис ОписО
        </p>
      </li>
      <li className={s.learn_item}>
        <svg className={s.learn_icon} width={40} height={40}>
          <use href="/icons/sprite.svg#icon-rocket"></use>
        </svg>
        <h3 className={s.learn_title}>ЗАГОЛОВОК</h3>
        <p className={s.learn_description}>
          Опис Опис Опис Опис Опис Опис Опис Опиc Опис Опис Опис Опис Опис Опис
          Опис Опис Опис Опис Опис Опис ООпи сОпи сОпис Опис Опис Опи сОпи
          сОписО пис Оп исОпи сО пис Оп исОпи сОписО писОпи сОпи сОпис ОписО
        </p>
      </li>
    </ul>
  );
}
