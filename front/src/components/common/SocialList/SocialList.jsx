import s from "./styles.module.scss";

export default function SocialList({ socialList, socialLink, socialIcon }) {
  return (
    <ul className={s[socialList]}>
      <li>
        <a href="#" target="_blank" className={s[socialLink]}>
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-instagram" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className={s[socialLink]}>
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-telegram" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className={s[socialLink]}>
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-youtube" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className={s[socialLink]}>
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-facebook" />
          </svg>
        </a>
      </li>
      <li>
        <a href="#" target="_blank" className={s[socialLink]}>
          <svg className={s[socialIcon]}>
            <use href="/icons/sprite.svg#icon-linkedin" />
          </svg>
        </a>
      </li>
    </ul>
  );
}
