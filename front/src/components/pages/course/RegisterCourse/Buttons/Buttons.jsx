"use client";
import Image from "next/image";
import { useState } from "react";
import { ModalCall } from "@/components/common/Modals/ModalCall/ModalCall";
import { useLockBodyScroll } from "react-use";
import { endpoints } from "@/services/serverAPI";
import s from "./styles.module.scss";

export function Buttons({ children }) {
  return <div className={s.buttons}>{children}</div>;
}

export function ButtonCall() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
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
        submitBtnText="зателефонувати"
        endpoint={endpoints.callback}
        title="замовити дзвінок"
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
