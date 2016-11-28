import angular from 'angular';
import 'angular-ui-router';
import BootstrapProvider from './bootstrap.provider';

angular.module('shopping.services.bootstrap', [])
  .provider('shopBootstrapService', BootstrapProvider);