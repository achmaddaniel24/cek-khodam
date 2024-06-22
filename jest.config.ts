import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

// Add any custom config to be passed to Jest
const config: Config = {
  modulePaths: ["<rootDir>/src"],
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/*.d.ts",
    "!**/*.type.ts",
    "!**/coverage/**",
    "!**/node_modules/**",
    "!<rootDir>/.next/**",
    "!<rootDir>/*.config.{js,ts,mjs}",
  ],
  clearMocks: true,
  collectCoverage: true,

  coverageDirectory: "coverage",

  coverageProvider: "v8",

  testEnvironment: "jest-environment-jsdom",
  verbose: true,
};

export default createJestConfig(config);
