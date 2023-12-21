import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./sidebar.module.scss";
import Link from "next/link";
export default function Sidebar() {
  return (
    <div className={s.raleway}>
      <aside className={s.sidebar}>
        <nav>
          <ul className={s.sidebar_list}>
            <li className={s.sidebar_nav_item}>
              <Link href="#about" className={s.sidebar_nav_link}>
                Про курс
              </Link>
            </li>
            <li className={s.sidebar_nav_item}>
              <Link href="#teachers" className={s.sidebar_nav_link}>
                Викладач
              </Link>
            </li>
            <li className={s.sidebar_nav_item}>
              <Link href="#prog" className={s.sidebar_nav_link}>
                Програма
              </Link>
            </li>
            <li className={s.sidebar_nav_item}>
              <Link href="#learn" className={s.sidebar_nav_link}>
                Про навчання
              </Link>
            </li>
            <li className={s.sidebar_nav_item}>
              <Link href="#work" className={s.sidebar_nav_link}>
                Працевлаштування
              </Link>
            </li>
            <li className={s.sidebar_nav_item}>
              <Link
                href="#register"
                className={`${s.register} ${s.sidebar_nav_link}`}
              >
                Запис на курс
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
}
