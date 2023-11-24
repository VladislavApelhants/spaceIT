import Image from "next/image";
import Link from "next/link";

import Container from "../Container/Container";
import s from "./styles.module.scss";
import Title from "../Title/Title";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Container>
        <div className={s.footerContainer}>
          <div className={s.socialWrapper}>
            <Image
              src="/icons/logo.svg"
              width={104}
              height={47}
              alt="logo"
              className={s.logo}
            />

            <ul className={s.socialList}>
              <li>
                <a href="#" target="_blank">
                  <Image
                    src="/icons/social-icons/instagram.svg"
                    width={104}
                    height={47}
                    alt="instagram"
                    className={s.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image
                    src="/icons/social-icons/telegram.svg"
                    width={104}
                    height={47}
                    alt="telegram"
                    className={s.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image
                    src="/icons/social-icons/youtube.svg"
                    width={104}
                    height={47}
                    alt="youtube"
                    className={s.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image
                    src="/icons/social-icons/facebook.svg"
                    width={104}
                    height={47}
                    alt="facebook"
                    className={s.socialIcon}
                  />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <Image
                    src="/icons/social-icons/linkedin.svg"
                    width={104}
                    height={47}
                    alt="linkedin"
                    className={s.socialIcon}
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className={s.buttons}>
            <button type="button" className={`${s.btn} ${s.btnCall}`}>
              замовити дзвінок
            </button>
            <button type="button" className={`${s.btn} ${s.btnMessage}`}>
              <Image
                src="/icons/message.svg"
                width={104}
                height={47}
                alt="logo"
                className={s.messageIcon}
              />
              потрібна допомога?
              <br /> залиште повідомлення
            </button>
          </div>
          <nav className={s.footerNav}>
            <div className={s.footerNavItem}>
              <Title text="курси" className="footer-title" />
              <ul className={s.list}>
                <li>
                  <Link href="#">Software Engineering</Link>
                </li>
                <li>
                  <Link href="#">Data Science</Link>
                </li>
                <li>
                  <Link href="#">UI/UX Design</Link>
                </li>
              </ul>
            </div>
            <div className={s.footerNavItem}>
              <Title text="інформація" className={"footer-title"} />
              <ul className={s.list}>
                <li>
                  <Link href="/about">Про нас</Link>
                </li>
                <li>
                  <Link href="/contact">Контакти</Link>
                </li>
                <li>
                  <Link href="#">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className={s.footerNavItem}>
              <Title text="додатки" className={"footer-title"} />
              <ul className={s.list}>
                <li>
                  <Link href="#">Терміни та умови</Link>
                </li>
                <li>
                  <Link href="#">Політика конфіденційності</Link>
                </li>
                <li>
                  <Link href="#">Повернення коштів</Link>
                </li>
              </ul>
            </div>
            <div className={`${s.footerNavItem} ${s.hide}`}>
              <button type="button" className={`${s.btn} ${s.btnCall}`}>
                замовити дзвінок
              </button>
              <button type="button" className={`${s.btn} ${s.btnMessage}`}>
                <Image
                  src="/icons/message.svg"
                  width={104}
                  height={47}
                  alt="logo"
                  className={s.messageIcon}
                />
                потрібна допомога?
                <br /> залиште повідомлення
              </button>
            </div>
          </nav>
          <p className={s.copy}>Copyright &copy; 2023, SPACEIT SCHOOL</p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
