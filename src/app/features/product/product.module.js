import 'angular-ui-router';
import angular from 'angular';
import routes from './product.route.js';
import '../../common/directives/magnific-popup.module';
import ProductListController from './list/productList.controller.js';
import productRepository from './repository/product.repository.js';
import ProductService from './service/product.service.js';
import productDirective from './directive/product.directive.js';

angular
    .module('shopping.feature.product', ['ui.router', 'shopping.common.magnificPopup'])
    .config(routes)
    .controller('ProductListController', ProductListController)
    .factory('productRepository', productRepository)
    .service('productService', ProductService)
    .directive('product', productDirective);
