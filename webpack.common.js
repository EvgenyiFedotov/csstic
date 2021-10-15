const path = require("path");

module.exports = {
  mode: "production",
  target: "node",
  entry: {
    core: "./src/core/index.ts",
    native: "./src/native/index.ts",
    react: "./src/react/index.ts",
  },
  module: {
    rules: [{ test: /\.tsx?$/, use: "ts-loader" }],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: {
    stylis: "stylis",
    "object-hash": "object-hash",
  },
};
