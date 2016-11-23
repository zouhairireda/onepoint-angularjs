import 'angular-ui-router';
import angular from 'angular';
import routes from './product.route.js';
import ProductListController from './productList.controller.js';
import productRepository from './repository/product.repository.js';
import ProductService from './service/product.service.js';

angular
    .module('shopping.feature.product', ['ui.router'])
    .config(routes)
    .controller('ProductListController', ProductListController)
    .factory('productRepository', productRepository)
    .service('productService', ProductService);
