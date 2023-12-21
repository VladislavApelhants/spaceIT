"use client";
import { useState } from "react";

import { ModalCall } from "../../Modals/ModalCall/ModalCall";

import s from "./styles.module.scss";

export function Buttons({ children }) {
  return <div className={s.buttons}>{children}</div>;
}

export function ButtonCall() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        type="button"
        className={`${s.btn} ${s.btnCall}`}
        onClick={toggleModal}
      >
        замовити дзвінок
      </button>
      {isOpen && <ModalCall isOpen={isOpen} toggleModal={toggleModal} />}
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
