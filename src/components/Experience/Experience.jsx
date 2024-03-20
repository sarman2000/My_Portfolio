import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  const redirectToGmail = () => {
    const email = 'madan@academiacollege.edu.np'; 
    window.location.href = `https://gmail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
          <h2 className={styles.skilltitle}>Skills</h2>
        </div>
        <div className={styles.experience}>
          <h2 className={styles.title}>Searching for Jobs...</h2>
          <a className={styles.contactBtn} onClick={redirectToGmail}>
          Hire me in your company!!
        </a>
        </div>
      </div>
    </section>
  );
};
