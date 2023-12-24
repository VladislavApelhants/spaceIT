"use client";
import { useState } from "react";
import { useLockBodyScroll } from "react-use";
import { ModalCall } from "../../Modals/ModalCall/ModalCall";

import { endpoints } from "@/services/callBackAPI";

import s from "./styles.module.scss";

export function Buttons({ children }) {
  return <div className={s.buttons}>{children}</div>;
}

export function ButtonCall() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  useLockBodyScroll(isOpen);

  return (
    <>
      <button
        type="button"
        className={`${s.btn} ${s.btnCall}`}
        onClick={toggleModal}
      >
        замовити дзвінок
      </button>
      <ModalCall
        isOpen={isOpen}
        toggleModal={toggleModal}
        endpoint={endpoints.callback}
        title="замовити дзвінок"
        subtitle="Залиште вашу контактну інформацію і ми надамо відповідь на всі ваші питання"
        submitBtnText="зателефонувати"
      />
    </>
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
