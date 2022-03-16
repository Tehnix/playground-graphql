import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 13</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>
          Federated Schemas: How does it look?
        </h1>

        <div className={styles.slideGrid}>
          - Each subgraph implements each own parts of the schema
          <br />
          <br />
          - The super graph combines the schemas into the final single schema
          <br />
          <br />
          - A more advanced example
          <br />
          <br />
          <Image
            src="/federation-subgraphs-2.png"
            alt="Federated Schema"
            width={1028}
            height={600}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/12">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/14">👉</a>
      </footer>
    </div>
  );
};

export default Page;
