import 'jquery';
import 'bootstrap-loader';
import './styles/app.scss';
import angular from 'angular';
import './layout/layout.module.js';
import './features/product/product.module.js';
import './features/account/account.module';
import './common/services/log/log.module';
import './common/services/router/router.module';
import './common/services/bootstrap/bootstrap.module';

angular
  .module('shopping', [
    'shopping.layout',
    'shopping.feature.product',
    'shopping.feature.account',
    'shopping.services.log',
    'shopping.services.router',
    'shopping.services.bootstrap'
  ])
  .run(($log) => {
    $log.debug('Test log debug decorator', ['param1', {name: 'params2'}]);
  })
  .run((shopBootstrapService) => shopBootstrapService.process());

// Authorise WebPack Hot module replacement
if (module.hot) {
  module.hot.accept();
}