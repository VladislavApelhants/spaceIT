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
            <h3 className={s.card_title}>Вся необхідна теорія</h3>
            <p className={s.card_description}>
              Жодної “води” лише інформація що знадобиться вам у роботі.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>02</span>
          <div>
            <h3 className={s.card_title}>Практичні завдання</h3>
            <p className={s.card_description}>80% нашої програми це практика</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>03</span>
          <div>
            <h3 className={s.card_title}>Власний проект або портфоліо</h3>
            <p className={s.card_description}>
              Можливість наочно показати свої навички майбутньому работодавцю
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.step_slide}>
          <span className={s.card_position}>04</span>
          <div>
            <h3 className={s.card_title}>
              Резюме і практика проходження співбесід
            </h3>
            <p className={s.card_description}>
              Створете конкурентне резюме під керівництвом досвідченого HR
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
