import s from "./CourseContainer.module.scss";
export default function CourseContainer({ children }) {
  return <div className={s.courseContainer}>{children}</div>;
}
