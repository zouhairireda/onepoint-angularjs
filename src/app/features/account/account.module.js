import angular from 'angular';
import 'angular-ui-router';
import '../../common/services/security/security.module';
import '../../common/services/bootstrap/bootstrap.module';
import '../../common/directives/form.module';

import bootstrapTaskRegistration from './account.bootstrap';
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
      'shopping.services.security',
      'shopping.services.bootstrap'
    ])
    .config(bootstrapTaskRegistration)
    .config(routes)
    .controller('LoginController', LoginController)
    .controller('AccountController', AccountController)
    .controller('LogoutController', LogoutController);



