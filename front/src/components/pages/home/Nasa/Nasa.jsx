import s from "./styles.module.scss";

import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";

export default function Nasa() {
  return (
    <section className={s.nasa}>
      <div className={s.bg}></div>
      <div className={s.div}>
        <Container>
          <div className={s.nasaContainer}>
            <Title
              text="ми гарантуємо офіційне працевлаштування"
              tagName="h1"
              className="nasaTitle"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}
