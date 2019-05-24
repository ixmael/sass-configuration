"use strict";

const path = require('path');
const merge = require('webpack-merge');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const common = require("./common");

const PROJECT_PATH = process.cwd();

const production = {
  mode: "production",
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorOptions: { discardComments: { removeAll: true } },
      }),
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(PROJECT_PATH, 'src', 'html.ejs'),
      enviroment: 'production',
    }),
  ],
};

module.exports = merge(common, production);
