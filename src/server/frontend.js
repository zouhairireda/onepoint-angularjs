const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack.config');

webpackConfig.entry.unshift("webpack-dev-server/client?http://localhost:8080/");

module.exports = (PORT) => {
  const server = new WebpackDevServer(webpack(webpackConfig), {
    stats: { colors: true },
    proxy: {
      '*' : `http://localhost:${PORT - 1}`
    }
  });
  server.listen(PORT, 'localhost');
}