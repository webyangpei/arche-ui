'use strict';
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    'arche-ui': './packages/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../lib'), // 输出目录
    publicPath: '/lib/', // 输出路径
    library: 'arche-ui', //包名称
    libraryTarget: 'umd',
    umdNamedDefine: true // 会对 UMD 的构建过程中的 AMD 模块进行命名。否则就使用匿名的 define
  },
  resolve: {
    // 默认补全的文件扩展名
    extensions: ['.vue','.js','.json','.css','.scss']
  },
  externals: {
    vue: {
      root: 'vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all'
        }
      }
    }
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
  plugins:  [
    new VueLoaderPlugin()
  ]
}