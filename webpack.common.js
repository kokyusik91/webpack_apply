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
            loader: 'file-loader',
            options: {
              outputPath: '/assets/images', 
              name: '[name].[ext]?[hash]',
              // fallback: 'file-loader',
              // publicPath : './build',
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|svg|woff(2)?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        type: 'asset/resource',
        dependency: { not: ['url'] },
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
};