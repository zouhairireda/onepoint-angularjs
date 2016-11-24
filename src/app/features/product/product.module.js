import 'angular-ui-router';
import angular from 'angular';
import routes from './product.route.js';
import ProductListController from './list/productList.controller.js';
import productRepository from './repository/product.repository.js';
import ProductService from './service/product.service.js';
import ProductDirective from './directive/product.directive.js';

angular
    .module('shopping.feature.product', ['ui.router'])
    .config(routes)
    .controller('ProductListController', ProductListController)
    .factory('productRepository', productRepository)
    .service('productService', ProductService)
    .directive('product', () => new ProductDirective);
