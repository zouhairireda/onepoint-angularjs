export default ($urlRouterProvider, $stateProvider) => {
  $stateProvider
    .state('mainLayout.login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'loginCtl',
      template: require('./auth/login.html')
    });

  $urlRouterProvider.otherwise('/');
}
