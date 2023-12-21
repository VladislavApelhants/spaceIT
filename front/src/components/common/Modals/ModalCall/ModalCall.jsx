"use client";

import { motion } from "framer-motion";

import s from "./modalCall.module.scss";

const variantsBackdrop = {
  open: { x: 0, transition: { duration: 0.5, delay: 0.6 } },
  closed: { x: "100%", transition: { duration: 0.5, delay: 0.6 } },
};

const variantsModal = {
  open: { x: 0, transition: { duration: 0.5 } },
  closed: { x: "-200%", transition: { duration: 0.5 } },
};

export function ModalCall({ isOpen, toggleModal }) {
  return (
    <motion.div
      animate={isOpen ? "open" : "closed"}
      variants={variantsBackdrop}
      className={s.backdrop}
    >
      <motion.div variants={variantsModal} className={s.modal}>
        <button type="button" className={s.closeBtn} onClick={toggleModal}>
          <svg className={s.closeBtnIcon}>
            <use href="/icons/sprite.svg#icon-modal-close" />
          </svg>
        </button>
        <p className={s.title}>замовити дзвінок</p>
        <p className={s.subtitle}>
          Залиште вашу контактну інформацію і ми надамо відповідь на всі ваші
          питання
        </p>
        <form className={s.form}>
          <input
            type="text"
            placeholder="ПІБ"
            name="name"
            className={s.input}
          />
          <input
            type="tel"
            placeholder="Номер телефону"
            name="phone"
            className={s.input}
          />
          <button type="submit" className={s.submitBtn}>
            зателефонувати
          </button>
        </form>
        <p className={s.subtext}>
          Натискаючи кнопку “Надіслати”, ви погоджуєтесь з тим, що ми можемо
          зв’язатись з вами задопомогою дзвінка, пошти, або СМС
        </p>
      </motion.div>
    </motion.div>
  );
}

// icon-modal-close;
