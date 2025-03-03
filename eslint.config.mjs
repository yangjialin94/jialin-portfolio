import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import prettierPlugin from "eslint-plugin-prettier";
import nextPlugin from "@next/eslint-plugin-next";
import tailwindcssPlugin from "eslint-plugin-tailwindcss";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    plugins: {
      prettier: prettierPlugin,
      next: nextPlugin,
      tailwindcss: tailwindcssPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "prettier/prettier": "error",

      // 🔹 Tailwind Class Sorting
      "tailwindcss/classnames-order": "warn",

      // 🔹 Import Sorting
      "simple-import-sort/imports": "warn",
      "simple-import-sort/exports": "warn",
    },
  },
];

export default eslintConfig;
