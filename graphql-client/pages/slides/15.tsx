import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 14</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>
          Collaborative GraphQL and Advanced Usecases
        </h1>

        <div className={styles.slideGrid}>
          - Test
          <br />
          <br />- Test
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/2">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/4-dataloaders">👉</a>
      </footer>
    </div>
  );
};

export default Page;
