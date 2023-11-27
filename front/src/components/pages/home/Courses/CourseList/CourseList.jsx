"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import s from "./CourseList.module.scss";

import { Pagination, Navigation } from "swiper/modules";
export default function CourseList() {
  return (
    <div className={s.course_slider_wrapper}>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        spaceBetween={32}
        slidesPerView={"auto"}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={s.course_slider}
      >
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course1.jpg"
              width={200}
              height={200}
              alt="image course info"
            />
            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course2.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course3.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course4.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course5.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course1.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course2.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course3.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course4.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course5.jpg"
              width={200}
              height={200}
              alt="image course info"
            />

            <span className={s.cource_duration_training}>1 місяць</span>
          </div>
          <h3 className={s.cource_item_title}>Назва курсу</h3>
          <div className={s.item_prof_block}>
            <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
            <p className={s.item_prof_description}>
              Software Engineer / Web Developer / Full-stack Developer
            </p>
          </div>
          <div>
            <h4 className={s.item_skill_title}>Навички, набуті на курсі</h4>
            <p className={s.cource_item_stack}>
              Full-Stack,Javascript, React.js, HTML, CSS, Babel, Webpack, NPM,
              Github, Hit, Rest API
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
