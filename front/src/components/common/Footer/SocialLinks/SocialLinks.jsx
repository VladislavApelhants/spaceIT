import Image from "next/image";

import s from "./styles.module.scss";

export function SocialLinks() {
  return (
    <div className={s.socialWrapper}>
      <Image
        src="/icons/logo.svg"
        width={104}
        height={47}
        alt="logo"
        className={s.logo}
      />

      <ul className={s.socialList}>
        <li>
          <a href="#" target="_blank">
            <Image
              src="/icons/social-icons/instagram.svg"
              width={104}
              height={47}
              alt="instagram"
              className={s.socialIcon}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image
              src="/icons/social-icons/telegram.svg"
              width={104}
              height={47}
              alt="telegram"
              className={s.socialIcon}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image
              src="/icons/social-icons/youtube.svg"
              width={104}
              height={47}
              alt="youtube"
              className={s.socialIcon}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image
              src="/icons/social-icons/facebook.svg"
              width={104}
              height={47}
              alt="facebook"
              className={s.socialIcon}
            />
          </a>
        </li>
        <li>
          <a href="#" target="_blank">
            <Image
              src="/icons/social-icons/linkedin.svg"
              width={104}
              height={47}
              alt="linkedin"
              className={s.socialIcon}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
