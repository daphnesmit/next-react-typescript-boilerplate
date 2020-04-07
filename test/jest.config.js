const path = require('path')

module.exports = {
  rootDir: path.join(__dirname, '..'),
  roots: ['<rootDir>/src/', '<rootDir>/server/'],
  collectCoverageFrom: ['(src|server)/**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/test/config/setupEnv.js'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/test/config/cssTransform.js',
  },
  transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@public/(.*)$': '<rootDir>/public/$1',
    '@test/(.*)$': '<rootDir>/test/$1',
    '@server/(.*)$': '<rootDir>/server/$1',
    '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',
  },
}
