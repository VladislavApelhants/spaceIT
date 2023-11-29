import Container from "@/components/common/Container/Container";
import s from "./socials.module.scss";
import Title from "@/components/common/Title/Title";
import SocialList from "@/components/common/SocialList/SocialList";
import SocialsSlider from "./SocialsSlider/SocialsSlider";
export default function Socials() {
  return (
    <section className={s.social_section}>
      <Container>
        <div className={s.socials_section_wrpapper}>
          <div className={s.title_wrapper}>
            <Title
              text="ЧАСТИНКА КОСМОСУ В НАШИХ СОЦМЕРЕЖАХ"
              className="socials_title"
              tagName="h2"
            />
            <p className={s.social_description}>
              Підписуйтесь на SpaceIT School!
            </p>
            <SocialList
              socialList="social_socialList"
              socialLink="social_socialLink"
              socialIcon="social_socialIcon"
            />
          </div>
          <SocialsSlider />
        </div>
      </Container>
    </section>
  );
}
