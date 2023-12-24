"use client";
import { useState } from "react";

import { ModalCall } from "../Modals/ModalCall/ModalCall";

import s from "./button.module.scss";

export default function Button({ text, className, courseName = "", endpoint }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className={s[className]} onClick={toggleModal}>
        {text}
      </button>

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
