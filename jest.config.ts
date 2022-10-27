const nextJest = require('next/jest');
const createJestConfig = nextJest({ dir: '.' });
const customConfig = {
  displayName: 'drink-buddy',
  injectGlobals: true,
  rootDir: '.',
  collectCoverageFrom: ['./**/*', '!**/node_modules/**'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['js', 'ts', 'tsx', 'jsx'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@store/(.*)$': '<rootDir>/src/store/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@typings/(.*)$': '<rootDir>/src/types/$1',
    '^@config/(.*)$': '<rootDir>/src/config/$1',
    '^@constants/(.*)$': '<rootDir>/src/constants/$1',
    '^@service/(.*)$': '<rootDir>/src/service/$1',
    '^@hooks/(.*)$': '<rootDir>/src/hooks/$1',
    '^@auth/(.*)$': '<rootDir>/src/auth/$1',
  },
  testEnvironment: 'jsdom',
  globals: {
    isolatedModules: true,
  },
};

module.exports = createJestConfig(customConfig);
export {};
