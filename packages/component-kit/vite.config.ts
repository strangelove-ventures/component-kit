import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
const config = defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "component-kit",
      formats: ["es", "umd"],
      fileName: (format) => `component-kit.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "@chakra-ui/react", "@emotion/react", "@emotion/styled", "framer-motion"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "@chakra-ui/react": "ChakraUI",
          "@emotion/react": "EmotionReact",
          "@emotion/styled": "EmotionStyled",
          "framer-motion": "FramerMotion",
        },
        // exports: "named",
      },
    },
  },
});

export default config;
