
export default ($urlRouterProvider, $stateProvider) => {
    $stateProvider
        .state('mainLayout.products', {
            url: '/',
            template: require('./productList.html'),
            controller: 'ProductListController',
            controllerAs: 'productListCtl'
        });

    $urlRouterProvider.otherwise('/');
}
