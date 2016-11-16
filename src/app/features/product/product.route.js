'use strict';

export default function configureRoutes ($urlRouterProvider, $stateProvider) {
    console.log('test');
    $stateProvider
        .state('mainLayout.products', {
            url: '/',
            templateUrl: 'features/product/product.html'
        });

    $urlRouterProvider.otherwise('/');
}
