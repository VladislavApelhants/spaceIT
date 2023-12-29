import Link from "next/link";
import s from "./contactsBox.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function ContactsBox() {
  return (
    <div className={s.contact_box}>
      <div className={s.contacts_list}>
        <p>
          <Link href="/">
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-majesticons_mail"></use>
            </svg>
            <span>info@space.it</span>
          </Link>
        </p>
        <p>
          <Link href="/">
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-phone-fill"></use>
            </svg>
            <span>88005553535</span>
          </Link>
        </p>
        <p>
          <svg width={28} height={28}>
            <use href="/icons/sprite.svg#icon-time"></use>
          </svg>
          <span>з 09:00 до 21:00 (без вихідних)</span>
        </p>
      </div>
      <div className="social_box">
        <p>ПІДПИСУЙТЕСЬ НА НАШІ СОЦІАЛЬНІ МЕРЕЖІ</p>
        <SocialList
          socialList="contacts_pg_list"
          socialLink="contacts_pg_link"
          socialIcon="contacts_pg_icon"
        />
      </div>
    </div>
  );
}
