const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenv = require("dotenv");
const fs = require("fs");
const webpack = require("webpack");
/**
 * Load env vars from .env if available
 */
dotenv.config();
module.exports = {
  entry: [
    path.resolve('src', 'js', 'index.js'),
    path.resolve('src', 'js', 'theme.js'),
    path.resolve('src', 'css', 'styles.css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "less-loader",
            options: {
              javascriptEnabled: true
            }
          }
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.jsx', '.scss', '.css', '.js'],
    modules: [
      path.resolve(__dirname, "node_modules"),
    ],
  },
  output: {
    path: path.resolve('static', 'assets'),
    filename: 'bundle.js',
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css?[chunkhash]",
      chunkFilename: "[name].css?[chunkhash]"
    }),
    new webpack.DefinePlugin({
      // Provide enviroment variable defaults
      // from .env
      ALGOLIA_APP_ID: JSON.stringify(process.env.ALGOLIA_APP_ID),
      ALGOLIA_API_KEY: JSON.stringify(process.env.ALGOLIA_API_KEY),
      ALGOLIA_BASE_URL: JSON.stringify(process.env.ALGOLIA_BASE_URL)
    })],
};
