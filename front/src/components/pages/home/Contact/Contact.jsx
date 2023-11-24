import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import s from "./styles.module.scss";

export default function Contact() {
  return (
    <section style={{ marginTop: "300px" }} className={s.contact}>
      <Container>
        <div className={s.contactContainer}>
          <Title
            text="залиште вашу контактну інформацію і ми допоможемо підібрати ІТ-курс,
            який відповідає вашим цілям"
            className="contact-title"
            tagName="h2"
          />
          <form className={s.form}>
            <div className={s.inputWrapper}>
              <input
                type="text"
                className={s.input}
                placeholder="ПІБ"
                name="name"
                required
              />
              <input
                type="email"
                className={s.input}
                placeholder="Email"
                name="email"
                required
              />
              <input
                type="tel"
                className={s.input}
                placeholder="Номер телефону"
                name="phone"
                required
              />
            </div>
            <button type="submit" className={s.btn}>
              Надіслати
            </button>
            <p className={s.text}>
              Натискаючи кнопку “Надіслати”, ви погоджуєтесь з тим, що ми можемо
              зв’язатись з вами задопомогою дзвінка, пошти, або СМС
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
