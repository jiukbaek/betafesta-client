/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import "../styles/globals.scss";
import Head from "next/head";
import { NextSeo } from "next-seo";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextSeo
        title="Beta Festival"
        description="2021 안동 베타페스티벌 Beta Festival"
        canonical="http://www.betafesta.kr"
        openGraph={{
          url: "http://www.betafesta.kr",
          title: "2021 안동 베타페스티벌",
          description: "2021 베타페스티벌 - BetaFestival",
          images: [
            {
              url: "http://www.betafesta.kr/images/logo-color.png",
            },
          ],
          site_name: "Betafesta",
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="naver-site-verification"
          content="36c55a0227834dcf718e020a8928b61ee58960ea"
        />
        <meta
          name="naver-site-verification"
          content="80435a81b4d0a5f02a1faeff7718e8c5b3427fd3"
        />
        <meta
          name="google-site-verification"
          content="Nzwjb1CSAmavnJXiv_TABQt5gMGRXadb0ySbPtdz-Us"
        />
        <title>베타페스티벌 - Beta Festival</title>
      </Head>
      <script
        src="/smarteditor/js/service/HuskyEZCreator.js"
        charSet="utf-8"
      ></script>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-BEES4T6SLY`}
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
      <script
        type="text/javascript"
        src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.mapId}`}
      ></script>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
