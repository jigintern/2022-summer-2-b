import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Header from "src/components/layout/Header";
import "src/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
}
