const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/js/core.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.pug$/, loader: 'pug-loader' },
      { test: /\.vue$/, loader: 'vue-loader' },
      { test: /\.(sass|scss)$/, loaders: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg|gif|svg)$/, loader: 'file-loader', options: { name: '[name].[ext]?[hash]' }},
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=.]+)?$/, loader: 'url-loader?limit=100000&name=fonts/[name].[ext]' }
    ]
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.js'],
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        sassLoader: {
          indentedSyntax: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      hash: false,
      template: './src/index.html'
    }),
    new webpack.ProvidePlugin({
      Vue: 'vue',
      VueRouter: 'vue-router',
      _: 'lodash'
    })
  ]
}
