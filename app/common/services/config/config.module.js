import angular from 'angular';
import ConfigProvider from './config.provider';

angular.module('shopping.services.config', [])
  .provider('shopConfigService', ConfigProvider);