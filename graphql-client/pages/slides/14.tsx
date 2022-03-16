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
          Other Advanced Features: Batching and Caching
        </h1>

        <div className={styles.slideGrid}>
          - Apollo specific GraphQL features
          <br />
          <br />
          - Batching of requests in the HTTP Link to combine multiple separate
          GraphQL HTTP requests into a single HTTP request
          <br />
          <br />- Caching methods in the GraphQL Client: cache-first,
          cache-only, network-only, no-cache, cache-and-network
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/13">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/14">🤗</a>
      </footer>
    </div>
  );
};

export default Page;
