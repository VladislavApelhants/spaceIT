"use client";
import s from "./sliderDescription.module.scss";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

export default function SliderDescription() {
  return (
    <div className={`course_how_learn ${s.slider_container}`}>
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className={s.description_box}
      >
        <SwiperSlide className={s.slide}>
          <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button>
          <h3 className={s.card_title}>ЗНАЙОМТЕСЬ З ПЛАТФОРМОЮ</h3>
          <p className={s.description}>
            Опис Опис Опис Опис Опис ОписО писО писО писО писОп исОп исОп исОп
            исОп исОписО писОп исОпи сОпис ОписО писОп исОп ис
          </p>
          <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button>
          <h3 className={s.card_title}>ЗНАЙОМТЕСЬ З ПЛАТФОРМОЮ</h3>
          <p className={s.description}>
            Опис Опис Опис Опис Опис ОписО писО писО писО писОп исОп исОп исОп
            исОп исОписО писОп исОпи сОпис ОписО писОп исОп ис
          </p>
          <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button>
          <h3 className={s.card_title}>ЗНАЙОМТЕСЬ З ПЛАТФОРМОЮ</h3>
          <p className={s.description}>
            Опис Опис Опис Опис Опис ОписО писО писО писО писОп исОп исОп исОп
            исОп исОписО писОп исОпи сОпис ОписО писОп исОп ис
          </p>
          <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button>
          <h3 className={s.card_title}>ЗНАЙОМТЕСЬ З ПЛАТФОРМОЮ</h3>
          <p className={s.description}>
            Опис Опис Опис Опис Опис ОписО писО писО писО писОп исОп исОп исОп
            исОп исОписО писОп исОпи сОпис ОписО писОп исОп ис
          </p>
          <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
