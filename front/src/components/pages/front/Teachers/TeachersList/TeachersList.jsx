import Image from "next/image";
import s from "./teachersList.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/front-end/teachers/dmutro-kalinin.png"
            width={376}
            height={376}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>АВТОР КУРСУ/ЛЕКТОР</p>
              <h3 className={s.author_name}>ДМИТРО КАЛІНІН</h3>
              <p className={s.author_description}>
                7 років досвіду в Front-end
              </p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
          </div>
          <p className={s.teacher_info}>
            Дмитро є досвідченим фахівцем у галузі Front-end розробки. Він почав
            свою кар'єру як веб-розробник, працюючи над різноманітними
            проектами, що включають створення веб-сайтів для корпоративних
            клієнтів, електронних комерційних платформ та інтерактивних
            веб-додатків. Він створює практичні завдання та проекти, щоб
            надихати студентів розвивати свої навички та досягати високих
            результатів у сфері Front-end розробки.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/front-end/teachers/tetyana-onipko.png"
            width={376}
            height={376}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>МЕНТОР</p>
              <h3 className={s.author_name}>ТЕТЯНА ОНІПКО</h3>
              <p className={s.author_description}>
                5 років досвіду в Front-end
              </p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
          </div>
          <p className={s.teacher_info}>
            Тетяна висококваліфікований Front-end розробник та ментор 5-річним
            досвідом у галузі веб-розробки. Вона висококомпетентна у
            використанні сучасних фреймворків та технологій, таких як React,
            Angular та Vue.js.Як ментор, Тетяна вкладає значну енергію у
            розвиток навичок та підтримку своїх учнів. Вона активно сприяє
            навчанню, допомагаючи студентам розуміти не лише технічні аспекти
            Front-end розробки, але і важливість ефективної комунікації та
            співпраці в команді.
          </p>
        </div>
      </li>
    </ul>
  );
}
