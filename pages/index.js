import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Create from "./create";

export default function Home() {
  const [account, setAccount] = useState();
  const [loading, setLoading] = useState(false);

  const connectWallet = async () => {
    setLoading(true);
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setAccount(accounts[0]);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setAccount(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

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
            <Link href={"/"}>
              <Image
                src="/logo.png"
                alt="Ask on Chain Logo"
                width={128}
                height={128}
              />
            </Link>
          </div>
          <div className={styles.button} onClick={connectWallet}>
            {account ? <a>Wallet Connected</a> : <a>Connect Wallet</a>}
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.title}>Introducing</div>
          <div className={styles.textGradient}>Ask On Chain</div>
          <div className={styles.title}>
            {`"Dare to ask the Questions you are afraid of - Anonymously!"`}
          </div>
          <div className={styles.profilebuttons}>
            <div className={styles.button}>
              <Link href="#">Browse Profiles</Link>
            </div>
            <Create />
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
