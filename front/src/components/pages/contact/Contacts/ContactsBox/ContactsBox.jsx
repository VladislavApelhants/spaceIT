import Link from "next/link";
import s from "./contactsBox.module.scss";
export default function ContactsBox() {
  return (
    <div className="contact_box">
      <ul>
        <li>
          <Link href="/">
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-majesticons_mail"></use>
            </svg>
            <span>info@space.it</span>
          </Link>
        </li>
        <li>
          <Link href="/">
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-phone-fill"></use>
            </svg>
            <span>88005553535</span>
          </Link>
        </li>
      </ul>
      <p>
        <svg width={28} height={28}>
          <use href="/icons/sprite.svg#icon-time"></use>
        </svg>
        <span>з 09:00 до 21:00 (без вихідних)</span>
      </p>
    </div>
  );
}
