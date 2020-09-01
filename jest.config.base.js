module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/**/*'],
  coverageReporters: ['json', 'lcov', 'clover'],
  coveragePathIgnorePatterns: ['<rootDir>/(?:.+?)/dist/'],
  testPathIgnorePatterns: ['<rootDir>/(?:.+?)/dist/'],
  testMatch: ['**/?(*.)+(spec).js?(x)'],
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
};
