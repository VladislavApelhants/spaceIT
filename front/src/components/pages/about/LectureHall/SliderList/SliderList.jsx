"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";
import "/src/components/common/styledButtonsForSlider.scss";
import s from "./sliderList.module.scss";

export default function SliderList() {
  return (
    <div className={`social-slider-wrapper ${s.social_slider_wrapper}`}>
      <Swiper
        navigation={true}
        slidesPerView={"auto"}
        modules={[Pagination, Navigation]}
        className={s.social_slider}
      >
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/aboutPageSlider/desc/img1_desk.jpg"
            width={784}
            height={440}
            className={s.image_slider}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/aboutPageSlider/desc/img2_desk.jpg"
            width={784}
            height={440}
            className={s.image_slider}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/aboutPageSlider/desc/img3_desk.jpg"
            width={784}
            height={440}
            className={s.image_slider}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/aboutPageSlider/desc/img4_desk.jpg"
            width={784}
            height={440}
            className={s.image_slider}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/aboutPageSlider/desc/img3_desk.jpg"
            width={784}
            height={440}
            className={s.image_slider}
            alt="image course info"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
