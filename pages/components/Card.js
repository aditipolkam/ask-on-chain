import React, { useEffect } from "react";
import styles from "../../styles/Home.module.css";

const Card = (props) => {
  const { question } = props;

  return (
    <div className={styles.card}>
      <h3>{question.question_string}</h3>
      {question.answer == "" && <span>To be answered</span>}
      {question.answer != "" && <p>question.answer</p>}
      <footer className={styles.cardfooter}>
        <button>😍</button>
        <button>💜</button>
        <button>🤮</button>
        <button>😂</button>
      </footer>
    </div>
  );
};

export default Card;
