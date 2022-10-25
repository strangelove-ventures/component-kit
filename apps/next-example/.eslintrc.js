// @ts-check

const { getTsconfigPath } = require("@strangelovelabs/style-guide/eslint/helpers");

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    require.resolve("@strangelovelabs/style-guide/eslint/typescript"),
    require.resolve("@strangelovelabs/style-guide/eslint/react"),
    require.resolve("@strangelovelabs/style-guide/eslint/next"),
  ],
  parserOptions: {
    project: getTsconfigPath(),
  },
  root: true,
  overrides: [
    {
      files: ["**/*.[jt]s?(x)"],
      rules: {
        "import/prefer-default-export": "off",
      },
    },
  ],
};

module.exports = eslintConfig;