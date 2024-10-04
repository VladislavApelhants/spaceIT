import Image from "next/image";
import s from "./teachersList.module.scss";

export default function TeachersList() {
  const teachers = [
    {
      id: 1,
      name: "ВЛАДИСЛАВ ЛЕВІЩЕНКО",
      course: "АВТОР КУРСУ/ЛЕКТОР",
      description: "11 років досвіду в Back-end та Front-end розробці",
      fullInfo:
        "Владислав Левіщенко - висококваліфікований фахівець у сфері Back-end та Front-end розробці з 11-річним досвідом...",
      imageUrl: "/pages/back-end/teachers/vladislav-levichenko.png",
    },
    {
      id: 2,
      name: "ДЕНИС КОЛОДЮК",
      course: "МЕНТОР",
      description: "8 років досвіду в Back-end розробці",
      fullInfo:
        "Він спеціалізується у створенні складних серверних систем і взаємодії з базами даних...",
      imageUrl: "/pages/back-end/teachers/denis-colodyk.png",
    },
  ];

  return (
    <ul>
      {teachers.map((teacher) => (
        <li className={s.teacher_item} key={teacher.id}>
          <div className={s.image_thumb}>
            <Image
              src={teacher.imageUrl}
              width={765}
              height={765}
              alt="teacher image"
              className={s.teacher_image}
            />
          </div>
          <div className={s.info_thumb}>
            <div className={s.info_top_box}>
              <div className={s.info_text_wrapper}>
                <p className={s.author_course}>{teacher.course}</p>
                <h3 className={s.author_name}>{teacher.name}</h3>
                <p className={s.author_description}>{teacher.description}</p>
              </div>
            </div>
            <p className={s.teacher_info}>{teacher.fullInfo}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
