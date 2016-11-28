export default class AccountController {

  constructor(securityService, $q, $location) {
    this.securityService = securityService;
    this.$q = $q;
    this.$location = $location;
    this.selectedMenu = 'profil';
    this.passwordModel = new ChangePasswordModel();
  }

  $onInit() {
    this._checkAccess()
      .then(() => this._fetchUser())
      .catch(() => this._onInitError());
  }

  _checkAccess() {
    return this.$q((resolve, reject) => {
      if (!this.securityService.isLogged()) {
        reject();
      } else {
        resolve();
      }
    });
  }

  _fetchUser() {
    this.user = this.securityService.connectedUser();
  }

  _onInitError() {
    this.$location.path('/');
  }

  changePassword() {
    if (this.passwordModel.form.$valid) {
      this.securityService.changePassword(this.passwordModel.newPassword)
        .then(() => {
          this.passwordModel.reset();
          this.passwordModel.success = true;
        });
    }
  }
}

class ChangePasswordModel {
  constructor() {
    this.form = null;
    this.success = false;
    this.reset();
  }

  reset() {
    this.password = null;
    this.newPassword = null;
    this.confirmPassword = null;
    if (this.form) {
      this.form.$setPristine();
      this.form.$setUntouched();
    }
  }
}