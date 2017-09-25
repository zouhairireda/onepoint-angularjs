import '@uirouter/angularjs';
import 'angular-resource';
import angular from 'angular';

import routes from './product.route';
import ProductListController from './list/productList.controller';
import productRepository from './repository/product.repository';
import ProductService from './service/product.service';
import productDirective from './directive/product.directive';

angular
  .module('shopping.feature.product', [
    'ui.router',
    'ngResource'
  ])
  .config(routes)
  .controller('ProductListController', ProductListController)
  .factory('productRepository', productRepository)
  .service('productService', ProductService)
  .directive('product', productDirective);
