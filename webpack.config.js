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
    path.resolve('src', 'js', 'index.js')
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.scss$/,
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
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin({
      // Provide enviroment variable defaults
      // from .env
      ALGOLIA_API_KEY: JSON.stringify(process.env.ALGOLIA_API_KEY),
      ALGOLIA_BASE_URL: JSON.stringify(process.env.ALGOLIA_BASE_URL),
      ALGOLIA_INDEX_NAME: JSON.stringify('netlify_22f90b68-b04d-411c-a401-a4e19170c6ae_master_all')
    })],
};
