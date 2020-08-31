module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'prettier/react',
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    jest: true,
  },
  globals: {
    describe: 'readonly',
    it: 'readonly',
  },
  rules: {
    'prettier/prettier': 'warn',
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'spaced-comment': [2, 'always'],
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/no-array-index-key': 0,
    'no-underscore-dangle': ['error', { allow: ['__typename'] }],
  },
};
