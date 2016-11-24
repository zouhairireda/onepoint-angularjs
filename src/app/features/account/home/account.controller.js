export default class AccountController {

  constructor(securityService, $q, $location) {
    this.securityService = securityService;
    this.$q = $q;
    this.$location = $location;
  }

  $onInit() {
    this.checkAccess()
      .then(() => this.fetchUser())
      .catch(() => this.onInitError());
  }

  checkAccess() {
    return this.$q((resolve, reject) => {
      if (!this.securityService.isLogged()) {
        reject();
      } else {
        resolve();
      }
    });
  }

  fetchUser() {
    this.user = this.securityService.connectedUser;
  }

  onInitError() {
    this.$location.path('/');
  }
}