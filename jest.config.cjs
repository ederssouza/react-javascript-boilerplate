module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', '/public/'],
  collectCoverageFrom: ['src/**/*.js(x)?', '!src/**/index.js', '!src/main.jsx'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  }
}
