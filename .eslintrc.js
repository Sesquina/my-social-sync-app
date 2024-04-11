module.exports = {
  extends: "airbnb",
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "react-hooks"],
  rules: {
    // Relaxing rules to facilitate development without compromising on key aspects of code quality.

    // Console statements are allowed for debugging; to be reviewed before production deployment.
    "no-console": ["warn", { allow: ["warn", "error"] }],

    // Increasing the maximum line length for better readability with modern monitors.
    "max-len": [
      "error",
      120,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],

    // Allowing JSX syntax in both .js and .jsx files for flexibility.
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],

    // Enforce hook rules to ensure proper usage of React hooks.
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Allowing ++ and -- operators in specific scenarios for clearer intent in loops.
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],

    // Disabling explicit return in arrow functions for concise code when possible.
    "arrow-body-style": ["error", "as-needed"],

    // Prefer default export in React components for consistency and readability.
    "import/prefer-default-export": "off",

    // Allowing function use before definition to enable more flexible code organization.
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],

    // Not enforcing prop types validation if using TypeScript for type checking.
    "react/prop-types": "off",

    // Not requiring default props declarations, relying on TypeScript for default values.
    "react/require-default-props": "off",

    // Allow using state initialization in class components outside of the constructor.
    "react/state-in-constructor": ["off", "never"],

    // Allow props spreading for certain JSX elements when necessary for HOC or library components.
    "react/jsx-props-no-spreading": [
      "warn",
      {
        html: "enforce",
        custom: "ignore",
        explicitSpread: "ignore",
      },
    ],
  },
};

/*Decision Rationale:
Console Usage: Marked as a warning with allowances for warn and error methods. It's important for us to keep an eye on console usage to ensure no debug information leaks into production.
Max Line Length: Extended to 120 characters to accommodate modern coding practices, while also ignoring certain patterns to avoid unnecessary breaks in strings or URLs.
JSX in JS Files: Allows greater flexibility in file types, reducing the need for renaming files just to include JSX syntax.
Hooks Rules: Enforcing rules for hooks to avoid common pitfalls and ensure component stability.
Arrow Functions and Exports: Adjusted for a balance between concise code and clarity.
Usage Before Definition: Functions are hoisted, so this rule has been relaxed for functions to allow a more intuitive organization in files.
Prop Types and Default Props: Since we might be leveraging TypeScript, explicit prop types validation via PropTypes and default prop declarations are turned off to rely on TypeScript's capabilities instead.

 */
