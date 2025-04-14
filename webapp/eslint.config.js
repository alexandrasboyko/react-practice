// extends:
//   - react-app
//   - ../.eslintrc.yml
// parserOptions:
//   project: ./tsconfig.json
// overrides:
//   - files:
//       - vite.config.ts
//     parserOptions:
//       project: ./tsconfig.node.json

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

