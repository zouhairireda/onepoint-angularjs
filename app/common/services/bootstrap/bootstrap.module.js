import angular from 'angular';
import '@uirouter/angularjs';
import BootstrapProvider from './bootstrap.provider';

angular.module('shopping.services.bootstrap', [])
  .provider('shopBootstrapService', BootstrapProvider);