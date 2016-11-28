const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    // devtool: 'eval-source-map',
    // devtool: 'inline-sourcemap',
    // devtool: 'cheap-module-source-map',
    entry:[
        // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true',
        './app/main.js'
    ],

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'app.js'
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // new HtmlWebpackPlugin({
        //     template: 'app/index.tpl.html',
        //     inject: 'body',
        //     filename: 'index.html'
        // }),
        new webpack.ProvidePlugin({
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery'
        }),
        new CopyWebpackPlugin([{ from: 'assets/img', to: 'img' }], {})
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify('development')
        // })
    ],

    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader', query: { presets: ['es2015'] } },
            { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
            { test: /\.(woff2?|ttf|eot|svg)$/, loader: 'url?limit=10000' },
            { test: /bootstrap\/dist\/js\/umd\//, loader: 'imports?jQuery=jquery' },
            { test: /\.html/, exclude: /node_modules/, loader: 'html-loader' },
            { test: /\.(png|jpg|jpeg|gif)$/, loader: 'file-loader?name=assets/img/img-[hash:6].[ext]' }
            //   {test: /\.s?css$/, loader: 'style!css!sass?includePaths[]=' + bourbon },
        ]
    }
};