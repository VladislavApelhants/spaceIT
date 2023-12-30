import Container from "@/components/common/Container/Container";
import SkillsList from "./SkillsList/SkillsList";
import s from "./index.module.scss";
import Slider from "./Slider/Slider";
import Button from "@/components/common/Button/Button";
import Ellipse from "@/components/common/Ellipse/Ellipse";
import { endpoints } from "@/services/serverAPI";

export default function Hero() {
  return (
    <section className={s.hero_section}>
      <Container>
        <div className={s.hero_wrapper}>
          <div className={s.hero_main_block}>
            <h2 className={s.hero_title}>
              Космічний рівень навчання з SPACEIT SCHOOL
            </h2>
            <div className={s.hero_skills_wrapper}>
              <SkillsList />
              <Button
                text={"ЗАПИСАТИСЬ НА КУРС"}
                className="hero_button"
                endpoint={endpoints.callback}
              />
            </div>
          </div>
          <Slider />
        </div>
      </Container>
      <Ellipse className={"hero_ellipse"} />
    </section>
  );
}
