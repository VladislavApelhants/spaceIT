"use client";

import { formSubmit } from "@/helpers/formSubmit";
import s from "./styles.module.scss";

export function Form({
  endpoint,
  btnText,
  subtext = "Вкажіть який текст",
  subtextStatus = true,
}) {
  return (
    <form className={s.form} onSubmit={formSubmit(endpoint)}>
      <div className={s.btn_wrapper}>
        <div className={s.inputWrapper}>
          <input
            type="text"
            className={s.input}
            placeholder="ПІБ"
            name="name"
            required
          />
          <input
            type="email"
            className={s.input}
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="tel"
            className={s.input}
            placeholder="Номер телефону"
            name="phone"
            required
          />
        </div>
        <button type="submit" className={s.btn}>
          {btnText}
        </button>
      </div>
      {subtextStatus && <p className={s.text}>{subtext}</p>}
    </form>
  );
}
