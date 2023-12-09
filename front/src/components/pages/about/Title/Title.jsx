import s from "./style.module.scss";

export default function Title({ text }) {
  return <h3 className={s.test}>{text}</h3>;
}
