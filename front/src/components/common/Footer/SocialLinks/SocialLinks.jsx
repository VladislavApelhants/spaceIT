import Image from "next/image";
import Link from "next/link";
import s from "./styles.module.scss";
import SocialList from "../../SocialList/SocialList";

export function SocialLinks() {
  return (
    <div className={s.socialWrapper}>
      <Link href="#" className={s.logo}>
        <Image src="/icons/logo.svg" width={104} height={47} alt="logo" />
      </Link>
      <SocialList
        socialList="footer_socialList"
        socialLink="footer_socialLink"
        socialIcon="footer_socialIcon"
      />
    </div>
  );
}
