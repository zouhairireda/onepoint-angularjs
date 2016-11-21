const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const {notFoundExceptionHandler, unhandledExceptionHandler} = require('./middleware/error');

module.exports = (PORT) => {
  const app = express();

  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../dist')));
  require('./api')(app);
  app.use(notFoundExceptionHandler);
  app.use(unhandledExceptionHandler);

  app.listen(PORT);
};