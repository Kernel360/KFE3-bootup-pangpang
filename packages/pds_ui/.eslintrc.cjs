module.exports = {
  extends: ['../../.eslintrc.cjs'],
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/jsx-pascal-case': ['error'],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variableLike',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'func-style': ['error', 'expression'],

    'no-console': 'error',
  },
};
