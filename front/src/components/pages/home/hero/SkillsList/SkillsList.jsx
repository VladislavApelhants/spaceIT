import s from "./skillsList.module.scss";
import { nanoid } from "nanoid";
const skills = [
  "UI/UX Design",
  "HTML",
  "React.js",
  "Node.js",
  "JavaScript",
  "Python",
  "Angular",
  "PHP",
];
export default function SkillsList() {
  return (
    <ul className={s.skills_list}>
      {skills.map((skill) => (
        <li className={s.skills_item} key={nanoid()}>
          {skill}
        </li>
      ))}
    </ul>
  );
}
