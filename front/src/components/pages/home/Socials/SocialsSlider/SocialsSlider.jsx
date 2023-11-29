"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";
import "/src/components/common/styledButtonsForSlider.scss";
import s from "./SocialsSlider.module.scss";

export default function SocialsSlider() {
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
            src="/images/socials/img-one.png"
            width={376}
            height={377}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/socials/img-two.png"
            width={376}
            height={377}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/socials/img-three.png"
            width={376}
            height={377}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/socials/img-four.png"
            width={376}
            height={377}
            alt="image course info"
          />
        </SwiperSlide>
        <SwiperSlide className={s.social_item}>
          <Image
            src="/images/socials/img-four.png"
            width={376}
            height={377}
            alt="image course info"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
