const path = require("path");

const HTMLWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "./js/[name].js",
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./styles/[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  devServer: {
    port: 3000,
  },
  resolve: {
    extensions: [".js"],
  },
  optimization: {
    usedExports: true,
    splitChunks: {
      chunks: "all",
    },
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
};
