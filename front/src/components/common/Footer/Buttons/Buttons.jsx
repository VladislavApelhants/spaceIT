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
      <svg className={s.messageIcon}>
        <use href="/icons/sprite.svg#icon-message" />
      </svg>
      потрібна допомога?
      <br /> залиште повідомлення
    </button>
  );
}
