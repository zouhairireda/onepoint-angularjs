export default class LoginController {
  constructor(securityService) {
    this.user = {};
  }

  fillForm() {
    this.user.email = 'j.doe@nowhere.com';
    this.user.password = 'password';
  }

  submit() {
    if (this.loginForm.$valid) {
      console.log(this.user);
    }
  }
}