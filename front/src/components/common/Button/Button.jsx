"use client";
import { useState } from "react";
import { useLockBodyScroll } from "react-use";
import { ToastContainer } from "react-toastify";

import { ModalCall } from "../Modals/ModalCall/ModalCall";

import s from "./button.module.scss";

export default function Button({ text, className, courseName = "", endpoint }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  useLockBodyScroll(isOpen);

  return (
    <>
      <button type="button" className={s[className]} onClick={toggleModal}>
        {text}
      </button>
      <ToastContainer />

      {courseName ? (
        <ModalCall
          isOpen={isOpen}
          toggleModal={toggleModal}
          endpoint={endpoint}
          title="замовити дзвінок"
          subtitle="Залиште вашу контактну інформацію і ми надамо відповідь на всі ваші питання"
          submitBtnText="зателефонувати"
          courseName={courseName}
          isEmail={true}
        />
      ) : (
        <ModalCall
          isOpen={isOpen}
          toggleModal={toggleModal}
          endpoint={endpoint}
          title="замовити дзвінок"
          subtitle="Залиште вашу контактну інформацію і ми надамо відповідь на всі ваші питання"
          submitBtnText="зателефонувати"
        />
      )}
    </>
  );
}
