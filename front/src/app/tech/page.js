import TechSection from "@/components/pages/tech/Tech";
import s from "./page.module.scss";
import Image from "next/image";
export default function Tech() {
  return (
    <>
      {/* <Image
        src="/images/tech.png"
        width={2179}
        height={2240}
        alt="фонове зображення з планетами"
        className={s.image}
      /> */}
      {/* <div className={s.image}></div> */}
      <TechSection />
    </>
  );
}
