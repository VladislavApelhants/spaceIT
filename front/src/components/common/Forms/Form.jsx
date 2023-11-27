"use client";

import axios from "axios";
import s from "./styles.module.scss";

export function Form({
  btnText,
  endpoint,
  subtext = "Вкажіть який текст",
  subtextStatus = false,
}) {
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const data = {};
    new FormData(e.currentTarget).forEach((value, key) => {
      data[key] = value;
    });
    console.log("set endpoint for request ", data);
    // await axios.post(endpoint, data);
  };

  return (
    <form className={s.form} onSubmit={handlerSubmit}>
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
      {subtextStatus && <p className={s.text}>{subtext}</p>}
    </form>
  );
}
