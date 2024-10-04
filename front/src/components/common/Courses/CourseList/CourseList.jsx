"use client";
import { useEffect, useState } from "react";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { endpoints, serverAPI } from "@/services/serverAPI";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/scss";
import LinkCourse from "../LinkCourse/LinkCourse";
import s from "./courseList.module.scss";
import "./styledProgressBar.scss";
import "/src/components/common/styledButtonsForSlider.scss";

export default function CourseList() {
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      const {
        data: { data },
      } = await serverAPI.getAllCourses();
      setCourses(data);
    };
    getCourses();
  }, []);

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
        {courses.map(
          ({
            id,
            attributes: {
              courseName,
              link,
              previewImg,
              professions,
              skills,
              term,
            },
          }) => {
            console.log("previewImg", previewImg);
            return (
              <SwiperSlide key={id} className={s.cource_item}>
                <div className={s.course_item_thumb}>
                  <img
                    src={`${endpoints.BASE_URL}${previewImg.data.attributes.url}`}
                    width={200}
                    height={200}
                    alt="image course info"
                    className={s.image}
                  />
                  <span className={s.cource_duration_training}>{term}</span>
                </div>
                <h3 className={s.cource_item_title}>{courseName}</h3>
                <div className={s.item_prof_block}>
                  <h4 className={s.item_prof_title}>Ващі майбутні професії</h4>
                  <p className={s.item_prof_description}>{professions}</p>
                </div>
                <div>
                  <h4 className={s.item_skill_title}>
                    Навички, набуті на курсі
                  </h4>
                  <p className={s.cource_item_stack}>{skills}</p>
                </div>
                <LinkCourse link={link} />
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </div>
  );
}
