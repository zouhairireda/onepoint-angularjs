import angular from 'angular';
import 'angular-resource';
import {configureLogDecorator} from './log.decorator';

angular.module('shopping.services.log', [])
  .config(configureLogDecorator);