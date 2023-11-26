"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import Image from "next/image";
import s from "./stepList.module.scss";
export default function Buttons() {
  const swiper = useSwiper();

  useEffect(() => {
    const handleNextClick = () => {
      if (swiper) {
        swiper.slideNext();
      }
    };

    const handlePrevClick = () => {
      if (swiper) {
        swiper.slidePrev();
      }
    };

    const nextEl = document.querySelector(`.${s.nextEl}`);
    const prevEl = document.querySelector(`.${s.prevEl}`);

    if (nextEl) {
      nextEl.addEventListener("click", handleNextClick);
    }

    if (prevEl) {
      prevEl.addEventListener("click", handlePrevClick);
    }

    return () => {
      if (nextEl) {
        nextEl.removeEventListener("click", handleNextClick);
      }

      if (prevEl) {
        prevEl.removeEventListener("click", handlePrevClick);
      }
    };
  }, [swiper]);
  return (
    <div className={s.swiper_step_buttons}>
      <button className={s.prevEl}>
        <Image
          src="/icons/arrow/arrow-left.svg"
          width={24}
          height={24}
          alt="arrow left"
        />
      </button>
      <button className={s.nextEl}>
        <Image
          src="/icons/arrow/arrow-right.svg"
          width={24}
          height={24}
          alt="arrow right"
        />
      </button>
    </div>
  );
}
