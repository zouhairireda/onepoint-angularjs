module.exports = {
  notFoundExceptionHandler: (req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
  },
  unhandledExceptionHandler: (err, req, res, next) => {
    res.status(err.status || 500);
    console.log(err);
    res.json({message: err.message, error: err});
  }
};