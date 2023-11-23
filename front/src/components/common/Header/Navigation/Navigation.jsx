"use client";
import Link from "next/link";
import s from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

export default function Navigation({ className: { nav, link, list }, active }) {
  const pathname = usePathname();
  const chekActive = (path) => (pathname === path ? s.active : "");

  return (
    <nav className={active ? `${s[nav]} ${s.isOpen}` : s[nav]}>
      <ul className={`${s[list]}`}>
        <li>
          <Link href="/" className={`${s[link]} ${chekActive("/")}`}>
            Головна
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${s[link]} ${chekActive("/about")}`}>
            Про нас
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${s[link]} ${chekActive("/contact")}`}
          >
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
}
