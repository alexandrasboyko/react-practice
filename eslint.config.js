// extends:
//  - standard-with-typescript
//  - prettier
// ignorePatterns:
//  - node_modules
//  - dist
// rules:
//  import/order:
//    - error
//    - alphabetize:
//     order: asc
//     caseInsensitive: false
//     orderImportKind: asc
//  '@typescript-eslint/consistent-type-definitions':
//   - error
//   - type
//  '@typescript-eslint/strict-boolean-expressions': off
//  '@typescript-eslint/prefer-nullish-coalescing': off
//  '@typescript-eslint/explicit-function-return-type': off
//  '@typescript-eslint/restrict-template-expressions': off
//  '@typescript-eslint/triple-slash-reference': off
//  '@typescript-eslint/ban-types': off
//  '@typescript-eslint/consistent-type-assertions': off
//  jsx-a11y/anchor-is-valid: off
//  curly:
//    - error
//    - all
//  no-irregular-whitespace:
//    - error
//    - skipTemplates: true
//      skipStrings: true
//  no-console:
//   - error
//   - allow:
//       - info
//       - error
//       - warn


module.exports = {
  extends: [
    'react-app',          // Розширення для React проекту
    '../.eslintrc.yml',    // Посилання на інший конфігураційний файл
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',  // Вказуємо проект для основного коду TypeScript
  },
  overrides: [
    {
      files: ['vite.config.ts'],  // Персоналізовані налаштування для цього файлу
      parserOptions: {
        project: './tsconfig.node.json',  // Вказуємо інший файл tsconfig для цього файлу
      },
    },
  ],
};

