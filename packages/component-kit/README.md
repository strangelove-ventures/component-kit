## Installation

```bash
npm i @strangelovelabs/component-kit @chakra-ui/react @emotion/react @emotion/styled framer-motion @fontsource/dm-sans @fontsource/ibm-plex-mono @fontsource/recursive
```

```bash
yarn add @strangelovelabs/component-kit @chakra-ui/react @emotion/react @emotion/styled framer-motion @fontsource/dm-sans @fontsource/ibm-plex-mono @fontsource/recursive
```

```bash
pnpm add @strangelovelabs/component-kit @chakra-ui/react @emotion/react @emotion/styled framer-motion @fontsource/dm-sans @fontsource/ibm-plex-mono @fontsource/recursive
```

## Example Next.js Configuration

```ts
// _app.tsx

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
```
