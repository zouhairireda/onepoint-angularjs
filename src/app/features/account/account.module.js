import angular from 'angular';
import 'angular-ui-router';
import '../../common/services/security/security.module';
import '../../common/directives/form.module';
import routes from './account.route.js';
import LoginController from './auth/login.controller';
import LogoutController from './auth/logout.controller';
import AccountController from './home/account.controller';

angular
    .module('shopping.feature.account', [
      'ui.router',
      'ngResource',
      'ngStorage',
      'shopping.directives.form',
      'shopping.services.security'
    ])
    .config(routes)
    .controller('LoginController', LoginController)
    .controller('AccountController', AccountController)
    .controller('LogoutController', LogoutController);



