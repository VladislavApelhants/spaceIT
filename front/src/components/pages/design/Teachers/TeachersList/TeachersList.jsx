import Image from "next/image";
import s from "./teachersList.module.scss";
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
          </div>
          <p className={s.teacher_info}>
            Експерт у галузі UI/UX-дизайну, талановитий викладач та професіонал
            з багаторічним досвідом.Артем відомий своєю здатністю розкривати
            творчий потенціал студентів та надихати їх на досягнення високих
            результатів. Його курси з UI/UX-дизайну не лише допомагають
            студентам опановувати необхідні навички, але й створюють атмосферу
            креативу та професіоналізму
          </p>
        </div>
      </li>
    </ul>
  );
}
