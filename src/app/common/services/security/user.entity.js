export default class User {

  constructor(userInfos) {
    this.email = userInfos.email;
    this.lastName = userInfos.lastName;
    this.firstName = userInfos.firstName;
  }

  name() {
    return `{this.lastName} {this.firstName}`;
  }
}