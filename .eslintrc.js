module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ["react", "@typescript-eslint", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    es6: true,
    browser: true,
    jasmine: true,
    jest: true,
    node: true
  },
  rules: {
    "object-shorthand": ["error", "always"],
    "prettier/prettier": ["error", {singleQuote: true, trailingComma: "es5", semi: false }],
    "react/prop-types": "off",
    "react-hooks/rules-of-hooks": 'error',
    "react-hooks/exhaustive-deps": 'error',
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_", "ignoreRestSiblings": true }],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
