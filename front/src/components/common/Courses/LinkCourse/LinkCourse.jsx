import Link from "next/link";
import s from "./button.module.scss";
import Image from "next/image";
export default function LinkCourse() {
  return (
    <Link href="/course" className={s.button}>
      <svg className={s.link_icon}>
        <use href="/icons/sprite.svg#arrow-up-to-right"></use>
      </svg>
    </Link>
  );
}
