/** @type {import('next').NextConfig} */

module.exports = {
    tabWidth: 2,
    singleQuote: true,
    jsxSingleQuote: true,
    arrowParens: "always",
    printWidth: 100,
    trailingComma: "none",
    semi: true,
    useTabs: false,
    plugins: [require('prettier-plugin-tailwindcss')]
}
