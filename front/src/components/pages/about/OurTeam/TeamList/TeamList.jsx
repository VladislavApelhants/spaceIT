import s from "./teamList.module.scss";
import Image from "next/image";
import teacherdata from "../db";

export default function TeamList() {
  return (
    <ul className={s.team_list}>
      {teacherdata.map(({ id, img, alt, experience, name, prof }) => (
        <li key={id} className={s.team_item}>
          <div className={s.team_item_thumb}>
            <Image src={img} width={376} height={376} alt={alt} />
            <span className={s.team_experience}>Досвід: {experience} роки</span>
          </div>
          <div className={s.team_info_box}>
            <h3 className={s.team_item_title}>{name}</h3>
            <p className={s.team_prof_description}>{prof}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
