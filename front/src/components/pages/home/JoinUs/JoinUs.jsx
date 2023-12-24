import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
import Button from "@/components/common/Button/Button";
import { endpoints } from "@/services/callBackAPI";

import s from "./styles.module.scss";

export default function JoinUs() {
  return (
    <section className={s.joinUs}>
      <Container>
        <div className={s.joinUsContainer}>
          <Title
            text="Почніть вашу космічну пригоду у світ іт-сфери"
            tagName="h2"
            className="joinUsMainTitle"
          />
          <Title
            text="Долучайтесь до нашої ІТ-школи та гарантуйте собі працевлаштування в провідних компаніях"
            tagName="h3"
            className="joinUsSubTitle"
          />
          <Button
            text="долучитись"
            className="joinUsBtn"
            endpoint={endpoints.callback}
          />
          <div className={s.circleRightBottom}></div>
          <div className={s.circleLeftTop}></div>
        </div>
      </Container>
    </section>
  );
}
