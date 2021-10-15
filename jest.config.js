module.exports = {
  testMatch: ["<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}"],
  modulePaths: ["<rootDir>/src", "<rootDir>/node_modules"],
  transform: {
    ".(js|jsx)$": require.resolve("babel-jest"),
    ".(ts|tsx)$": require.resolve("ts-jest"),
  },
  testEnvironment: "jest-environment-jsdom",
};
