module.exports = {
  extends: [
    'plugin:prettier/recommended',
    'plugin:react-hooks/recommended',
    'prettier/react',
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
    'import/prefer-default-export': 0,
    'react/prop-types': 0,
    'spaced-comment': [2, 'always'],
    'no-underscore-dangle': 'off',
  },
};
