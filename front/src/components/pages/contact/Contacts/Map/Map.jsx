import Container from "@/components/common/Container/Container";
import Title from "@/components/common/Title/Title";

import s from "./styles.module.scss";

export default function Map() {
  return (
    <section className={s.map}>
      <div className={s.circle}></div>
      <Container>
        <Title tagName="h3" text="наша адреса" className="mapTitle" />
        <a
          href="https://www.google.com/maps/place/%D1%83%D0%BB.+%D0%9C%D0%B0%D0%BB%D0%B0%D1%8F+%D0%91%D0%B5%D1%80%D0%B4%D0%B8%D1%87%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F,+17%D0%B0,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80,+%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+10014/@50.2533068,28.6598769,17z/data=!3m1!4b1!4m6!3m5!1s0x472c649117df19a9:0x7ce2450dbc5f816a!8m2!3d50.2533068!4d28.6624518!16s%2Fg%2F11r_mh3y4c?entry=ttu"
          target="_blank"
          className={s.link}
        >
          <span className={s.mapPin}></span>
          <p className={s.text}>Житомир. Малая бердичевская 17а</p>
        </a>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2551.068400479033!2d28.659876876498682!3d50.25330677155511!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472c649117df19a9%3A0x7ce2450dbc5f816a!2z0YPQuy4g0JzQsNC70LDRjyDQkdC10YDQtNC40YfQtdCy0YHQutCw0Y8sIDE30LAsINCW0LjRgtC-0LzQuNGALCDQltC40YLQvtC80LjRgNGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCAxMDAxNA!5e0!3m2!1sru!2sua!4v1703938926396!5m2!1sru!2sua"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className={s.googleMap}
        ></iframe>
      </Container>
    </section>
  );
}
