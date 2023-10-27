/** @type {import('prettier').Config} */
module.exports = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^@/lib/(.*)$",
    "^@/hooks/(.*)$",
    "^@/ui/(.*)$",
    "^@/components/(.*)$",
    "",
    "^[./]",
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
}