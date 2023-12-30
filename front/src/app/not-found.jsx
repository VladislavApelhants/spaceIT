import Link from "next/link";
import Container from "@/components/common/Container/Container";

import s from "./not-found.module.scss";

export default function NotFound() {
  return (
    <section className={s.notFound}>
      <Container>
        <div className={s.notFoundContainer}>
          <div>
            <h1 className={s.title}>404</h1>
            <p className={s.text}>Сторінка, яку ви шукаєте, не існує</p>
          </div>
          <Link href="/" className={s.link}>
            Назад
          </Link>
        </div>
      </Container>
    </section>
  );
}
