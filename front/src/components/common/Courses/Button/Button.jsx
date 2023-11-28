import s from "./button.module.scss";
import Image from "next/image";
export default function Button() {
  return (
    <button className={s.button}>
      <Image
        src="/icons/arrow/arrow-up-to-right.svg"
        width={18}
        height={18}
        alt="arrow ut to right"
      />
    </button>
  );
}
