import Link from "next/link";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <Link href="/">Головна</Link>
        </li>
        <li>
          <Link href="/about">Про нас</Link>
        </li>
        <li>
          <Link href="/contact_us">Контакти</Link>
        </li>
      </ul>
    </header>
  );
};

export { Header };
