const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: '.' });
const customConfig = {
  displayName: 'drink-buddy-app',
  injectGlobals: true,
  rootDir: './',
  collectCoverageFrom: ['./**/*', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/components/$1',
    '^@store/(.*)$': '<rootDir>/store/$1',
    '^@utils/(.*)$': '<rootDir>/utils/$1',
    '^@typings/(.*)$': '<rootDir>/types/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@constants/(.*)$': '<rootDir>/constants/$1',
    '^@service/(.*)$': '<rootDir>/service/$1',
    '^@hooks/(.*)$': '<rootDir>/hooks/$1',
    '^@auth/(.*)$': '<rootDir>/auth/$1',
  },
  testEnvironment: 'jsdom',
  globals: {
    isolatedModules: true,
  },
};

module.exports = createJestConfig(customConfig);
export {};
