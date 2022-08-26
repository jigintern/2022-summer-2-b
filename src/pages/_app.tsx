import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import * as React from "react";
import { RecoilRoot } from "recoil";
import Header from "src/components/layout/Header";
import "src/styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <Header />
        <Component {...pageProps} />
      </RecoilRoot>
    </ChakraProvider>
  );
}
