"use client";
import React from "react";
import s from "./navLink.module.scss";
import { Link } from "react-scroll";
import { useInView } from "react-intersection-observer";

export default function NavLink({ target, label }) {
  const [ref] = useInView({ triggerOnce: true });

  return (
    <li className={s.sidebar_nav_item} ref={ref}>
      <Link
        activeClass={s.active}
        to={target}
        href={`${target}/link`}
        spy={true}
        smooth={true}
        offset={-180}
        duration={200}
        className={s.sidebar_nav_link}
        title={`link to ${label}`}
      >
        {label}
      </Link>
    </li>
  );
}
