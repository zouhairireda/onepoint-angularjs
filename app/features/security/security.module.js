import angular from 'angular';
import 'angular-resource';
import 'ngStorage';
import SecurityService from './security.service';
import userRepository from './user.repository';
import userIsLoggedDirective from './userIsLogued.directive';

angular.module('shopping.services.security', [
    'ngResource',
    'ngStorage'
  ])
  .service('securityService', SecurityService)
  .factory('userRepository', userRepository)
  .directive('userIsLogged', userIsLoggedDirective)
  .directive('userIsNotLogged', userIsLoggedDirective);