"use strict";

const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'production';

const PROJECT_PATH = process.cwd();

module.exports = {
  entry: path.resolve(PROJECT_PATH, "src", "index.js"),
  output: {
    path: path.resolve(PROJECT_PATH, "dist"),
    filename: devMode ? 'js/[name].js' : 'js/[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        use: {
          loader: 'babel-loader'
        },
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", // translates CSS into CommonJS
          },
          {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              indentSyntax: true,
              includePaths: [
                "normalize-scss/sass"
              ]
            },
          }
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff|ttf|svg|woff2)$/,
        loader: "file-loader?name=[name].[ext]",
        query: {
            name: 'assets/[name].[ext]',
            publicPath: '/'
        }
      },
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({}),
    new MiniCssExtractPlugin({
      filename: devMode ? 'css/[name].css' : 'css/[name].min.css',
      // chunkFilename: devMode ? 'css/[id].css' : 'css/[id].[hash].css',
    }),
  ],
  resolve: {
    extensions: [".js", ".sass"],
    modules: [
      path.resolve(PROJECT_PATH, "src"),
      "node_modules",
    ],
  },
};
