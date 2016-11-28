import angular from 'angular';

export default () => ({
  restrict: 'A',
  transclude: true,
  controller: UserIsLoggedController,
  bindToController: true
});

const typeIsLogged = 'userIsLogged';
const typeIsNotLogged = 'userIsNotLogged';

class UserIsLoggedController {
  constructor($element, $scope, $attrs, $transclude, securityService) {
    this.transcludeFn = $transclude;
    this.securityService = securityService;
    this.$scope = $scope;
    this.element = $element;
    this.directiveType = angular.isDefined($attrs['userIsLogged']) ? typeIsLogged : typeIsNotLogged;
  }

  $onInit() {
    this._registerWatchers();
    this._updateDisplay(this.securityService.connectedUser());
  }

  _registerWatchers() {
    this.$scope.$on('shopping.user.login', (event, user) => this._updateDisplay(user));
    this.$scope.$on('shopping.user.logout', (event, user) => this._updateDisplay(user));
  }

  _updateDisplay(user) {
    if ((user !== null && this.directiveType === typeIsLogged) || (user === null && this.directiveType === typeIsNotLogged)) {
      this._showElement();
    } else {
      this._hideElement();
    }
  }

  _showElement() {
    this.transcludeFn((clone) => {
      this.element.append(clone);
      this.element.css('visibility', 'visible');
    });
  }

  _hideElement() {
    this.element.empty();
    this.element.css('visibility', 'hidden');
  }
}