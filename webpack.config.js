const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/app.ts", // full path with name of file which is entry
  output: {
    filename: "bundle.js", // filename of output
    path: path.resolve(__dirname, "dist"), // path to output file
    publicPath: "/dist",
  },
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
