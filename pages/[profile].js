import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import user_questions from "../dummydata/user_questions.json";

const Profile = () => {
  const [questions, setQuestions] = React.useState([]);
  const router = useRouter();
  const { profile } = router.query;

  useEffect(() => {
    setQuestions(user_questions.questions);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.navbarcontent}>
        <div>
          <Image
            src="/logo.png"
            alt="Ask on Chain Logo"
            width={128}
            height={128}
          />
        </div>
        <div>
          <h1>
            Anonymous Questions for <span>{profile}</span>
          </h1>
        </div>
        <div className={styles.button}>
          <a>Ask Question</a>
        </div>
      </div>
      <div className={styles.grid}>
        {questions.map((question) => (
          <div className={styles.card} key={question.id}>
            <h3>{question.question_string}</h3>
            <p>{question.answer}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Profile;
