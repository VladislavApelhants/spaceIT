import Container from "@/components/common/Container/Container";
import s from "./Hero.module.scss";
export default function Hero() {
  return (
    <section>
      <Container>
        <div className={s.hero_vrapper}>
          <Title />
        </div>
      </Container>
    </section>
  );
}
