"use strict";

const path = require("path");
const merge = require("webpack-merge");

const common = require("./common");

const PROJECT_PATH = process.cwd();

const development = {
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    hot: true
  },
  mode: "development",
};

module.exports = merge(common, development);
