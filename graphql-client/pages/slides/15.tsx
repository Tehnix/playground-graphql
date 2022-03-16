import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, gql } from "@apollo/client";

import styles from "../../styles/Home.module.css";

const QUERY_POSTS = gql`
  query GetPosts {
    posts {
      id
    }
  }
`;

const Page: NextPage = () => {
  const { loading, error, data } = useQuery(QUERY_POSTS);
  const second = useQuery(QUERY_POSTS, { fetchPolicy: "network-only" });
  const third = useQuery(QUERY_POSTS, { fetchPolicy: "network-only" });

  let content = <></>;
  if (loading) {
    content = <p>Loading...</p>;
  } else if (error) {
    content = <p>Error :(</p>;
  } else {
    content = <p>{JSON.stringify(data, null, 2)}</p>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Engineering Study Club: Slide 15</title>
      </Head>

      <main className={styles.slideMain}>
        <h1 className={styles.slideTitle}>Caching</h1>

        <div className={styles.slideGrid}>
          - Apollo specific GraphQL features
          {content}
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="/slides/14">👈</a> written by tehnix / codetalk.io{" "}
        <a href="/slides/15">🤗</a>
      </footer>
    </div>
  );
};

export default Page;
