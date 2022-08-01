const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: '/index.ts',
  },
  plugins: [
    // build 과정에 html을 대입
    new HtmlWebpackPlugin({
      title: 'Production',
      // template 경로를 써주면 된다. 
      template: 'index.html',
      templateParameters : {
      kyusikko : process.env.NODE_ENV === 'development' ? '(개발용)' : ''
    }
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './build'),
    clean: true,
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : "babel-loader"
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
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
      // {
      //   test: /\.(jpg|jpeg|gif|png|svg|ico)?$/,
      //   type: 'asset',
      //   parser: {
      //     dataUrlCondition: {
      //       maxSize: 40 * 1024, // 기준으로 4kb 로 변경
      //     },
      //   },
      // },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};