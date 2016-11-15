'use strict';

export default function ($stateProvider, $urlRouteProvider) {
    console.log('test');
    $stateProvider
        .state('mainLayout.products', {
            url: '/',
            templateUrl: 'features/product/product.html'
        })

    $urlRouteProvider.otherwise('/');
}
