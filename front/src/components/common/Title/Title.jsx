import s from "./styles.module.scss";

export default function Title({ text, className }) {
  return <h3 className={s[className]}>{text}</h3>;
}
