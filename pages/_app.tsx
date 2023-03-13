import { AppProps } from "next/app";

import Head from "next/head";
import "../styles/globals.scss";
// import NextApp, { AppContext } from "next/app";
import { Layout } from "../components/Layout/dashboard/Layout";
import { ColorScheme } from "@mantine/core";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;


  return (
    <>
      <Head>
        <title></title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Layout data={props.pageProps.allComponents}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
// App.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await NextApp.getInitialProps(appContext);
//   return {
//     ...appProps,
//     colorScheme: getCookie("mantine-color-scheme", appContext.ctx) || "dark",
//   };
// };
