'use strict';

import 'jquery';
import 'bootstrap-loader';
import './styles/app.scss';
import angular from 'angular';
import './layout/layout.module.js';
import './features/product/product.module.js';

angular
    .module('shopping', [
        'shopping.layout',
        'shopping.feature.product',
    ])
    .run(onAppRun);

function onAppRun($log) {
    $log.info('App bootstraped !');
}

