const headerTemplate = require('./header.html');

export default () => ({
  restrict: 'E',
  template: headerTemplate,
  controller: HeaderController,
  controllerAs: 'headCtl'
});

class HeaderController {
  constructor($scope, securityService, $location) {
    this.securityService = securityService;
    this.$scope = $scope;
    this.$location = $location;
    this.user = null;
  }

  $onInit() {

    this._updateUser(this.securityService.connectedUser());
    this._registerEventListeners();
  }

  _registerEventListeners() {
    this.$scope.$on('shopping.user.login', (event, user) => this._updateUser(user));
    this.$scope.$on('shopping.user.logout', (event, user) => this._updateUser(user));
  }

  _updateUser(user) {
    this.user = user;
  }

  logout() {
    this.securityService.logout()
      .then(() => {
        this.$location.path('/');
      })
  }
}