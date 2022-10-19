import { theme } from "@chakra-ui/react";

export interface Fonts {
  body: string;
  heading: string;
  mono: string;
  [key: string]: string;
}

export const fonts: Fonts = {
  body: `'DM Sans', ${theme.fonts.body}`,
  heading: `'Recursive', ${theme.fonts.heading}`,
  mono: `'IBM Plex Mono', ${theme.fonts.mono}`,
};

export const fontSizes: Record<string, string> = {
  xs: "0.75rem", // 12px
  sm: "0.875rem", // 14px
  md: "1rem", // 16px
  lg: "1.125rem", // 18px
  xl: "1.25rem", // 20px
  "2xl": "1.5rem", // 24px
  "3xl": "2rem", // 32px
  "4xl": "2.5rem", // 40px
  "5xl": "3rem", // 48px
  "6xl": "3.75rem", // 60px
  "7xl": "4.5rem", // 72p
  "8xl": "6rem", // 96px
  "9xl": "8rem", // 128px
};
