import s from "./teamList.module.scss";
import Image from "next/image";
export default function TeamList() {
  return (
    <ul>
      <li>
        <div className={s.teacher_item_thumb}>
          <Image
            src="/images/teachers/teacher-one.png"
            width={376}
            height={411}
            alt="image course info"
          />
          <span className={s.teacher_experience}>Досвід: 3 роки</span>
        </div>
        <div className={s.teacher_info_box}>
          <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
          <p className={s.teacher_prof_description}>Full-Stack Developer</p>
        </div>
      </li>
      <li>
        <div className={s.teacher_item_thumb}>
          <Image
            src="/images/teachers/teacher-two.png"
            width={376}
            height={411}
            alt="image course info"
          />
          <span className={s.teacher_experience}>Досвід: 3 роки</span>
        </div>
        <div className={s.teacher_info_box}>
          <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
          <p className={s.teacher_prof_description}>Full-Stack Developer</p>
        </div>
      </li>
      <li>
        <div className={s.teacher_item_thumb}>
          <Image
            src="/images/teachers/teacher-three.png"
            width={376}
            height={411}
            alt="image course info"
          />
          <span className={s.teacher_experience}>Досвід: 3 роки</span>
        </div>
        <div className={s.teacher_info_box}>
          <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
          <p className={s.teacher_prof_description}>Full-Stack Developer</p>
        </div>
      </li>
      <li>
        <div className={s.teacher_item_thumb}>
          <Image
            src="/images/teachers/teacher-four.png"
            width={376}
            height={411}
            alt="image course info"
          />
          <span className={s.teacher_experience}>Досвід: 3 роки</span>
        </div>
        <div className={s.teacher_info_box}>
          <h3 className={s.teacher_item_title}>Олексій Скороход</h3>
          <p className={s.teacher_prof_description}>Full-Stack Developer</p>
        </div>
      </li>
    </ul>
  );
}
