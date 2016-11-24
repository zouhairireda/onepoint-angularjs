import angular from 'angular';
import shopFormFieldDirective from './formField.directive';

angular
  .module('shopping.directives.form', [])
  .directive('shopFormField', shopFormFieldDirective);