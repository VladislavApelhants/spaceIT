"use client";
import { useState, useEffect } from "react";
import s from "./timer.module.scss";
export default function Timer({ dateTime }) {
  const [sec, SetSec] = useState(0);
  const [min, SetMin] = useState(0);
  const [hour, SetHour] = useState(0);
  const [days, SetDays] = useState(0);

  useEffect(() => {
    timer(new Date(dateTime));
  }, []);

  const timer = (data) => {
    const timerId = setInterval(() => {
      const currentDate = new Date();
      const timeDifference = data.getTime() - currentDate.getTime();

      if (timeDifference <= 0) {
        clearInterval(timerId);
        return;
      }

      SetDays(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      SetHour(
        Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      SetMin(Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)));
      SetSec(Math.floor((timeDifference % (1000 * 60)) / 1000));
    }, 1000);
  };

  return (
    <div className={s.get_sale}>
      <p className={s.get_sale_info}>
        Отримайте знижку <span>50%</span>
      </p>
      <div className={s.timer}>
        <p className={s.timer_left_descr}>До кінця дії знижки:</p>
        <div className={s.timer_output_block}>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="day">
              {days}
            </span>
            Днів
          </div>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="hour">
              {hour}
            </span>
            Годин
          </div>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="minets">
              {min}
            </span>
            Хвилин
          </div>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="second">
              {sec}
            </span>
            Секунд
          </div>
        </div>
      </div>
    </div>
  );
}
