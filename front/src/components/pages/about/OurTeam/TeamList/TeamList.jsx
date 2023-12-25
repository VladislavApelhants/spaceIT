import s from "./teamList.module.scss";
import Image from "next/image";
import teacherdata from "../db";

export default function TeamList() {
  return (
    <ul className={s.team_list}>
      {teacherdata.map(
        ({ id, path, alt, experience, teacherName, teacherProf }) => (
          <li key={id} className={s.team_item}>
            <div className={s.team_item_thumb}>
              <Image src={path} width={376} height={411} alt={alt} />
              <span className={s.team_experience}>
                Досвід: {experience} роки
              </span>
            </div>
            <div className={s.team_info_box}>
              <h3 className={s.team_item_title}>{teacherName}</h3>
              <p className={s.team_prof_description}>{teacherProf}</p>
            </div>
          </li>
        )
      )}
    </ul>
  );
}
