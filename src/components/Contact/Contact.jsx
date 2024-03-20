import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {

  const redirectToGmail = () => {
    const email = 'madan@academiacollege.edu.np'; 
    window.location.href = `https://gmail.google.com/mail/?view=cm&fs=1&to=${email}`;
  };
  
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a onClick={redirectToGmail}>gmail.com/madan</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/madan-b-k-040921241">linkedin.com/madan</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/sarman2000">github.com/madan</a>
        </li>
      </ul>
    </footer>
  );
};
