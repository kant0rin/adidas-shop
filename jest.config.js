const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');
const nextJest = require('next/jest');

const createJestConfig = nextJest({
    dir: '.'
});

/** @type {import('ts-jest').JestConfigWithTsJest} */
const customJestConfig = {
    rootDir: './',
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    testMatch: ['**/?(*.)test.ts?(x)'],
    testEnvironment: 'jsdom',
    moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' })
};

module.exports = createJestConfig(customJestConfig);
