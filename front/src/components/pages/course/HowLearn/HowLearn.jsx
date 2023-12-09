import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./howLearn.module.scss";
import Image from "next/image";
import SliderDescription from "./SliderDescription/SliderDescription";

export default function HowLearn() {
  return (
    <section className={`cource_how_section ${s.cource_how_section}`}>
      <CourseContainer>
        <div className={s.how_wrapper}>
          <h2 className={s.how_title}>ЯК ВІДБУВАЄТЬСЯ НАВЧАННЯ</h2>
          <div className={s.content_wrapper}>
            <div className={s.image_thumb}>
              <Image
                src="/images/course-how/some-h.png"
                width={784}
                height={490}
                alt="Як відбувається навчання"
              />
            </div>
            <SliderDescription />
            <button type="button" className={s.play_btn}>
              <svg width={20} height={20} className={s.icon_play}>
                <use href="/icons/sprite.svg#icon-play"></use>
              </svg>
              ДИВИТИСЬ ВІДЕО
            </button>
          </div>
        </div>
      </CourseContainer>
    </section>
  );
}

/* <div className={s.description_box}>
              <button type="button" className={s.register_btn}>
                РЄЄСТРАЦІЯ
              </button>
              <h3 className={s.card_title}>ЗНАЙОМТЕСЬ З ПЛАТФОРМОЮ</h3>
              <p className={s.description}>
                Опис Опис Опис Опис Опис ОписО писО писО писО писОп исОп исОп
                исОп исОп исОписО писОп исОпи сОпис ОписО писОп исОп ис
              </p>
              <button type="button" className={s.play_btn}>
                <svg width={20} height={20} className={s.icon_play}>
                  <use href="/icons/sprite.svg#icon-play"></use>
                </svg>
                ДИВИТИСЬ ВІДЕО
              </button>
            </div> */
