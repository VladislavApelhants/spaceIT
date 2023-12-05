import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";
import { Labels } from "./Lables/Lables";
import { LearningProgram } from "./LearningProgram/LearningProgram";
import s from "./styles.module.scss";

export default function Program() {
  return (
    <section className={s.program}>
      <CourseContainer>
        <div className={s.circle}></div>
        <Title text="програма" tagName="h2" className="programTitle" />
        <Labels numberOfLessons="23 уроки" numberOfTasks="50 завдань" />
        <LearningProgram />
      </CourseContainer>
    </section>
  );
}
