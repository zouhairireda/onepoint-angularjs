import 'angular-ui-router';
import 'angular-resource';
import angular from 'angular';

import routes from './product.route';
import ProductListController from './list/productList.controller';
import productRepository from './repository/product.repository';
import ProductService from './service/product.service';

angular
  .module('shopping.feature.product', [
    'ui.router',
    'ngResource'
  ])
  .config(routes)
  .controller('ProductListController', ProductListController)
  .factory('productRepository', productRepository)
  .service('productService', ProductService);
