import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
  sizes: {
    "2xl": {
      fontSize: ["4xl", null, "5xl"],
      lineHeight: [1.2, null, 1.1],
    },
    xl: {
      fontSize: ["3xl", null, "4xl"],
      lineHeight: [1.2, null, 1.1],
    },
    lg: {
      fontSize: ["2xl", null, "3xl"],
      lineHeight: [1.33, null, 1.2],
    },
    md: {
      fontSize: "xl",
      lineHeight: 1.2,
    },
    sm: {
      fontSize: "md",
      lineHeight: 1.2,
    },
    xs: {
      fontSize: "sm",
      lineHeight: 1.2,
    },
  },
};
