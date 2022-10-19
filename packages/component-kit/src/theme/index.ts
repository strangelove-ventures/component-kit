import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts, fontSizes } from "./typography";

const theme: ThemeConfig = extendTheme({ colors, fonts, fontSizes });

export default theme;
