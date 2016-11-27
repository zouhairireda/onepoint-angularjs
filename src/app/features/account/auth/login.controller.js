export default class LoginController {
  constructor(securityService, $state) {
    this.securityService = securityService;
    this.$state = $state;
    this.user = {};
    this.formErrorMessage = null;
    this.emailField = {label: 'Adresse e-mail', help: 'Ce champ est requis'};
  }

  $onInit() {
    if (this.securityService.isLogged()) {
      this._onSubmitSuccess()
    }
  }

  fillForm() {
    this.user.email = 'j.doe@nowhere.com';
    this.user.password = 'password';
  }

  submit() {
    if (this.loginForm.$valid) {
      this.securityService
        .authenticate(this.user.email, this.user.password)
        .then(() => this._onSubmitSuccess())
        .catch((errorCode) => this._onSubmitFailure(errorCode));
    }
  }

  _onSubmitSuccess() {
    this.$state.go('mainLayout.account');
  }

  _onSubmitFailure(errorCode) {
    this.formErrorMessage = errorCode === 404 ? 'User not found' : 'Unexpected error';
  }
}