"use client";
import { useState, useEffect } from "react";
import s from "./saleBox.module.scss";
import { Buttons, ButtonCall, ButtonMessage } from "../Buttons/Buttons";
import Timer from "./Timer/Timer";
import { serverAPI } from "@/services/serverAPI";

export default function SaleBox({ name = "" }) {
  const [date, setDate] = useState("");
  const [spotsLeft, setSpotsLeft] = useState([]);

  useEffect(() => {
    const getCourses = async () => {
      const {
        data: { data },
      } = await serverAPI.getAllCourses();
      getSalesData(data);
    };
    getCourses();
  }, []);

  const getSalesData = (data) => {
    const { attributes } = data.find(({ attributes }) => {
      return name.toLowerCase() === attributes.courseName.toLowerCase();
    });
    setDate(attributes.discountTime);
  };
  return (
    <div className={s.sale_box}>
      <div className={s.course_time}>
        <div className={s.discount_circle}>
          <span className={s.discount_circle_value}>50%</span>
        </div>
        <h3 className={s.course_title}>КУРС {name}</h3>
        <div className="left_time">
          <div className={s.custom_progressbar}>
            <span className={s.left_text}>Залишилось місць</span>
            <div className={s.bar} style={{ width: "50%" }}></div>
            <span className={s.position_left}>9 з 18</span>
          </div>
        </div>
      </div>
      <div className={s.discount}>
        {date && <Timer dateTime={date} />}
        <Buttons>
          <ButtonCall />
          <ButtonMessage />
        </Buttons>
      </div>
    </div>
  );
}
