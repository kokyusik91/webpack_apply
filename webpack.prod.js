const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  module : {
    rules : [
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
        exclude: /node_modules/,
      },
    ]
  },
  plugins : [
    new MiniCssExtractPlugin({ filename: 'main.style.css' }),
    new CleanWebpackPlugin(),
  ]
});