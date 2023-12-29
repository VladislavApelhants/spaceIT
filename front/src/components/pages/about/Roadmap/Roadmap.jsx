import Image from "next/image";
import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";

import s from "./styles.module.scss";

export default function Roadmap() {
  return (
    <section className={s.roadmap}>
      <div className={s.redCircle}></div>
      <Container>
        <Title tagName="h3" text="roadmap" className="roadmapTitle" />
        <div className={s.roadmapContainer}>
          <div className={s.imagesBox}>
            <Image
              src="/images/roadmap/img_1.jpg"
              width={784}
              height={441}
              alt="image with many windows"
              style={{ borderRadius: "24px" }}
              className={s.image1}
              loading="lazy"
            />
            <div className={s.firstImgWrapper}>
              <span className={s.image2}></span>
              <span className={s.image3}></span>
            </div>
            <span className={s.image4Desktop}></span>
            <div className={s.secondImgWrapper}>
              <span className={s.image4}></span>
              <span className={s.image5}></span>
            </div>
            <div></div>
          </div>
          <ul className={s.planList}>
            <li className={s.planListItem}>
              <div className={s.icons}>
                <span className={s.activeCircle}></span>
                <span className={s.dotes}></span>
              </div>
              <div className={s.content}>
                <h4 className={s.planListItemTitle}>2023</h4>
                <p className={s.planListItemText}>
                  Ми відкрили школу і тепер йдемо в майбутнє крок за кроком
                  цифровізуючи державу
                </p>
              </div>
            </li>
            <li className={s.planListItem}>
              <div className={s.icons}>
                <span className={s.circle}></span>
                <span className={s.dotes}></span>
              </div>
              <div className={s.content}>
                <h4 className={s.planListItemTitle}>2024</h4>
                <p className={s.planListItemText}>Плани на майбутнє</p>
              </div>
            </li>
            <li className={s.planListItem}>
              <div className={s.icons}>
                <span className={s.circle}></span>
                <span className={s.dotes}></span>
              </div>
              <div className={s.content}>
                <h4 className={s.planListItemTitle}>2025</h4>
                <p>Плани на майбутнє</p>
              </div>
            </li>
            <li className={s.planListItem}>
              <div className={s.icons}>
                <span className={s.circle}></span>
                <span className={s.dotes}></span>
              </div>
              <div className={s.content}>
                <h4 className={s.planListItemTitle}>2026</h4>
                <p className={s.planListItemText}>Плани на майбутнє</p>
              </div>
            </li>
            <li className={s.planListItem}>
              <div className={s.icons}>
                <span className={s.circle}></span>
                <span className={s.dotes}></span>
              </div>
              <div className={s.content}>
                <h4 className={s.planListItemTitle}>2027</h4>
                <p className={s.planListItemText}>Плани на майбутнє</p>
              </div>
            </li>
            <li className={s.planListItem}>
              <div className={s.icons}>
                <span className={s.circle}></span>
              </div>
              <div className={s.content}>
                <h4 className={s.planListItemTitle}>2028</h4>
                <p className={s.planListItemText}>Плани на майбутнє</p>
              </div>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
