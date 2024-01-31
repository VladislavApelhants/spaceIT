import Image from "next/image";
import s from "./teachersList.module.scss";
// import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/ui-ux/teachers/artem.png"
            width={765}
            height={765}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>МЕНТОР</p>
              <h3 className={s.author_name}>АРТЕМ КОВАЛЬЧУК</h3>
              <p className={s.author_description}>6 років досвіду в UI/UX</p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
          </div>
          <p className={s.teacher_info}>
            Експерт у галузі UI/UX-дизайну, талановитий викладач та професіонал
            з багаторічним досвідом.Артем відомий своєю здатністю розкривати
            творчий потенціал студентів та надихати їх на досягнення високих
            результатів. Його курси з UI/UX-дизайну не лише допомагають
            студентам опановувати необхідні навички, але й створюють атмосферу
            креативу та професіоналізму<div className=""></div>
          </p>
        </div>
      </li>
      {/* <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/images/course-teacher/img2.png"
            width={765}
            height={765}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>МЕНТОР</p>
              <h3 className={s.author_name}>ДМИТРО ІВАЩЕНКО</h3>
              <p className={s.author_description}>5 років досвіду в UI/UX</p>
            </div> */}
      {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
      {/* </div>
          <p className={s.teacher_info}>
            Вирізняється своєю здатністю виявляти і розвивати таланти молодих
            дизайнерів. Його підхід базується на відкритті креативних
            можливостей та розвитку навичок, необхідних для успіху в сучасній
            сфері дизайну.Ментор Дмитро виступає за ідею спільноти та
            взаємодопомоги серед дизайнерів, надаючи цінні інсайти та підтримку.
          </p>
        </div>
      </li> */}
    </ul>
  );
}
