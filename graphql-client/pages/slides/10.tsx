import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../../styles/Home.module.css";

const Page: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 10</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>
          Federated Schemas: Extreme Example
        </h1>

        <div className={styles.slideGrid}>
          - Each service in the Microservices box is a subgraph (a standalone
          GraphQL API)
          <br />
          <br />- The ms-graphql-gateway service stitches together all the
          subgraphs to provide a single schema to the client
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <Image
              src="/secret/secret-schema.png"
              alt="Federated Schema"
              width={456}
              height={600}
            />
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/9">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/11">👉</a>
      </footer>
    </div>
  );
};

export default Page;
