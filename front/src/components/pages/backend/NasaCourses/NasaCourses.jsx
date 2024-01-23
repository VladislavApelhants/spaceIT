import CourseContainer from "@/components/common/CourseContainer/CourseContainer";
import s from "./nasaCourses.module.scss";
import Title from "@/components/common/Title/Title";
import Image from "next/image";

export default function NasaCourses() {
  return (
    <section className={s.nasa_section}>
      <CourseContainer>
        <div className={s.info_block}>
          <Title
            text="УСПІШНО ПРОЙДІТЬ НАВЧАННЯ ТА ОТРИМАЙТЕ ГАРАНТОВАНЕ ПРАЦЕВЛАШТУВАННЯ"
            className={"nasa_courses_title"}
            tagName={"h1"}
          />
          <p className={s.description}>
            Після успішного завершення дипломної роботи, ми допоможемо:
            <ol className="list-decimal pl-5">
              <li>
                Створити конкурентне резюме під керівництвом нашого досвідченого
                HR
              </li>
              <li>
                Проведемо тренувальні співбесіди для того, щоб вони стали для
                тебе звичайним досвідом
              </li>
              <li> Познайомимо з потужними платформами для пошуку роботи </li>
              <li>
                Наші HR допоможуть розібратись в вакансіях, підібрати ідеальну
                роботу для тебе та разом з тобою напишуть супровідний лист
              </li>
              <li>
                Після завершення курсу наші HR та викладачі будуть залишатися на
                зв’язку з тобою до першого робочого дня і, можливо, навіть трохи
                довше :)
              </li>
            </ol>
          </p>
          <div className={s.employment}></div>
        </div>
      </CourseContainer>
    </section>
  );
}
