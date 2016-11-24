const footerTemplate = require('./footer.html');

export default () => ({
  restrict: 'E',
  template: footerTemplate,
  controller: FooterController,
  controllerAs: 'footCtl'
});

class FooterController {
  constructor($scope, securityService) {
    this.securityService = securityService;
    this.$scope = $scope;
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
}