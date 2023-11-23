"use client";
import Link from "next/link";
import s from "./Navigation.module.scss";
import { usePathname } from "next/navigation";

export default function Navigation({ className }) {
  const pathname = usePathname();
  const chekActive = (path) => (pathname === path ? s.active : "");

  return (
    <nav className={className}>
      <ul className={`${s.nav_list}`}>
        <li>
          <Link href="/" className={`${s.nav_link} ${chekActive("/")}`}>
            Головна
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${s.nav_link} ${chekActive("/about")}`}
          >
            Про нас
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={`${s.nav_link} ${chekActive("/contact")}`}
          >
            Контакти
          </Link>
        </li>
      </ul>
    </nav>
  );
}
