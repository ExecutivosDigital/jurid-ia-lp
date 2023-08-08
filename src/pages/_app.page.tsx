import { useEffect } from "react";
import "../styles/bootstrap.scss";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import Theme from "@/styles/themes";
import React from "react";
import {Helmet} from "react-helmet";
import Head from "next/head";


function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    //@ts-ignore
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <> 
       <Head>
        <meta charSet="utf-8" />
        <title>Lista de Espera da Jurid-IA</title>
        <link rel="canonical" href="https://listadeespera.juridia.com.br" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-F22DKXHTTP"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F22DKXHTTP');
          `}}>           
        </script>
      </Head>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
