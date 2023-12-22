import NavLink from "./NavLink/NavLink";
import s from "./sidebar.module.scss";
export default function Sidebar({ targets = [], labels = [], className = "" }) {
  return (
    <div className={`${s[className]} ${s.raleway}`}>
      <aside className={s.sidebar}>
        <nav>
          <ul className={s.sidebar_list}>
            {targets.map((target, index) => (
              <NavLink
                key={target}
                target={target}
                label={labels[index] || ""}
              />
            ))}
          </ul>
        </nav>
      </aside>
    </div>
  );
}
