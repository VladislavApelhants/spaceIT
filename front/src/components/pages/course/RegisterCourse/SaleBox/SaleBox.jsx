import s from "./saleBox.module.scss";
import { Buttons, ButtonCall, ButtonMessage } from "../Buttons/Buttons";

export default function SaleBox() {
  return (
    <div className={s.sale_box}>
      <div className={s.course_time}>
        <div className={s.discount_circle}>
          <span>50%</span>
        </div>
        <h3 className={s.course_title}>КУРС UI/UX DESIGN</h3>
        <div className="left_time">
          <div className={s.custom_progressbar}>
            <span className={s.left_text}>Залишилось місць</span>
            <div className={s.bar} style={{ width: "50%" }}></div>
            <span className={s.position_left}>9 з 18</span>
          </div>
        </div>
      </div>
      <div className={s.discount}>
        <div className="get_sale">
          Отримайте знижку <span>50%</span>
        </div>
        <div className="timer">
          <p>До кінця дії знижки:</p>
          <div>
            <div>day</div>
            <div>hour</div>
            <div>minets</div>
            <div>second</div>
          </div>
        </div>
        <Buttons>
          <ButtonCall />
          <ButtonMessage />
        </Buttons>
      </div>
    </div>
  );
}
