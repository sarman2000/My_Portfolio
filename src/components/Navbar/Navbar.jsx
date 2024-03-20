import React, { useState } from "react";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <a className={styles.title} href="/">
          <img
            src={getImageUrl("logo/logot.png")}
            alt="logo"
            className={styles.logo}
          />
        </a>
      </div>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a className={styles.navItem} href="#about">About</a>
          </li>
          <li>
            <a className={styles.navItem} href="#experience">Experience</a>
          </li>
          <li>
            <a className={styles.navItem} href="#projects">Projects</a>
          </li>
          <li>
            <a className={styles.navItem} href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
