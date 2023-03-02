module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],

  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  }
}
