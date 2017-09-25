const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    './app/main.js'
  ],

  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'app.js'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: 'app/index.tpl.html',
      inject: 'body',
      filename: 'index.html'
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery'
    }),
    new CopyWebpackPlugin([{from: 'assets/img', to: 'img'}], {}),
    new CopyWebpackPlugin([{from: 'node_modules/bootstrap-sass/assets/fonts/bootstrap/', to: 'assets/fonts'}], {})
  ],

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      {test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader']},
      {test: /\.html/, exclude: /node_modules/, loader: 'html-loader'},
      {test: /\.(png|jpe?g|gif|svg|ico)$/, loader: 'file-loader?name=assets/[name].[hash].[ext]'},
      {test: /\.(woff|woff2|ttf|eot)$/, loader: 'file-loader?name=assets/[name].[ext]'}
    ]
  }
};