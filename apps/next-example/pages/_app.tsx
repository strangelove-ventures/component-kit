import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@strangelovelabs/component-kit";
import "@fontsource/dm-sans";
import "@fontsource/recursive";
import "@fontsource/ibm-plex-mono";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
