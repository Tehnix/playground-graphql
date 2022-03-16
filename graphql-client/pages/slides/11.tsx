import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 11</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Federated Schemas: Why?</h1>

        <div className={styles.slideGrid}>
          - Federated schemas allow us to split up our domains and services
          <br />
          <br />
          - It facilitates microservices and allow us to scale our services
          independently of each other
          <br />
          <br />
          <Image
            src="/federation-teams.png"
            alt="Federated Schema"
            width={830}
            height={500}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/10">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/12">👉</a>
      </footer>
    </div>
  );
};

export default Page;
