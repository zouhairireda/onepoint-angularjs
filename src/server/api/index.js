module.exports = apiRouter;

function apiRouter(app) {
  app.use('/api/product', require('./product'));
}