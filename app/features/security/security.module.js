import angular from 'angular';
import 'angular-resource';
import 'ngStorage';
import SecurityService from './security.service';
import userRepository from './user.repository';

angular.module('shopping.services.security', [
    'ngResource',
    'ngStorage'
  ])
  .service('securityService', SecurityService)
  .factory('userRepository', userRepository);