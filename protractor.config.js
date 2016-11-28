require('babel-register');

exports.config = {
  specs: ['./e2e/**/*.spec.js'],
  localSeleniumStandaloneOpts: {
    loopback: true
  },
  capabilities: {
    browserName: 'chrome'
  },
  baseUrl: 'http://localhost:8080'
};

