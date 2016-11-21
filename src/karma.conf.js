let webpackConfig = require('./webpack.config.js');
webpackConfig.entry = [];

module.exports = (config) => {
  config.set({
    basePath: '',
    colors: true,
    autoWatch: false,
    singleRun: true,
    logLevel: config.LOG_INFO,
    frameworks: ['jasmine'],
    reporters: ['progress'],
    browsers: ['PhantomJS'],
    files: [
      'app/**/*.spec.js'
    ],
    preprocessors: {
      'app/**/*.spec.js': ['webpack']
    },
    webpack: {
      cache: true,
      module: {
        loaders: webpackConfig.module.loaders
      }
    },
    webpackMiddleware: {
      stats: 'errors-only'
      // stats: {
      //   colors: true
      // }
    },

    // coverageReporter: {
    //   dir: 'coverage/',
    //   subdir: '.',
    //   reporters: [
    //     {type: 'cobertura', file: 'cobertura.xml'},
    //     {type: 'text', file: 'text.txt'},
    //     {type: 'text-summary', file: 'text-summary.txt'},
    //     {type: 'html'}
    //   ]
    // },
  });
};