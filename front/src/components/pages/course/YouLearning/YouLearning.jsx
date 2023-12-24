import Title from "@/components/common/Title/Title";
import s from "./youLearning.module.scss";
import Button from "@/components/common/Button/Button";
import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import LearnList from "./LearnList/LearnList";
import { endpoints } from "@/services/callBackAPI";

export default function YouLearning() {
  return (
    <section className={s.course_section}>
      <CourseContainer>
        <div className={s.learn_wrapper}>
          <div className={s.title_wrapper}>
            <Title
              text="ВИ НАВЧИТЕСЬ"
              className="you_learning_title"
              tagName="h2"
            />
            <Button
              text={"Записатись на курс"}
              className="you_learn_button"
              endpoint={endpoints.callbackCourse}
              courseName="ui/ux design"
            />
          </div>
          <LearnList />
        </div>
      </CourseContainer>
    </section>
  );
}
