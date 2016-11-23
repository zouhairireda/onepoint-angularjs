import angular from 'angular';
import ShopFormFieldDirective from './formField.directive';

angular
  .module('shopping.directives.form', [])
  .directive('shopFormField', () => new ShopFormFieldDirective);