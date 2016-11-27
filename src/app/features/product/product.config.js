export default (shopConfigServiceProvider) => {
  // Configuration can be fetch from a remote service
  shopConfigServiceProvider.register({
    listProductPaginate: 9
  }, 'product');
}