import 'angular-ui-router';
import angular from 'angular';
import routes from './product.route.js';
import ProductListController from './productList.controller.js';

angular
    .module('shopping.feature.product', ['ui.router'])
    .config(routes)
    .controller('ProductListController', ProductListController);

