import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import s from "./hero.module.scss";
import Button from "@/components/common/Button/Button";
import HeroTechnologies from "./Hero_technologies/HeroTechnologies";
import HeroPresentation from "./HeroPresentation/HeroPresentation";
import Ellipse from "@/components/common/Ellipse/Ellipse";

import { endpoints } from "@/services/serverAPI";

export default function Hero() {
  return (
    <section className={s.hero_section}>
      <Title text="Frontend" className={"main_courses_title"} tagName={"h1"} />
      <Container>
        <div className={s.hero_all_vrapper}>
          <HeroPresentation />
          <div className={s.hero_info_vrapper}>
            <div className={s.title_box}>
              <Title
                text="Frontend"
                className={"courses_hero_title"}
                tagName={"h2"}
              />
              <p className={s.hero_description}>
                Навчіться професійно розроблювати дизайн сайтів та застосунків
              </p>
              <Button
                text="ЗАПИСАТИСЬ НА КУРС"
                className="hero_course_button"
                courseName="ui/ux design"
                endpoint={endpoints.callbackCourse}
              />
            </div>
            <HeroTechnologies />
          </div>
        </div>
      </Container>
      <Ellipse className="hero-cource-ellipse-top" />
      <Ellipse className="hero-cource-ellipse-bottom" />
    </section>
  );
}
