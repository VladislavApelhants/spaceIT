"use client";
import { motion } from "framer-motion";
import { formSubmit } from "@/helpers/formSubmit";

import s from "./modalCall.module.scss";

const variantsBackdrop = {
  open: { x: "-100%", transition: { duration: 0.5 } },
  closed: { x: "100%", transition: { duration: 0.5 } },
};

const variantsModal = {
  open: { x: 0, transition: { duration: 0.5 } },
  closed: { x: "-200%", transition: { duration: 0.5 } },
};

export function ModalCall({
  isOpen,
  toggleModal,
  endpoint,
  title,
  subtitle,
  submitBtnText,
  isEmail = false,
  courseName = null,
}) {
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
        <p className={s.title}>{title}</p>
        <p className={s.subtitle}>{subtitle}</p>
        <form className={s.form} onSubmit={formSubmit(endpoint, toggleModal)}>
          <input
            type="text"
            placeholder="ПІБ"
            name="name"
            className={s.input}
            required
          />
          {isEmail && (
            <input
              type="email"
              placeholder="Email"
              name="email"
              className={s.input}
              required
            />
          )}
          <input
            type="tel"
            placeholder="Номер телефону"
            name="phone"
            className={s.input}
            required
          />
          {courseName && (
            <input
              type="text"
              name="courseName"
              className={s.hiddenInput}
              defaultValue={courseName}
            />
          )}
          <button type="submit" className={s.submitBtn}>
            {submitBtnText}
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
