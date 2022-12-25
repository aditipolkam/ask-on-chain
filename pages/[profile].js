import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import user_questions from "../dummydata/user_questions.json";
import Card from "./components/Card";
import FormDialog from "./components/FormDialog";
import Link from "next/link";
import getUserQuestions from "./api/getAllQuestions";

const Profile = () => {
  const [questions, setQuestions] = React.useState([]);
  const [ques, setQues] = React.useState([]);
  const router = useRouter();
  const { profile } = router.query;

  useEffect(() => {
    getUserQuestions(profile).then((res) => {
      setQuestions(res);
      //setQuestions(user_questions.questions);
    });

    console.log(questions);
  }, [profile]);

  return (
    <main className={styles.main}>
      <div className={styles.navbarcontent}>
        <div>
          <Link href={"/"}>
            <Image
              src="/logo.png"
              alt="Ask on Chain Logo"
              width={128}
              height={128}
            />
          </Link>
        </div>

        <div>
          <h1>
            Anonymous Questions for <span>{profile}</span>
          </h1>
        </div>
        <div>
          <FormDialog username={profile} />
        </div>
      </div>
      <div className={styles.grid}>
        {questions &&
          questions.map((question) => (
            <Card question={question} key={question.id} />
          ))}
      </div>
    </main>
  );
};

export default Profile;
