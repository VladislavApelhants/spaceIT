import Link from "next/link";

import { ButtonCall, ButtonMessage } from "../Buttons/Buttons";
import Title from "../../Title/Title";
import s from "./styles.module.scss";

export function Navigation() {
  return (
    <nav className={s.footerNav}>
      <div className={s.footerNavItem}>
        <Title text="курси" className={"footer-title"} />
        <ul className={s.list}>
          <li>
            <Link href="#">Software Engineering</Link>
          </li>
          <li>
            <Link href="#">Data Science</Link>
          </li>
          <li>
            <Link href="#">UI/UX Design</Link>
          </li>
        </ul>
      </div>
      <div className={s.footerNavItem}>
        <Title text="інформація" className={"footer-title"} />
        <ul className={s.list}>
          <li>
            <Link href="/about">Про нас</Link>
          </li>
          <li>
            <Link href="/contact">Контакти</Link>
          </li>
          <li>
            <Link href="#">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className={s.footerNavItem}>
        <Title text="додатки" className={"footer-title"} />
        <ul className={s.list}>
          <li>
            <Link href="#">Терміни та умови</Link>
          </li>
          <li>
            <Link href="#">Політика конфіденційності</Link>
          </li>
          <li>
            <Link href="#">Повернення коштів</Link>
          </li>
        </ul>
      </div>
      <div className={`${s.footerNavItem} ${s.hide}`}>
        <ButtonCall />
        <ButtonMessage />
      </div>
    </nav>
  );
}
