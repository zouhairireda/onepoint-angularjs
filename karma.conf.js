let webpackConfig = require('./webpack.config.js');

module.exports = (config) => {
  config.set({
    basePath: '',
    colors: true,
    autoWatch: true,
    singleRun: false,
    logLevel: config.LOG_INFO,
    frameworks: ['jasmine'],
    reporters: ['nyan'],
    browsers: ['Chrome'],
    files: [
      'app/main.test.js'
    ],
    // Define entry points for tests
    preprocessors: {
      'app/main.test.js': ['webpack', 'sourcemap']
    },
    // karma-webpack plugin config
    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: webpackConfig.module.loaders
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
      // Uncomment below to make webpack more verbose
      // stats: {
      //   colors: true
      // }
    }
  });
};