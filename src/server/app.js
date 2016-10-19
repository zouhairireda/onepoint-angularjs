const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../app')));


app.use('/api', routes);

require('./config/webpack')(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers
app.use(errorHandler);

// Launch server
let port = process.env.PORT || 3000;
app.listen(port);
console.log('Server start on port ' + port);

/**
 * Global error handler
 */
function errorHandler(err, req, res, next) {
  res.status(err.status || 500);
  console.log(err);
  res.json({ message: err.message, error: err });
}
