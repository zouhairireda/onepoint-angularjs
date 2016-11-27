import angular from 'angular';
import 'angular-ui-router';
import {configureRouterDecorator} from './router.decorator';

angular.module('shopping.services.router', ['ui.router'])
  .config(configureRouterDecorator);