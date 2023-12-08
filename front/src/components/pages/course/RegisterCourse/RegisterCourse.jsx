import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import Title from "@/components/common/Title/Title";
import { Form } from "@/components/common/Forms/Form";
import s from "./register.module.scss";

import SaleBox from "./SaleBox/SaleBox";

export default function RegisterCourse() {
  return (
    <section>
      <CourseContainer>
        <Title className="register_course" text="Запис на курс" tagName="h2" />
        <div className={s.content_wrapper}>
          <SaleBox />
          <div className={s.form_wrapper}>
            <Form
              btnText="ЗАПИСАТИСЬ"
              subtext="Натискаючи кнопку “Надіслати”, ви погоджуєтесь з тим, що ми можемо зв’язатись з вами задопомогою дзвінка, пошти, або СМС"
              subtextStatus={true}
            />
          </div>
        </div>
      </CourseContainer>
    </section>
  );
}
