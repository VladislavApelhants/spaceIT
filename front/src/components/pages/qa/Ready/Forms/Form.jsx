"use client";
import InputMask from "react-input-mask";
import { formSubmit } from "@/helpers/formSubmit";
import s from "./styles.module.scss";

export function Form({
  endpoint,
  btnText,
  subtext = "Вкажіть який текст",
  subtextStatus = true,
  courseName,
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
          <InputMask mask="+380(99)-999-99-99" maskChar="_" alwaysShowMask>
            {() => (
              <input
                type="tel"
                placeholder="Номер телефону"
                name="phone"
                className={s.input}
                required
              />
            )}
          </InputMask>
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
      </div>
      {subtextStatus && <p className={s.text}>{subtext}</p>}
    </form>
  );
}
