"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import s from "./stepList.module.scss";
import "/src/components/common/styledButtonsForSlider.scss";

export default function StepList() {
  return (
    <div className={`step-list-swiper-wrapper ${s.swiper_wrapper}`}>
      <Swiper
        spaceBetween={32}
        slidesPerView={"auto"}
        modules={[Navigation]}
        navigation={true}
        className={s.step_swiper}
        breakpoints={{
          1368: {
            slidesPerView: 4,
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
    </div>
  );
}
