import angular from 'angular';
import '@uirouter/angularjs';
import {configureRouterDecorator} from './router.decorator';

angular.module('shopping.services.router', ['ui.router'])
  .config(configureRouterDecorator);