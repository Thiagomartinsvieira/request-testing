import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import pluginPrettier from "eslint-plugin-prettier";
import pluginUnusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  resolvePluginsRelativeTo: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),

  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    plugins: {
      prettier: pluginPrettier,
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,

      "prettier/prettier": "error",

      // ⚠️ Apenas avisa sobre imports não utilizados
      "unused-imports/no-unused-imports": "warn",

      // ⚠️ Avisa sobre variáveis não utilizadas, mas ignora prefixo "_"
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // ⚠️ Avisa sobre variáveis não usadas no TS, sem quebrar o build
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],

      // 🚫 Desativa erro para uso de 'any'
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];

export default eslintConfig;
