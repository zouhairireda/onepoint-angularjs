const headerTemplate = require('./header.html');

export default class HeaderDirective {
  constructor() {
    this.restrict = 'E';
    this.template = headerTemplate;
    this.controller = HeaderController;
    this.controllerAs = 'headCtl';
  }
}

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
    console.log(user);
    this.user = user;
  }

  logout() {
    this.securityService.logout()
      .then(() => {
        this.$location.path('/');
      })
  }
}