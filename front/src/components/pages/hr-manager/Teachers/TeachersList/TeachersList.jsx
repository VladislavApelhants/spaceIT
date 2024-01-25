import Image from "next/image";
import s from "./teachersList.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/hr-manager/teachers/inna-chorna.png"
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
              <h3 className={s.author_name}>ІННА ЧОРНА</h3>
              <p className={s.author_description}>
                10 років досвіду HR manager
              </p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
          </div>
          <p className={s.teacher_info}>
            Інна працювала у різних індустріях, від стартапів до великих
            корпорацій, набувши різноманітний досвід в управлінні персоналом та
            стратегічному плануванні. Вона активно залучалася до процесів найму
            та відбору, надавала підтримку у впровадженні програм з навчання та
            розвитку персоналу. Багатий досвід роботи у різних галузях та
            успішні проекти з управління людськими ресурсами роблять Вікторію
            відмінним фахівцем і відмінним лектором, здатним передати свої
            знання та досвід новому поколінню HR-спеціалістів.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/hr-manager/teachers/viktoria-prokopchuk.png"
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
              <h3 className={s.author_name}>ВІКТОРІЯ ПРОКОПЧУК</h3>
              <p className={s.author_description}>6 років досвіду HR manager</p>
            </div>
            {/* <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            /> */}
          </div>
          <p className={s.teacher_info}>
            Вікторія - досвідчений HR-фахівець і лектор 6-річним досвідом у
            сфері управління людськими ресурсами. Вона працювала у різних
            індустріях, від стартапів до великих корпорацій, набувши
            різноманітний досвід в управлінні персоналом та стратегічному
            плануванні. У ролі HR-менеджера вона успішно впроваджувала та
            координувала проекти щодо стратегічного планування персоналу,
            підвищення ефективності команд, а також розвитку корпоративної
            культури.
          </p>
        </div>
      </li>
    </ul>
  );
}
