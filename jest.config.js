module.exports = {
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '.*\\.vue$': 'vue-jest',
    '.*\\.js$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: ['<rootDir>/test/unit/specs/**/*.spec.js'],
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!src/main.js',
  ],
};
