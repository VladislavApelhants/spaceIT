"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Pagination, Navigation } from "swiper/modules";

import Button from "../Button/Button";
import "swiper/scss";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "/src/components/common/styledButtonsForSlider.scss";
import "./styledProgressBar.scss";
import s from "./CourseList.module.scss";

export default function CourseList() {
  return (
    <div className={`course_slider_wrapper ${s.course_slider_wrapper}`}>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        spaceBetween={32}
        slidesPerView={"auto"}
        modules={[Pagination, Navigation]}
        className={s.course_slider}
      >
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course1.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course2.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course3.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course4.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course5.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course1.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course2.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course3.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course4.png"
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
          <Button />
        </SwiperSlide>
        <SwiperSlide className={s.cource_item}>
          <div className={s.course_item_thumb}>
            <Image
              src="/images/courses/course5.png"
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
          <Button />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
