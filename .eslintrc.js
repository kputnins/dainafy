const eslintConfig = require('@liene-putnina/eslint-config-lintmyride');

module.exports = {
  ...eslintConfig,
  parserOptions: {
    ...eslintConfig.parserOptions,
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
  },
  rules: {
    ...eslintConfig.rules,
    '@typescript-eslint/lines-between-class-members': 0,
  },
};
