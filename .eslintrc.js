module.exports = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    browser: true,
    jest: true,
    jquery: true,
    node: true,
  },
  plugins: ['html', '@typescript-eslint', 'react-hooks', 'jest', 'prettier'],
  rules: {
    'consistent-return': 'off',
    'import/prefer-default-export': 'off',
    'newline-before-return': 'error',
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-shadow': [
      'error',
      {
        hoist: 'all',
        allow: ['resolve', 'reject', 'done', 'next', 'err', 'error'],
      },
    ],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
  },
  settings: {
    'import/resolver': {
      'eslint-import-resolver-typescript': true,
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        '@typescript-eslint/prefer-interface': 'off',
      },
    },
    {
      files: ['**/__tests__/**'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
  ],
  globals: {
    $Keys: true,
    SyntheticEvent: true,
    SyntheticAnimationEvent: true,
    SyntheticClipboardEvent: true,
    SyntheticCompositionEvent: true,
    SyntheticInputEvent: true,
    SyntheticUIEvent: true,
    SyntheticFocusEvent: true,
    SyntheticKeyboardEvent: true,
    SyntheticMouseEvent: true,
    SyntheticDragEvent: true,
    SyntheticWheelEvent: true,
    SyntheticTouchEvent: true,
    SyntheticTransitionEvent: true,
    ElementEventTemplate: true,
    TranslationFn: true,
    IntervalID: true,
    TimeoutID: true,
  },
};
