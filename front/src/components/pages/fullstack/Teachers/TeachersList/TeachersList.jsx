import Image from "next/image";
import s from "./teachersList.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/full-stack/teachers/vladislav-levichenko.png"
            width={765}
            height={765}
            alt="teacher image"
            className={s.teacher_image}
            loading="lazy"
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>АВТОР КУРСУ/ЛЕКТОР</p>
              <h3 className={s.author_name}>ВЛАДИСЛАВ ЛЕВІЩЕНКО</h3>
              <p className={s.author_description}>
                11 років досвіду в Back-end та Front-end розробці
              </p>
            </div>
          </div>
          <p className={s.teacher_info}>
            Владислав Левіщенко - висококваліфікований фахівець у сфері Back-end
            та Front-end розробці 11-річним досвідом. Почавши свою кар'єру як
            програміст, він працював у різних компаніях, від малих стартапів до
            великих корпорацій. Як лектор курсу по Back-end, Владислав передає
            свої глибокі знання та практичний досвід студентам, надихаючи їх
            розвивати власні навички у сфері розробки. Його педагогічний підхід
            визначається як практичний та орієнтований на результат.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/full-stack/teachers/melnichuk.png"
            width={765}
            height={765}
            alt="teacher image"
            className={s.teacher_image}
            loading="lazy"
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>МЕНТОР</p>
              <h3 className={s.author_name}>МАКСИМ МЕЛЬНИЧУК</h3>
              <p className={s.author_description}>100+ років досвіду в UI/UX</p>
            </div>
          </div>
          <p className={s.teacher_info}>
            Максим - відданий Full-stack розробник та ментор із 6-річним
            досвідом у сфері веб-розробки. Він почав свою кар'єру як Back-end
            розробник, але швидко розширив свої навички, працюючи з клієнтською
            частиною, та став Full-stack спеціалістом.Протягом своєї кар'єри
            Олег працював над проектами з високим технічним рівнем вимог,
            зосереджуючись на покращенні користувацького досвіду та оптимізації
            серверної частини.
          </p>
        </div>
      </li>
    </ul>
  );
}
