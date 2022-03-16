import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 5</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Data Loaders: The Problem</h1>

        <div className={styles.slideGrid}>
          <Image
            src="/dataloaders-without.png"
            alt="Dataloaders"
            width={993}
            height={600}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/4-dataloaders">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/6">👉</a>
      </footer>
    </div>
  );
};

export default Page;
