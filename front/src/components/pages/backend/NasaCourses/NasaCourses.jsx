import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./nasaCourses.module.scss";
import Title from "@/components/common/Title/Title";
import Image from "next/image";

export default function NasaCourses() {
  return (
    <section className={s.nasa_section}>
      <CourseContainer>
        <div className={s.info_block}>
          <Title
            text="УСПІШНО ПРОЙДІТЬ НАВЧАННЯ ТА ОТРИМАЙТЕ ГАРАНТОВАНЕ ПРАЦЕВЛАШТУВАННЯ"
            className={"nasa_courses_title"}
            tagName={"h1"}
          />
          <p className={s.description}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa,
            aliquam tempore? Esse nesciunt cum natus atque, commodi consequatur
            possimus quae eligendi, in labore eos quibusdam velit voluptas sed
            perspiciatis distinctio!
          </p>
          <div className={s.employment}></div>
        </div>
      </CourseContainer>
    </section>
  );
}
