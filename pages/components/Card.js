import React from "react";
import styles from "../../styles/Home.module.css";

const Card = () => {
  return (
    <div>
      <a
        href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        className={styles.card}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={inter.className}>
          Docs <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          Find in-depth information about Next.js features and&nbsp;API.
        </p>
      </a>
    </div>
  );
};

export default Card;
