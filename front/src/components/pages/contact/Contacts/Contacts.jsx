import Title from "@/components/common/Title/Title";
import s from "./contacts.module.scss";
import { Form } from "@/components/common/Forms/Form";
import Container from "@/components/common/Container/Container";

import ContactsBox from "./ContactsBox/ContactsBox";

export default function Contacts() {
  return (
    <section>
      <Container>
        <Title tagName={"h1"} text="контакти" className="contacts_page_title" />
        <div className={s.contacts_wrapper}>
          <ContactsBox />
          <div className={s.form_wrapper}>
            <p className={s.form_description}>БЕЗКОШТОВНА КОНСУЛЬТАЦІЯ</p>
            <Form btnText="ЗАМОВИТИ КОНСУЛЬТАЦІЮ" />
          </div>
        </div>
      </Container>
    </section>
  );
}
