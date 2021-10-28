/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <script
        src="/smarteditor/js/service/HuskyEZCreator.js"
        charSet="utf-8"
      ></script>
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BEES4T6SLY"
      ></script>
      <script
        dangerouslySetInnerHTML={{
          __html: `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BEES4T6SLY');
`,
        }}
      ></script>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
