export default ($urlRouterProvider, $stateProvider) => {
  $stateProvider
    .state('mainLayout.login', {
      url: '/login',
      controller: 'LoginController',
      controllerAs: 'loginCtl',
      template: require('./auth/login.html')
    })
    .state('mainLayout.account', {
      url: '/account',
      controller: 'AccountController',
      controllerAs: 'accountCtl',
      template: require('./home/account.html')
    });

  $urlRouterProvider.otherwise('/');
}
