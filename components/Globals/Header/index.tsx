"use client";
import { useEffect, useState } from "react";
// next
import Link from "next/link";
import { usePathname } from "next/navigation";
// styles
import styles from "./Header.module.scss";
// icons
import { LogoGroupIcon } from "@/assets/icons/logoGroup.js";
import { UserIcon } from "@/assets/icons/user.js";
import { BurgerMenuIcon } from "@/assets/icons/burgerMenu.js";
// components
import PaidTariff from "../SideMenu/PaidTariff";
import SideMenu from "../SideMenu";
import MenuLinks from "../SideMenu/MenuLinks";

const Header = () => {
  const [sideMenuValue, setSideMenuValue] = useState<string>("");
  const [sideMenuIsOpen, setSideMenuOpen] = useState<boolean>(false);

  const pathname= usePathname();

  const openPaidSideMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSideMenuOpen(true);
    setSideMenuValue("paidTariff");
  };

  const openLinksSideMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSideMenuOpen(true);
  };

  useEffect(() => {
    setSideMenuOpen(false);
  }, [pathname])

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.leftHand}>
            <Link href="/" className={styles.logo}>
              <LogoGroupIcon />
            </Link>
            <div className={styles.divider}></div>
            <div className={styles.title}>Поиск B2B-контактов</div>
          </div>
          <div className={styles.rightHand}>
            <ul className={styles.links}>
              <li className={styles.link}>
                <Link href="/about">Что такое Veebio</Link>
              </li>
              <li className={styles.link}>
                <a href="" onClick={(e) => openPaidSideMenu(e)}>
                  Тарифы
                </a>
              </li>
              <li className={styles.link}>
                <a href="#">Блог</a>
              </li>
            </ul>
            <div className={styles.icons}>
              <i
                onClick={(e) => openPaidSideMenu(e)}
                className={styles.profile}
              >
                <UserIcon />
              </i>
              <i onClick={(e) => openLinksSideMenu(e)} className={styles.menu}>
                <BurgerMenuIcon />
              </i>
            </div>
          </div>
        </div>
      </header>
      <SideMenu
        children={
          sideMenuValue === "paidTariff" ? <PaidTariff /> : <MenuLinks />
        }
        isOpen={sideMenuIsOpen}
        onClose={setSideMenuOpen}
      />
    </>
  );
};

export default Header;
