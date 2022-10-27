module.exports = {
  displayName: 'base-ui-components',
  injectGlobals: true,
  rootDir: './',
  collectCoverageFrom: ['./**/*', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
  testEnvironment: 'jsdom',
};

export {};
