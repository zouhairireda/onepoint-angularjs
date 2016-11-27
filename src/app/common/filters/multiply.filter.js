import angular from 'angular';

angular.module('shop.filters.multiply', [])
  .filter('multiply', () => ((value, factor = 2) => parseFloat(value) * parseFloat(factor)));