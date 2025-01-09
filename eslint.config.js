import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tsEslint from "typescript-eslint";
import reactEslint from "eslint-plugin-react";
import unicornEsLint from "eslint-plugin-unicorn";
import perfectionist from "eslint-plugin-perfectionist";
import eslintConfigPrettier from "eslint-config-prettier";

export default tsEslint.config({
  extends: [
    js.configs.recommended,
    ...tsEslint.configs.recommended,
    reactEslint.configs.flat.recommended,
    reactEslint.configs.flat["jsx-runtime"],
    unicornEsLint.configs["flat/recommended"],
    perfectionist.configs["recommended-alphabetical"],
    eslintConfigPrettier,
  ],
  files: ["**/*.{ts,tsx}"],
  ignores: ["dist", "**/*.gen.*"],
  settings: { react: { version: "detect" } },
  languageOptions: { globals: globals.browser },
  plugins: {
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,

    // Enforces that arrow functions simplify return statements to () => value where possible instead of () => { return value }
    "arrow-body-style": "error",
    // Adds line break between variables and return statements
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
    ],

    // Enforces function declaration for component definitions
    "react/function-component-definition": [
      "error",
      { namedComponents: "function-declaration" },
    ],
    // Removes unnecessary curly brackets on props
    "react/jsx-curly-brace-presence": [
      "error",
      { children: "never", props: "never" },
    ],

    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],

    // Does not enforce filename case for various components
    "unicorn/filename-case": "off",
    // Allows null usage
    "unicorn/no-null": "off",
    // Removes top level await preference rule
    "unicorn/prefer-top-level-await": "off",
    // Allows abbreviations
    "unicorn/prevent-abbreviations": "off",
    // Allows negated conditionals
    "unicorn/no-negated-condition": "off",
    // Allow extra boolean cast
    "no-extra-boolean-cast": "off",

    "perfectionist/sort-imports": ["error", { internalPattern: ["@/**"] }],

    "eol-last": ["error", "always"],
  },
});