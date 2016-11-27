import angular from 'angular';
import shopFormFieldDirective from './formField.directive';
import passwordComplexityDirective from './passwordComplexity.direcive';
import passwordMathDirective from './passwordMatch.direcive';

angular
  .module('shopping.directives.form', [])
  .directive('shopPasswordMatch', passwordMathDirective)
  .directive('shopPasswordComplexity', passwordComplexityDirective)
  .directive('shopFormField', shopFormFieldDirective);