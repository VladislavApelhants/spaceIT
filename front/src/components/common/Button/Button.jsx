"use client";
import { useState } from "react";
import { useLockBodyScroll } from "react-use";

import { ModalCall } from "../Modals/ModalCall/ModalCall";

import s from "./button.module.scss";

export default function Button({ text, className, courseName = "" }) {
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

      {courseName ? (
        <ModalCall
          isOpen={isOpen}
          toggleModal={toggleModal}
          endpoint="https:example.com"
          title="записатися на курс"
          subtitle="Залиште вашу контактну інформацію і ми надамо відповідь на всі ваші питання"
          submitBtnText="зателефонувати"
          courseName={courseName}
          isEmail={true}
        />
      ) : (
        <ModalCall
          isOpen={isOpen}
          toggleModal={toggleModal}
          endpoint="https:example.com"
          title="замовити дзвінок"
          subtitle="Залиште вашу контактну інформацію і ми надамо відповідь на всі ваші питання"
          submitBtnText="зателефонувати"
        />
      )}
    </>
  );
}
