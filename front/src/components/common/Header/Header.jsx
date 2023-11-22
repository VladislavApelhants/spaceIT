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
          <Link href="/contact">Контакти</Link>
        </li>
      </ul>

      <button type="button">записатися на курс</button>
    </header>
  );
};

export { Header };
