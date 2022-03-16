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
        <h1 className={styles.slideTitle}>
          GraphQL Features: Nullability, Introspection, Validation
        </h1>

        <div className={styles.slideGrid}>
          - Nullability in GraphQL and why it’s the default: Handling exceptions
          and example of how it will look with nullable fields and partial data
          <br />
          <br />
          - Expensive fields and using Projections/info to know if the specific
          field was actually requested or not
          <br />
          <br />- Letting the GraphQL Schema Validator do the work for you by
          designing your APIs with the validator in mind
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/2">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/4-dataloaders">👉</a>
      </footer>
    </div>
  );
};

export default Page;
