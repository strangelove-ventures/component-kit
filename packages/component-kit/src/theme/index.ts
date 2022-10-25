import { config } from "./config";
import { extendTheme } from "@chakra-ui/react";
import { colors } from "./colors";
import { fonts, fontSizes } from "./typography";
import { components } from "./components";

const theme = extendTheme({ colors, fonts, fontSizes, components, config });

export default theme;
