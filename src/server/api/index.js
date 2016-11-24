module.exports = apiRouter;

function apiRouter(app) {
  app.use('/api/product', require('./product'));
  app.use('/api/user', require('./user'));
}