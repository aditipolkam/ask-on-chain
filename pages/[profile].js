import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
import Card from "./components/Card";
import FormDialog from "./components/FormDialog";
import Link from "next/link";
import getUserQuestions from "./api/getAllQuestions";
import checkIfWalletIsConnected from "./api/checkIfWalletIsConnected";
import getUser from "./api/getUser";

const Profile = () => {
  const [questions, setQuestions] = React.useState([]);
  const [selfAccount, setSelfAccount] = React.useState(false);
  const router = useRouter();
  const { profile } = router.query;

  useEffect(() => {
    getUser().then((res) => {
      if (res == profile) {
        console.log("Profile: get User res and profile", res, profile);
        setSelfAccount(true);
      }
    });
    getUserQuestions(profile).then((res) => {
      setQuestions(res);
      //setQuestions(user_questions.questions);
    });

    console.log("profile: questions", questions);
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
        <div>{!selfAccount && <FormDialog username={profile} />}</div>
      </div>
      <div className={styles.grid}>
        {questions &&
          questions.map((question) => (
            <Card
              ques={question}
              key={question.id}
              selfAccount={selfAccount}
              username={profile}
              id={question.id}
            />
          ))}
      </div>
    </main>
  );
};

export default Profile;
