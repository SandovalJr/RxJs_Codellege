const path = require("path");
const HTMLWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool:'inline-source-map',
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },

  // PLUGIN HTML
  plugins: [
    new HTMLWebPackPlugin({
      template: "./index.html",
    }),
  ],

  devServer: {
    port: 3000,
    stats: "minimal",
  },
};
