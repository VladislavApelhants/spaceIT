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
          {/* <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button> */}
          <h3 className={s.card_title}>ЯСНО ТА ЗРОЗУМІЛО</h3>
          <p className={s.description}>
            На нашому курсі ти не знайдеш «лишньої води». У нас все точно та
            конкретно, наша задача випустити готових спеціалістів у своїй сфері,
            готових змінювати світ IT
          </p>
          <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          {/* <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button> */}
          <h3 className={s.card_title}>ДИПЛОМ</h3>
          <p className={s.description}>
            Після завершення курсу, ми видаємо диплом. Він підтвердження твоїх
            знань та готовності працювати
          </p>
          <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button>
        </SwiperSlide>
        <SwiperSlide className={s.slide}>
          {/* <button type="button" className={s.register_btn}>
            РЄЄСТРАЦІЯ
          </button> */}
          <h3 className={s.card_title}>ЛЕКТОР ТА МЕНТОР</h3>
          <p className={s.description}>
            У кожної групи буде лектор та ментор. Ментор буде перевіряти ваші
            домашні завдання, а до лектора можна звернутись з додатковими
            питаннями
          </p>
          {/* <button type="button" className={s.play_btn}>
            <svg width={20} height={20} className={s.icon_play}>
              <use href="/icons/sprite.svg#icon-play"></use>
            </svg>
            ДИВИТИСЬ ВІДЕО
          </button> */}
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
