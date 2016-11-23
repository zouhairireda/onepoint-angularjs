import 'jquery';
import 'bootstrap-loader';
import './styles/app.scss';
import angular from 'angular';
import './layout/layout.module.js';
import './features/product/product.module.js';
import './features/account/account.module';

angular
    .module('shopping', [
        'shopping.layout',
        'shopping.feature.product',
        'shopping.feature.account'
    ]);

// Authorise WebPack Hot module replacement
if (module.hot) {
  module.hot.accept();
}