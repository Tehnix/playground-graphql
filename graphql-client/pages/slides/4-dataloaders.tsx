import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 4</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Data Loaders: The Problem</h1>

        <div className={styles.slideGrid}>
          - The N+1 Problem
          <br />
          <br />
          - Once we start nesting data that might be gotten from various
          different tables, datasources or other ways of accessing them, we
          start to run into problems
          <br />
          <br />
          - The query below could easily lead to: 1 query for the user → 1 query
          for all reviews → n queries for each user for each review
          <br />
          <br />
          - Voila: The N+1 Problem
          <br />
          <br />
          <Image
            src="/query-example.png"
            alt="Query example"
            width={600}
            height={529}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/3">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/5">👉</a>
      </footer>
    </div>
  );
};

export default Page;
