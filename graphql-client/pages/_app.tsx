import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
} from "@apollo/client";
import { BatchHttpLink } from "@apollo/client/link/batch-http";

const link = new BatchHttpLink({
  uri: "http://localhost:4004",
  batchMax: 5, // No more than 5 operations per batch
  batchInterval: 20, // Wait no more than 20ms after first batched operation
});

const client = new ApolloClient({
  uri: "http://localhost:4004",
  cache: new InMemoryCache(),
  link: from([link]),

  /**
   * If true, the Apollo Client Devtools browser extension can connect to Apollo Client
   * in your production environment. The extension can always connect in a
   * non-production environment.
   */
  connectToDevTools: true,

  /**
   * If false, Apollo Client sends every created query to the server, even if a
   * completely identical query (identical in terms of query string, variable
   * values, and operationName) is already in flight.
   */
  queryDeduplication: true,
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
