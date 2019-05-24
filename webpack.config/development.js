"use strict";

const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./common");

const PROJECT_PATH = process.cwd();

const development = {
  mode: "development",
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(PROJECT_PATH, 'src', 'html.ejs'),
      enviroment: 'development',
    }),
  ],
};

module.exports = merge(common, development);
