import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ask on Chain</title>
        <meta
          name="description"
          content="Created to ask absolute anonymous questions."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={styles.main}>
        <div className={styles.navbarcontent}>
          <div>
            <Image
              src="/logo.png"
              alt="Ask on Chain Logo"
              width={128}
              height={128}
            />
          </div>
          <div className={styles.button}>
            <a>Connect Wallet</a>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.title}>Introducing</div>
          <div className={styles.textGradient}>Ask On Chain</div>
          <div className={styles.title}>
            {`"Dare to ask the Questions you are afraid of - Anonymously!"`}
          </div>
          <div className={styles.button}>
            <a href="#">Browse Profiles</a>
          </div>
        </div>

        <footer className={styles.footer}>
          <h3>
            built by{" "}
            <a
              href="https://linktr.ee/aditipolkam"
              target="_blank"
              rel="noreferrer"
            >
              <u> @aditipolkam</u>
            </a>
          </h3>
        </footer>
      </div>
    </>
  );
}
