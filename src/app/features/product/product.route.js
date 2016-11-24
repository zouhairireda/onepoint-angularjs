
export default ($urlRouterProvider, $stateProvider) => {
    $stateProvider
        .state('mainLayout.products', {
            url: '/',
            template: require('./list/productList.html'),
            controller: 'ProductListController',
            controllerAs: 'productListCtl'
        });

    $urlRouterProvider.otherwise('/');
}
