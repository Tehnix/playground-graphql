import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 9</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>
          Federated Schemas: Extreme Example
        </h1>

        <div className={styles.slideGrid}>
          - Let&apos;s take a look at example of fully adopting this concept
          <br />
          <br />
          <Image
            src="/secret/secret-AWSArchitecture.png"
            alt="Federated Schema"
            width={2000}
            height={836}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/8-federation">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/10">👉</a>
      </footer>
    </div>
  );
};

export default Page;
