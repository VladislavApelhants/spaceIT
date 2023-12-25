import s from "./hero.module.scss";
import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import Image from "next/image";

export default function Hero() {
  return (
    <section className={s.hero}>
      <Container>
        <div className={s.wrapper}>
          <div>
            <Title
              text="ПРО НАС"
              tagName={"h1"}
              className={"main_about_title"}
            />
            <Image
              src="/images/aboutHero/aboutHero.png"
              width={611}
              height={371}
              alt="Зображення команди"
              className={s.hero_image_mob}
            />
            <p className={s.description}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Deserunt, aspernatur cum suscipit nesciunt libero mollitia,
              inventore quasi expedita maxime, possimus quia a quam minus esse
              rem quae vitae debitis commodi. Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Deserunt, aspernatur cum suscipit
              nesciunt libero mollitia, inventore quasi expedita maxime,
              possimus quia a quam minus esse rem quae vitae debitis commodi.
            </p>
          </div>
          <Image
            src="/images/aboutHero/aboutHero.png"
            width={611}
            height={371}
            alt="Зображення команди"
            className={s.hero_image}
          />
        </div>
      </Container>
    </section>
  );
}
