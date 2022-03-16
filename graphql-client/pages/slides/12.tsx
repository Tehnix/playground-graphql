import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 12</title>
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
          <Image
            src="/federation-subgraphs.png"
            alt="Federated Schema"
            width={827}
            height={179}
          />
          <Image
            src="/federation-supergraph.png"
            alt="Federated Schema"
            width={827}
            height={300}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/11">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/13">👉</a>
      </footer>
    </div>
  );
};

export default Page;
