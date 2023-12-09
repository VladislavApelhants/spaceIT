import s from "./button.module.scss";
export default function Button({ text, className }) {
  return (
    <button type="button" className={s[className]}>
      {text}
    </button>
  );
}
