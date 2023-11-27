import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.scss";

export function SocialLinks() {
  return (
    <div className={s.socialWrapper}>
      <Link href="#" className={s.logo}>
        <Image src="/icons/logo.svg" width={104} height={47} alt="logo" />
      </Link>

      <ul className={s.socialList}>
        <li>
          <a href="#" target="_blank" className={s.socialLink}>
            <svg className={s.socialIcon}>
              <use href="/icons/sprite.svg#icon-instagram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className={s.socialLink}>
            <svg className={s.socialIcon}>
              <use href="/icons/sprite.svg#icon-telegram" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className={s.socialLink}>
            <svg className={s.socialIcon}>
              <use href="/icons/sprite.svg#icon-youtube" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className={s.socialLink}>
            <svg className={s.socialIcon}>
              <use href="/icons/sprite.svg#icon-facebook" />
            </svg>
          </a>
        </li>
        <li>
          <a href="#" target="_blank" className={s.socialLink}>
            <svg className={s.socialIcon}>
              <use href="/icons/sprite.svg#icon-linkedin" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
