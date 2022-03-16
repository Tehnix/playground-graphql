import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 8</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Federated Schemas</h1>

        <div className={styles.slideGrid}>
          - Federated schemas allow us to build a schema from multiple sources
          <br />
          <br />
          - A schema consist of multiple subgraphs and a single supergraph that
          combines everything into the final schema
          <br />
          <br />
          - An alternative is Schema Stitching, but the idea is the same with a
          difference in how you combine the subgraphs
          <br />
          <br />
          <Image
            src="/federation.png"
            alt="Federated Schema"
            width={1158}
            height={554}
          />
          <br />
          <a
            href="https://www.apollographql.com/docs/federation/v2/"
            style={{ color: "gray", marginTop: 10, fontSize: "1rem" }}
          >
            Above example is from the Apollo Federation docs.
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/7">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/9">👉</a>
      </footer>
    </div>
  );
};

export default Page;
