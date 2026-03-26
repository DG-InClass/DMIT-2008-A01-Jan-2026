// ~/jest.config.js

// The following way of "importing" a module is
// the "old" way of using Common JS.
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    // Provide the path to our Next.js app
    // to load next.config.js and .env files
    // for our test
    dir: './'
});

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

    // if using TypeScript with a baseUrl set to the root
    // directory then we need the following for the alias'
    // to work.
    moduleDirectories: ['node_modules', '<rootDir>/'],
    testEnvironment: 'jest-environment-jsdom',
}

// createJestConfig is exported this way to ensure that next/jest
// can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
