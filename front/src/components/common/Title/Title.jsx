import s from "./styles.module.scss";

export default function Title({ text, className, tagName }) {
  const Tag = tagName || "h3";
  return <Tag className={s[className]}>{text}</Tag>;
}
