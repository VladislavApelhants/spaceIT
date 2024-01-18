import Link from "next/link";
import s from "./linkCourse.module.scss";

export default function LinkCourse({ link }) {
  return (
    <Link
      href={link}
      className={s.button}
      aria-label="Посилання на сторінку курса"
    >
      <svg className={s.link_icon}>
        <use href="/icons/sprite.svg#arrow-up-to-right"></use>
      </svg>
    </Link>
  );
}
