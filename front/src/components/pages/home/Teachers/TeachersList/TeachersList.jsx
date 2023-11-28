"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/scss";
import "swiper/css/navigation";
import "/src/components/common/styledButtonsForSlider.scss";
import s from "./teachersList.module.scss";

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
            slidesPerView: 2.5,
          },
          768: {
            slidesPerView: 3.5,
          },
          1368: {
            slidesPerView: 4,
          },
        }}
        className={s.teacher_slider}
      >
        <SwiperSlide className={s.teacher_item}>
          <div className={s.teacher_item_thumb}>
            <Image
              src="/images/courses/course1.png"
              width={200}
              height={200}
              alt="image course info"
            />
            <span className={s.teacher_experience}>Досвід: 3 роки</span>
          </div>
          <div className={s.teacher_info_box}>
            <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
            <p className={s.teacher_prof_description}>Full-Stack Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.teacher_item}>
          <div className={s.teacher_item_thumb}>
            <Image
              src="/images/courses/course1.png"
              width={200}
              height={200}
              alt="image course info"
            />
            <span className={s.teacher_experience}>Досвід: 3 роки</span>
          </div>
          <div className={s.teacher_info_box}>
            <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
            <p className={s.teacher_prof_description}>Full-Stack Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.teacher_item}>
          <div className={s.teacher_item_thumb}>
            <Image
              src="/images/courses/course1.png"
              width={200}
              height={200}
              alt="image course info"
            />
            <span className={s.teacher_experience}>Досвід: 3 роки</span>
          </div>
          <div className={s.teacher_info_box}>
            <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
            <p className={s.teacher_prof_description}>Full-Stack Developer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.teacher_item}>
          <div className={s.teacher_item_thumb}>
            <Image
              src="/images/courses/course1.png"
              width={200}
              height={200}
              alt="image course info"
            />
            <span className={s.teacher_experience}>Досвід: 3 роки</span>
          </div>
          <div className={s.teacher_info_box}>
            <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
            <p className={s.teacher_prof_description}>Full-Stack Developer</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
