'use strict';

import angular from 'angular';
import 'angular-ui-router';
import routes from './layout.route.js';
import HeaderController from './partials/Header.controller.js';
import FooterController from './partials/footer.controller.js';

angular
    .module('shopping.layout', ['ui.router'])
    .config(routes)
    .controller('HeaderController', HeaderController)
    .controller('FooterController', FooterController);

