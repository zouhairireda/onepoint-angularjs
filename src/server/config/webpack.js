'use strict';

const path = require('path');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const compiler = webpack(config);

module.exports = configureWebpack;

function configureWebpack(app) {
    
    const middleware = webpackMiddleware(compiler, {
        filename: config.output.filename,
        publicPath: config.output.publicPath,
        contentBase: '../../src',
        stats: {
            colors: true,
            hash: false,
            timings: true,
            chunks: false,
            chunkModules: false,
            modules: false
        }
    });

    app.use(middleware);
    app.use(webpackHotMiddleware(compiler, {
        log: console.log
    }));

    app.get('*', function response(req, res) {
        res.write(middleware.fileSystem.readFileSync(path.join(__dirname, '../../dist/index.html')));
        res.end();
    });
}