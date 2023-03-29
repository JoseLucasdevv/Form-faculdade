const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    mainbundle: "./src/index.js",
    validatebundle: "./src/validate.js",
  },
  output: {
    path: path.resolve(__dirname, "public", "js"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
};
