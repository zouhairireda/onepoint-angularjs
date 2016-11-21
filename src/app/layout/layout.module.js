import angular from 'angular';
import 'angular-ui-router';
import routes from './layout.route.js';
import HeaderDirective from './directives/header.directive.js';
import FooterDirective from './directives/footer.directive.js';

angular
    .module('shopping.layout', ['ui.router'])
    .config(routes)
    .directive('header', () => new HeaderDirective)
    .directive('footer', () => new FooterDirective);