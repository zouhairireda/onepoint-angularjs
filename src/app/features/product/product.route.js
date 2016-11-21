
export default ($urlRouterProvider, $stateProvider) => {
    $stateProvider
        .state('mainLayout.products', {
            url: '/',
            template: require('./product.html')
        });

    $urlRouterProvider.otherwise('/');
}
