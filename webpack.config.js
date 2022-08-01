const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: '/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : "babel-loader"
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 2000, //2kb 미만 파일만 data url로 처리
              outputPath: './assets/images', 
              name: '[name].[ext]?[hash]',
              // fallback: 'file-loader',
              // publicPath : './build',
            },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // index.html 템플릿을 기반으로 빌드 결과물을 추가해줌
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({ filename: 'main.style.css' }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'buildkyusik'), //
    },
    hot:true,
    port: 3000,
    // overlay : true,
    // watchContentBase: true,
  },
};