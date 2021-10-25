/* eslint-disable @next/next/no-sync-scripts */
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const client = new ApolloClient({
  uri: "localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <script src="/smarteditor/js/service/HuskyEZCreator.js" charSet="utf-8"></script>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
