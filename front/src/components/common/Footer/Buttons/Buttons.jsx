import Image from "next/image";
import s from "./styles.module.scss";

export function Buttons({ children }) {
  return <div className={s.buttons}>{children}</div>;
}

export function ButtonCall() {
  return (
    <button type="button" className={`${s.btn} ${s.btnCall}`}>
      замовити дзвінок
    </button>
  );
}

export function ButtonMessage() {
  return (
    <button type="button" className={`${s.btn} ${s.btnMessage}`}>
      <Image
        src="/icons/message.svg"
        width={104}
        height={47}
        alt="logo"
        className={s.messageIcon}
      />
      потрібна допомога?
      <br /> залиште повідомлення
    </button>
  );
}
