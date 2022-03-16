import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 1</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Collaborative GraphQL</h1>

        <div className={styles.slideGrid}>
          - Talking the same language: SDL + Query Language
          <br />
          <br />- Mocking APIs using GraphQL Faker
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/1">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/3">👉</a>
      </footer>
    </div>
  );
};

export default Page;
