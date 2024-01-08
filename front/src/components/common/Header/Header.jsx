"use client";
import s from "./header.module.scss";
import Link from "next/link";
import Container from "../Container/Container";
import Image from "next/image";
import Button from "../Button/Button";
import Navigation from "./Navigation/Navigation";
import { useState, useEffect } from "react";
import MobMenu from "./MobMenu/MobMenu";
import { usePathname } from "next/navigation";
import { endpoints } from "@/services/serverAPI";

const classes = {
  nav: "header_nav",
  link: "header_link",
  list: "header_list",
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
    document.body.classList.remove("no-scroll");
  }, [pathname]);

  const onOpenMobileMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };
  return (
    <>
      <header className={s.header}>
        <Container>
          <div className={s.header_content_wrapper}>
            <button
              type="button"
              className={s.burger_button}
              onClick={onOpenMobileMenu}
            >
              {isOpen ? (
                <Image
                  src="/icons/modal-close.svg"
                  width={100}
                  height={50}
                  alt="qwe"
                />
              ) : (
                <Image
                  src="/icons/burger.svg"
                  width={100}
                  height={50}
                  alt="qwe"
                />
              )}
            </button>

            <Link href="/" className={s.header_logo}>
              <Image
                src="/icons/header-logo.svg"
                width={100}
                height={50}
                alt="Site logotype"
              />
            </Link>
            <Navigation className={classes} onChangeOpen={onOpenMobileMenu} />
            <Button
              text={"Замовити дзвінок"}
              className={"header_button"}
              endpoint={endpoints.callback}
            />
          </div>
        </Container>
      </header>
      <MobMenu isOpen={isOpen} />
    </>
  );
};

export { Header };
