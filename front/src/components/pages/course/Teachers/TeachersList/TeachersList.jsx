import Image from "next/image";
import s from "./teachersList.module.scss";
import SocialList from "@/components/common/SocialList/SocialList";
export default function TeachersList() {
  return (
    <ul>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/images/course-teacher/img1.png"
            width={376}
            height={376}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>Автор курсу</p>
              <h3 className={s.author_name}>ОЛЕКСІЙ СКОРОХОД</h3>
              <p className={s.author_description}>100+ років досвіду в UI/UX</p>
            </div>
            <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            />
          </div>
          <p className={s.teacher_info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cumque exercitationem eius excepturi laudantium ab, odio inventore
            mollitia hic maiores id delectus necessitatibus, blanditiis atque
            repellendus assumenda quibusdam voluptatum velit.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/images/course-teacher/img2.png"
            width={376}
            height={376}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>Автор курсу</p>
              <h3 className={s.author_name}>ОЛЕКСІЙ СКОРОХОД</h3>
              <p className={s.author_description}>100+ років досвіду в UI/UX</p>
            </div>
            <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            />
          </div>
          <p className={s.teacher_info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cumque exercitationem eius excepturi laudantium ab, odio inventore
            mollitia hic maiores id delectus necessitatibus, blanditiis atque
            repellendus assumenda quibusdam voluptatum velit. mollitia hic
            maiores id delectus necessitatibus, blanditiis atque repellendus
            assumenda quibusdam voluptatum velit. maiores id delectus
            necessitatibus
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/images/course-teacher/img3.png"
            width={376}
            height={376}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>Автор курсу</p>
              <h3 className={s.author_name}>ОЛЕКСІЙ СКОРОХОД</h3>
              <p className={s.author_description}>100+ років досвіду в UI/UX</p>
            </div>
            <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            />
          </div>
          <p className={s.teacher_info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cumque exercitationem eius excepturi laudantium ab, odio inventore
            mollitia hic maiores id delectus necessitatibus, blanditiis atque
            repellendus assumenda quibusdam voluptatum velit.
          </p>
        </div>
      </li>
      <li className={s.teacher_item}>
        <div className={s.image_thumb}>
          <Image
            src="/images/course-teacher/img4.png"
            width={376}
            height={376}
            alt="teacher image"
            className={s.teacher_image}
          />
        </div>
        <div className={s.info_thumb}>
          <div className={s.info_top_box}>
            <div className={s.info_text_wrapper}>
              <p className={s.author_course}>Автор курсу</p>
              <h3 className={s.author_name}>ОЛЕКСІЙ СКОРОХОД</h3>
              <p className={s.author_description}>100+ років досвіду в UI/UX</p>
            </div>
            <SocialList
              socialList="teachers_list"
              socialLink="teacher_list_link"
              socialIcon="teacher_list_icon"
            />
          </div>
          <p className={s.teacher_info}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            cumque exercitationem eius excepturi laudantium ab, odio inventore
            mollitia hic maiores id delectus necessitatibus, blanditiis atque
            repellendus assumenda quibusdam voluptatum velit.
          </p>
        </div>
      </li>
    </ul>
  );
}
