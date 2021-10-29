/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.scss";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="title" content="Beta Festival" />
        <meta
          property="keyword"
          content="Beta Festival, 베타페스타, 안동 베타페스타, 안동 베타, betafesta, 베타 페스티벌, 베타페스티벌"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://www.betafesta.kr" />
        <meta property="og:image" content="/images/logo-color.png" />
        <meta property="og:description" content="2021 베타페스티벌 - BetaFestival" />
        <title>베타페스티벌 - Beta Festival</title>
      </Head>
      <script src="/smarteditor/js/service/HuskyEZCreator.js" charSet="utf-8"></script>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-BEES4T6SLY"></script>
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
