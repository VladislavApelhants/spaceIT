import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./howLearn.module.scss";
import Image from "next/image";
import SliderDescription from "./SliderDescription/SliderDescription";

export default function HowLearn() {
  return (
    <section
      className={`cource_how_section ${s.cource_how_section}`}
      id="learn"
    >
      <CourseContainer>
        <div className={s.how_wrapper}>
          <h2 className={s.how_title}>ЯК ВІДБУВАЄТЬСЯ НАВЧАННЯ</h2>
          <div className={s.content_wrapper}>
            <div className={s.image_thumb}>
              <Image
                src="/pages/back-end/howLearn/how-learn.png"
                width={784}
                height={490}
                alt="Як відбувається навчання"
              />
            </div>
            <SliderDescription />
          </div>
        </div>
      </CourseContainer>
    </section>
  );
}
