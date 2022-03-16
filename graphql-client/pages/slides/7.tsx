import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 7</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Data Loaders: The Solution</h1>

        <div className={styles.slideGrid}>
          - Dataloaders!
          <br />
          <br />
          - Instead of fetching your data directly, you fetch your data through
          a dataloader instead
          <br />
          <br />
          - A dataloader handles a couple of things: Batches up calls to the
          loader over a short period of time + executes the actual data calls +
          memoizes the results (optional)
          <Image
            src="/dataloaders-visualization.gif"
            alt="Dataloaders"
            width={700}
            height={400}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/6">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/8-federation">👉</a>
      </footer>
    </div>
  );
};

export default Page;
