"use strict"
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../example/index.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'index.js'
  },
  resolve: {
    // 默认补全的文件扩展名
    extensions: ['.vue','.js','.json','.css','.scss']
  },
  module: {
    rules: [
      // 检测以js后缀结尾的文件 加载babel-loader
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: ['vue-loader']
      },
      {
        test: /\.css$/,
        use: [{loader: "vue-style-loader"}, {loader: "style-loader"}, {loader: "css-loader"}]
      },
      {
        test: /\.scss$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(svg|otf|ttf|woff|woff2?|eot|gif|png|jpe?g)(\?\S*)?$/,
        use: [{loader: "url-loader"}, {loader: "file-loader"}],
        // query: {
        //   limit: 10000,
        //   name: path.posix.join('static', '[name].[hash:7].[ext]')
        // }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: "index.html"
    }),
    new VueLoaderPlugin()
  ]
}