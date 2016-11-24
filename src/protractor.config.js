require('babel-register');

exports.config = {
  specs: ['./e2e/product/productList.spec.js'],
  localSeleniumStandaloneOpts: {
    loopback: true
  },

  capabilities: {
    browserName: 'chrome',
    //'phantomjs.binary.path': require('phantomjs-prebuilt').path,
    //'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
  },
  baseUrl: 'http://localhost:8080',
  // TODO Why
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};