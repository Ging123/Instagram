import NextNProgress from "nextjs-progressbar";
import type { AppProps } from "next/app";

import "../styles/global.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#f1bc0c"/>
      <Component { ...pageProps } />;
    </>
  );
}