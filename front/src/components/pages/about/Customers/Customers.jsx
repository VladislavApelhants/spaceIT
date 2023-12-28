import Title from "@/components/common/Title/Title";
import Container from "@/components/common/Container/Container";
import customerDb from "./customerDb";
import Image from "next/image";
import s from "./customers.module.scss";
import Ellipse from "@/components/common/Ellipse/Ellipse";

export default function Customers() {
  return (
    <section className={s.customers}>
      <Ellipse className="customers" />
      <Container>
        <Title tagName="h2" text="НАШІ ПАРТНЕРИ" className="customers_title" />
        <ul className={s.customers_list}>
          {customerDb.map((e) => (
            <li key={e.id} className={s.customers_item}>
              <Image
                src="/icons/star.svg"
                width={160}
                height={160}
                alt="test"
                className={s.icon_customer}
              />
              <p className={s.customers_name}>{e.name}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
