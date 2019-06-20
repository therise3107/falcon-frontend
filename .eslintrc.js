module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'array-bracket-spacing': ['error', 'always'],
    'arrow-parens': [2, 'as-needed'],
    'comma-dangle': ['error', 'never'],
    'react/forbid-prop-types': ['off'],
    'react/button-has-type': 0,
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/prop-types': ['off'],
    'react/react-in-jsx-scope': 0,
    'react/no-unused-prop-types': ['off'],
    'jsx-a11y/label-has-for': 0,
    'no-func-assign': ['off'],
    'max-len': [
      'error',
      {
        code: 150, // Using 15'' > screen otherwise  120
        ignoreComments: true,
        ignoreStrings: true,
        ignoreRegExpLiterals: true,
        ignoreTemplateLiterals: true
      }
    ],
    'object-curly-newline': 'off',
    semi: 0
  }
}
