import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import { Form } from "@/components/common/Forms/Form";
import s from "./styles.module.scss";
import { endpoints } from "@/services/serverAPI";

export default function Contact() {
  return (
    <section className={s.contact}>
      <Container>
        <div className={s.contactContainer}>
          <Title
            text="залиште вашу контактну інформацію і ми допоможемо підібрати ІТ-курс,
            який відповідає вашим цілям"
            className="contact-title"
            tagName="h2"
          />
          <Form
            btnText="надіслати"
            subtext="Натискаючи кнопку “Надіслати”, ви погоджуєтесь з тим, що ми можемо
          зв’язатись з вами задопомогою дзвінка, пошти, або СМС"
            subtextStatus={true}
            endpoint={endpoints.callback}
          />
        </div>
      </Container>
    </section>
  );
}
