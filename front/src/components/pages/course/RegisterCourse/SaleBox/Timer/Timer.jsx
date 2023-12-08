import s from "./timer.module.scss";
export default function Timer() {
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
              0
            </span>
            Днів
          </div>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="hour">
              0
            </span>
            Годин
          </div>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="minets">
              0
            </span>
            Хвилин
          </div>
          <div className={s.time_output}>
            <span className={s.time_value} data-time="second">
              0
            </span>
            Секунд
          </div>
        </div>
      </div>
    </div>
  );
}
