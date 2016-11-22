
export default ($urlRouterProvider, $stateProvider) => {
    $stateProvider
        .state('mainLayout.products', {
            url: '/',
            template: require('./productList.html')
        });

    $urlRouterProvider.otherwise('/');
}
