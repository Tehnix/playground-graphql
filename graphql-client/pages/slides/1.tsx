import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 1</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>What is GraphQL?</h1>

        <div className={styles.slideGrid}>
          - An approach to developing APIs (alternative to REST)
          <br />
          <br />
          - A client-centric aproach, allowing the client to definte the
          struture of data needed, and that same structure is returned to them
          <br />
          <br />- Consists of: Type system, query language, execution semantics,
          validation, introspection, etc
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
        <a href="/slides">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/2">👉</a>
      </footer>
    </div>
  );
};

export default Page;
