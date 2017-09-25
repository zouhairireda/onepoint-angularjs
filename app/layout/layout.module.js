import angular from 'angular';
import '@uirouter/angularjs';
import '../features/security/security.module';
import routes from './layout.route.js';
import headerDirective from './directives/header.directive.js';
import footerDirective from './directives/footer.directive.js';

angular
    .module('shopping.layout', [
      'ui.router',
      'shopping.services.security'
    ])
    .config(routes)
    .directive('header', headerDirective)
    .directive('footer', footerDirective);