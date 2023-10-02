import { useState } from "react";
// next
import Link from "next/link";
// styles
import styles from "./MenuLinks.module.scss";
// components
import SideMenu from "..";
import PaidTariff from "../PaidTariff";
// icons
import { LogoIcon } from "@/assets/icons/logo";
import { AboutIcon } from "@/assets/icons/about";
import { BlogIcon } from "@/assets/icons/blog";
import { PayIcon } from "@/assets/icons/pay";

const MenuLinks = () => {
  const [sideMenuIsOpen, setSideMenuIsOpen] = useState<boolean>(false);

  const openPaidSideMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setSideMenuIsOpen(true);
  };

  return (
    <div className={styles.menuLinks}>
      <div className={styles.heading}>
        <Link href="/" className={styles.logo}>
          <LogoIcon />
        </Link>
        <div className={styles.text}>
          <span className={styles.title}>Veeb.io</span>
          <span className={styles.subTitle}>ПОИСК B2B-КОНТАКТОВ</span>
        </div>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Link href="/about">
            <AboutIcon />
            Что такое Veebio
          </Link>
        </li>
        <li className={styles.link}>
          <a href="" onClick={(e) => openPaidSideMenu(e)}>
            <PayIcon /> Тарифы
          </a>
        </li>
        <li className={styles.link}>
          <Link href="#">
            <BlogIcon /> Блог
          </Link>
        </li>
      </ul>
      <div className={styles.doubleOverlay}>
        <SideMenu
          children={<PaidTariff />}
          isOpen={sideMenuIsOpen}
          onClose={setSideMenuIsOpen}
        />
      </div>
    </div>
  );
};

export default MenuLinks;
