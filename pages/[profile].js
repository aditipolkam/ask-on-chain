import React from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Profile = () => {
  const router = useRouter();
  const { profile } = router.query;

  return (
    <main className={styles.main}>
      <h1>Profile: {profile}</h1>
      <div className={styles.grid}></div>
    </main>
  );
};

export default Profile;
