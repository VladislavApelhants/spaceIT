import Image from "next/image";
import s from "./teachersList.module.scss";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/qa/teachers/thenkovetskiy.png"
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
              <h3 className={s.author_name}>ЄВГЕН ЗЕНЬКОВСЬКИЙ</h3>
              <p className={s.author_description}>8 років досвіду в QA</p>
            </div>
          </div>
          <p className={s.teacher_info}>
            Євген почав свою кар'єру як QA-інженер у великій технологічній
            компанії, де активно долучався до тестування різноманітних проектів.
            Він прагне створювати навчальні програми, що враховують останні
            тенденції у світі тестування, і надає студентам можливість розвивати
            навички, необхідні для успішної кар'єри в області QA.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/pages/qa/teachers/timchenko.png"
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
              <h3 className={s.author_name}>ОКСАНА ТИМЧЕНКО</h3>
              <p className={s.author_description}>4 років досвіду в QA</p>
            </div>
          </div>
          <p className={s.teacher_info}>
            Оксана має вражаючий досвід у сфері тестування, роблячи свій шлях
            від QA-інженера до провідного тестувальника та ментора.Її захоплення
            тестуванням та бажання навчати інших вело її до ролі ментора.Задача
            Оксани надихати та допомагати студентам досягати своїх професійних
            цілей у світі тестування програмного забезпечення.
          </p>
        </div>
      </li>
    </ul>
  );
}
