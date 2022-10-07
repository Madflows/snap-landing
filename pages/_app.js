import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Snap - Make Remote Work</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
