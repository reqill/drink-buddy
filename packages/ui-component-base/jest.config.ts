module.exports = {
  displayName: 'ui-component-base',
  injectGlobals: true,
  rootDir: './',
  collectCoverageFrom: ['./**/*', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  testEnvironment: 'jsdom',
};

export {};
