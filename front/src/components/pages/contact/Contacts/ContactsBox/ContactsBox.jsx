import Link from "next/link";
import s from "./contactsBox.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function ContactsBox() {
  return (
    <div className={s.contact_box}>
      <div className={s.contacts_list}>
        <p>
          <Link href="/" className={s.contact_link}>
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-majesticons_mail"></use>
            </svg>
            <span className={s.contact_text}>info@space.it</span>
          </Link>
          <span className={s.elem_description}>Загальні питання</span>
        </p>
        <p>
          <Link href="/" className={s.contact_link}>
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-phone-fill"></use>
            </svg>
            <span className={s.contact_text}>88005553535</span>
          </Link>
          <span className={s.elem_description}>Контактний центр</span>
        </p>
        <p>
          <span className={s.contact_elem}>
            <svg width={28} height={28}>
              <use href="/icons/sprite.svg#icon-time"></use>
            </svg>
            <span className={s.contact_text}>
              з 09:00 до 21:00{" "}
              <span className={s.elem_decor}>(без вихідних)</span>
            </span>
          </span>
          <span className={s.elem_description}>Розклад</span>
        </p>
      </div>
      <div className="social_box">
        <p className={s.social_description}>
          ПІДПИСУЙТЕСЬ НА НАШІ СОЦІАЛЬНІ МЕРЕЖІ
        </p>
        <SocialList
          socialList="contacts_pg_list"
          socialLink="contacts_pg_link"
          socialIcon="contacts_pg_icon"
        />
      </div>
    </div>
  );
}
