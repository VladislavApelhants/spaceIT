"use client";

import { serverAPI } from "@/services/serverAPI";
import { useEffect, useState } from "react";

import s from "./styles.module.scss";
export default function CourseInfo({ name = "" }) {
  const [date, setDate] = useState("");

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
      return name === attributes.courseName.toLowerCase();
    });
    const [year, month, day] = attributes.startDate.split("-");
    setDate(`${day}.${month}.${year}`);
  };

  const { numberOfLessons, format } = {
    numberOfLessons: "32 уроки",
    format: "ОФЛАЙН/ОНЛАЙН",
  };

  return (
    <ul className={s.list}>
      <li className={s.listItem}>
        <p className={s.text}>Початок навчання</p>
        <p className={s.subText}>{date}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.text}>Кількість занять</p>
        <p className={s.subText}>{numberOfLessons}</p>
      </li>
      <li className={s.listItem}>
        <p className={s.text}>Форма</p>
        <p className={s.subText}>{format}</p>
      </li>
    </ul>
  );
}
