import Image from "next/image";
import s from "./teachersList.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/pm/teachers/kogut.png"
            width={765}
            height={765}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>АВТОР КУРСУ/ЛЕКТОР</p>
              <h3 className={s.author_name}>РУСЛАНА КОГУТ</h3>
              <p className={s.author_description}>7 років досвіду в PM</p>
            </div>
          </div>
          <p className={s.teacher_info}>
            Почавши свою кар'єру як проектний менеджер у великій IT-компанії,
            Руслана розвинула свої навички в управлінні проектами від масштабних
            технічних проектів до стратегічного планування в
            бізнес-середовищі.На лекціях Вона ділиться своїм великим багажем
            знань та вмінь, сприяючи розвитку навичок управління проектами серед
            майбутніх менеджерів. Її лекції відзначаються практичністю та
            акцентом на реальних сценаріях з робочого досвіду.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/pm/teachers/parhomenko.png"
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
              <h3 className={s.author_name}>ВЕРОНІКА ПАРХОМЕНКО</h3>
              <p className={s.author_description}>4 років досвіду в PM</p>
            </div>
          </div>
          <p className={s.teacher_info}>
            ТВероніка виступає ментором на курсах з управління проектами,
            надаючи особистий підхід до розвитку кожного учасника. Її менторські
            сесії відзначаються глибоким розумінням конкретних викликів
            учасників та наданням конструктивного порад. Тетяна прагне розвивати
            в своїх учнів не лише технічні навички управління проектами, але і
            лідерські якості та стратегічне мислення.
          </p>
        </div>
      </li>
    </ul>
  );
}
