import Image from "next/image";
import s from "./teachersList.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/images/course-teacher/img1.png"
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
              <h3 className={s.author_name}>ВЛАДИСЛАВ ЛЕВІЩЕНКО</h3>
              <p className={s.author_description}>
                11 років досвіду в Back-end та Front-end розробці
              </p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
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
            src="/images/course-teacher/img2.png"
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
              <h3 className={s.author_name}>ДЕНИС КОЛОДЮК</h3>
              <p className={s.author_description}>
                8 років досвіду в Back-end розробці
              </p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
          </div>
          <p className={s.teacher_info}>
            Він спеціалізується у створенні складних серверних систем і
            взаємодії з базами даних. Його підхід до менторства базується на
            індивідуальному підході до кожного учня, сприяючи їх особистому та
            професійному розвитку. За плечима Дениса багато успішних проектів,
            які відзначилися ефективністю, безпекою та стабільністю. Його досвід
            включає в себе розробку API, оптимізацію баз даних, а також роботу з
            великими обсягами даних.
          </p>
        </div>
      </li>
    </ul>
  );
}
