import 'angular-ui-router';
import 'angular-resource';
import '../../common/directives/form.module';
import angular from 'angular';
import routes from './account.route.js';
import LoginController from './auth/login.controller';
import LogoutController from './auth/logout.controller';
import SecurityService from './services/security.service';
import userRepository from './repository/user.repository';

angular
    .module('shopping.feature.account', [
      'ui.router',
      'ngResource',
      'shopping.directives.form'
    ])
    .config(routes)
    .service('securityService', SecurityService)
    .factory('userRepository', userRepository)
    .controller('LoginController', LoginController)
    .controller('LogoutController', LogoutController);



