import s from "./tech.module.scss";
import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";
export default function TechSection() {
  return (
    <section className={s.tech}>
      <Container>
        <div className={s.wrapper}>
          <Title
            tagName="h1"
            text="ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ"
            className="tech_title"
          />
          <p className={s.tech_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            vero pariatur nemo dolore assumenda nisi amet labore minima iste
            saepe. Quo similique quae cupiditate, ex enim eos ipsum praesentium
            minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis reiciendis itaque laboriosam architecto earum. Rem reiciendis
            sit beatae magnam, soluta doloribus ipsam. Ipsam, enim consequuntur
            ipsa dolorem doloremque laboriosam veniam!
          </p>
          <p className={s.tech_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            vero pariatur nemo dolore assumenda nisi amet labore minima iste
            saepe. Quo similique quae cupiditate, ex enim eos ipsum praesentium
            minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis reiciendis itaque laboriosam architecto earum. Rem reiciendis
            sit beatae magnam, soluta doloribus ipsam. Ipsam, enim consequuntur
            ipsa dolorem doloremque laboriosam veniam!
          </p>
          <p className={s.tech_description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            vero pariatur nemo dolore assumenda nisi amet labore minima iste
            saepe. Quo similique quae cupiditate, ex enim eos ipsum praesentium
            minus. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quis reiciendis itaque laboriosam architecto earum. Rem reiciendis
            sit beatae magnam, soluta doloribus ipsam. Ipsam, enim consequuntur
            ipsa dolorem doloremque laboriosam veniam!
          </p>
        </div>
      </Container>
    </section>
  );
}
