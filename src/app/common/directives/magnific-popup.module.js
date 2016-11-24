import 'jquery';
import 'magnific-popup';
import angular from 'angular';
import magnificPopup from './magnific-popup.directive';

angular.module('shopping.common.magnificPopup', [])
  .directive('magnificPopup', magnificPopup);