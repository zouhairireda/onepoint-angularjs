const headerTemplate = require('./header.html');

export default () => ({
  restrict: 'E',
  template: headerTemplate,
  controller: HeaderController,
  controllerAs: 'headCtl'
});

class HeaderController {
  constructor(securityService, $location) {
    this.securityService = securityService;
    this.$location = $location;
  }

  logout() {
    this.securityService.logout()
      .then(() => {
        this.$location.path('/');
      })
  }
}