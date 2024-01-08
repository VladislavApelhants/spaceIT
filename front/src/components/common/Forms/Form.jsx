"use client";

import { formSubmit } from "@/helpers/formSubmit";

import s from "./styles.module.scss";

export function Form({
  btnText,
  endpoint,
  subtext = "Вкажіть який текст",
  subtextStatus = false,
  courseName = null,
}) {
  console.log(courseName);
  return (
    <form className={s.form} onSubmit={formSubmit(endpoint)}>
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
        {courseName && (
          <input
            type="text"
            name="courseName"
            className={s.hiddenInput}
            defaultValue={courseName}
          />
        )}
      </div>
      <button type="submit" className={s.btn}>
        {btnText}
      </button>
      {subtextStatus && <p className={s.text}>{subtext}</p>}
    </form>
  );
}
