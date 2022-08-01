const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, 'build'), //
    },
    hot:true,
    port: 3000,
    // overlay : true,
    // watchContentBase: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", 'sass-loader'],
        exclude: /node_modules/,
      },
      
    ]
  },
});