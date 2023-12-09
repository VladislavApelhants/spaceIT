import s from "./ready.module.scss";
import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import { Form } from "./Forms/Form";
import Title from "@/components/common/Title/Title";

export default function Ready() {
  return (
    <section className={s.ready}>
      <CourseContainer>
        <div className={s.ready_wrapper}>
          <div className={s.title_wrapper}>
            <h2 className={s.ready_title}>
              ГОТОВІ СТАТИ <br /> UI/UX ДИЗАЙНЕРОМ?
            </h2>
            <p className={s.ready_description}>
              Не можете визначитись з направленням в дизайні, або бажаєте
              дізнатись більше про перспективи? Зв’яжіться з нами і ми
              допоможемо вам розібратись, в якому напрямку рухатись
            </p>
          </div>
          <Form
            btnText="Надіслати"
            subtext="Натискаючи кнопку “Надіслати”, ви погоджуєтесь з тим, що ми можемо зв’язатись з вами задопомогою дзвінка, пошти, або СМС"
          />
        </div>
      </CourseContainer>
    </section>
  );
}
