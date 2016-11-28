import angular from 'angular';
import shopFormFieldDirective from './formField.directive';
import passwordComplexityDirective from './passwordComplexity.direcive';

angular
  .module('shopping.directives.form', [])
  .directive('shopPasswordComplexity', passwordComplexityDirective)
  .directive('shopFormField', shopFormFieldDirective);