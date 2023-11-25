"use client";
import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import s from "./stepList.module.scss";
import "swiper/css";
import { Navigation, A11y } from "swiper/modules";

export default function StepList() {
  return (
    <>
      <Swiper
        spaceBetween={32}
        slidesPerView={"auto"}
        modules={[Navigation, A11y]}
        navigation={{
          enabled: true,
          nextEl: `.${s.nextEl}`,
          prevEl: `.${s.prevEl}`,
        }}
        className={s.step_swiper}
        breakpoints={{
          375: {
            slidesPerView: 1.5,
          },
          768: { slidesPerView: 2.5 },
          1368: {
            slidesPerView: 4,
            centeredSlides: false,
          },
        }}
      >
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>01</span>
          <div>
            <h3 className={s.card_title}>перший крок</h3>
            <p className={s.card_description}>
              Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
              Опис Опис Опис Опис Опис Опис
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>02</span>
          <div>
            <h3 className={s.card_title}>други крок</h3>
            <p className={s.card_description}>
              Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
              Опис Опис Опис Опис Опис Опис Опис
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>03</span>
          <div>
            <h3 className={s.card_title}>третій крок</h3>
            <p className={s.card_description}>
              Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
              Опис Опис Опис Опис Опис Опис Опис
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>04</span>
          <div>
            <h3 className={s.card_title}>четвертий крок</h3>
            <p className={s.card_description}>
              Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис Опис
              Опис Опис Опис Опис Опис Опис
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
