import s from "./topDecor.module.scss";
import Image from "next/image";
import Ellipse from "@/components/common/Ellipse/Ellipse";

export default function TopDecor() {
  return (
    <>
      <Image
        src="/icons/unionAboutUs.svg"
        width={1970}
        height={1052}
        alt="декоративне зображення коло"
        className={s.hero_union}
      />
      <Ellipse className="about_hero" />
    </>
  );
}
