import s from "./styles.module.scss";

export function Copyright() {
  return (
    <p className={s.copy}>
      Copyright &copy; {new Date().getFullYear()}, SPACEIT SCHOOL
    </p>
  );
}
