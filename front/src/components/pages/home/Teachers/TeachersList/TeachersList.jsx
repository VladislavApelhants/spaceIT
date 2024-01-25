"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";
import { nanoid } from "nanoid";

import "swiper/scss";
import "swiper/css/navigation";
import "/src/components/common/styledButtonsForSlider.scss";
import s from "./teachersList.module.scss";

const dataTeachers = [
  {
    name: "ДМИТРО КАЛІНІН",
    prof: "7 років досвіду в Front-end",
    experience: "7",
    img: "/pages/front-end/teachers/dmutro-kalinin.png",
    alt: "ДМИТРО КАЛІНІН",
  },
  {
    name: "ТЕТЯНА ОНІПКО",
    prof: "5 років досвіду в Front-end",
    experience: "5",
    img: "/pages/front-end/teachers/tetyana-onipko.png",
    alt: "ТЕТЯНА ОНІПКО",
  },
  {
    name: "ВЛАДИСЛАВ ЛЕВІЩЕНКО",
    prof: "11 років досвіду в Back-end та Front-end розробці",
    experience: "11",
    img: "/pages/back-end/teachers/vladislav-levichenko.png",
    alt: "ВЛАДИСЛАВ ЛЕВІЩЕНКО",
  },
  {
    name: "ДЕНИС КОЛОДЮК",
    prof: "8 років досвіду в Back-end розробці",
    experience: "8",
    img: "/pages/back-end/teachers/denis-colodyk.png",
    alt: "ДЕНИС КОЛОДЮК",
  },
  {
    name: "МАКСИМ МЕЛЬНИЧУК",
    prof: "6 років досвіду в Back-end та Front-end розробці",
    experience: "6",
    img: "/pages/full-stack/teachers/melnichuk.png",
    alt: "МАКСИМ МЕЛЬНИЧУК",
  },
  {
    name: "ІННА ЧОРНА",
    prof: "10 років досвіду HR manager",
    experience: "10",
    img: "/pages/hr-manager/teachers/inna-chorna.png",
    alt: "ІННА ЧОРНА",
  },
  {
    name: "ВІКТОРІЯ ПРОКОПЧУК",
    prof: "6 років досвіду HR manager",
    experience: "6",
    img: "/pages/hr-manager/teachers/viktoria-prokopchuk.png",
    alt: "ВІКТОРІЯ ПРОКОПЧУК",
  },
  {
    name: "РУСЛАНА КОГУТ",
    prof: "7 років досвіду в PM",
    experience: "7",
    img: "/pages/pm/teachers/kogut.png",
    alt: "РУСЛАНА КОГУТ",
  },
  {
    name: "ВЕРОНІКА ПАРХОМЕНКО",
    prof: "4 років досвіду в PM",
    experience: "4",
    img: "/pages/pm/teachers/parhomenko.png",
    alt: "ВЕРОНІКА ПАРХОМЕНКО",
  },
  {
    name: "ЄВГЕН ЗЕНЬКОВСЬКИЙ",
    prof: "8 років досвіду в QA",
    experience: "8",
    img: "/pages/qa/teachers/thenkovetskiy.png",
    alt: "ЄВГЕН ЗЕНЬКОВСЬКИЙ",
  },
  {
    name: "ОКСАНА ТИМЧЕНКО",
    prof: "4 років досвіду в QA",
    experience: "4",
    img: "/pages/qa/teachers/timchenko.png",
    alt: "ОКСАНА ТИМЧЕНКО",
  },
];
export default function TeachersList() {
  return (
    <div className={`teacher-slider-wrapper ${s.teacher_slider_wrapper}`}>
      <Swiper
        navigation={true}
        spaceBetween={32}
        slidesPerView={1}
        modules={[Pagination, Navigation]}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1368: {
            slidesPerView: 4,
          },
        }}
        className={s.teacher_slider}
      >
        {dataTeachers.map((item) => (
          <SwiperSlide className={s.teacher_item} key={item.id}>
            <div className={s.teacher_item_thumb}>
              <Image src={item.img} width={376} height={411} alt={item.alt} />
              <span className={s.teacher_experience}>
                Досвід: {item.experience} роки
              </span>
            </div>
            <div className={s.teacher_info_box}>
              <h3 className={s.teacher_item_title}>{item.name}</h3>
              <p className={s.teacher_prof_description}>{item.prof}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
