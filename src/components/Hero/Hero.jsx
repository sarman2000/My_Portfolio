import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  const redirectToGmail = () => {
    const email = 'madan@academiacollege.edu.np'; 
    window.location.href = `https://gmail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Madan</h1>
        <p className={styles.description}>
          I'm a full-stack developer using MERN. Reach out if you'd like to learn more!
        </p>
        <a className={styles.contactBtn} onClick={redirectToGmail}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage1.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
