module.exports = {
  root: true,
  parser: "@typescript-eslint/parser", // the TypeScript parser we installed earlier
  parserOptions: {
    ecmaFeatures: { jsx: true }, // Allows for the parsing of JSX
  },
  extends: [
    "eslint:recommended", // eslint default rules
    "plugin:@typescript-eslint/eslint-recommended", // eslint TypeScript rules (github.com/typescript-eslint/typescript-eslint)
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended", // eslint react rules (github.com/yannickcr/eslint-plugin-react)
    "plugin:jsx-a11y/recommended", // accessibility plugin
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
      },
    },
  ],
  env: {
    browser: true,
    amd: true,
    node: true,
  },
};
