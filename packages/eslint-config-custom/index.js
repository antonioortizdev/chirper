module.exports = {
  extends: ["next", "turbo", "prettier"],
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "semi": ["error", "never"],
    "sort-imports": [
        "error",
        {
            "ignoreCase": true,
            "ignoreDeclarationSort": true,
            "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
        }
    ],
    "comma-style": ["error", "last"],
  },
}
