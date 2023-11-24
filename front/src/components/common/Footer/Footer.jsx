import Container from "../Container/Container";
import { SocialLinks } from "./SocialLinks/SocialLinks";
import { ButtonCall, ButtonMessage, Buttons } from "./Buttons/Buttons";
import { Navigation } from "./Navigation/Navigation";
import s from "./styles.module.scss";
import { Copyright } from "./Copy/Copy";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerContainer}>
         <SocialLinks />
          <Buttons>
            <ButtonCall />
            <ButtonMessage />
          </Buttons>
          <Navigation />
          <Copyright />
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
