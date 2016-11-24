import User from './user.entity';

let currentUser = null;

export default class SecurityService {
  constructor(userRepository, $rootScope, $q, $localStorage) {
    this.userRepository = userRepository;
    this.$q = $q;
    this.$rootScope = $rootScope;
    this.$localStorage = $localStorage;
    this.autoConnect();
  }

  authenticate(email, password) {
    return this.$q((resolve, reject) => {
      let payload = {email, password};
      this.userRepository.login(payload, (userInfos) => this._onAuthSuccess(userInfos, resolve),
        (error) => this._onAuthFailure(error, reject));
    });
  }

  _onAuthSuccess(userInfos, resolve) {
    this.login(new User(userInfos));
    resolve(this.currentUser);
  }

  _onAuthFailure(error, reject) {
    reject(error.status);
  }

  login(user) {
    currentUser = user;
    this.$localStorage.shoppingUser = user;
    this.$rootScope.$broadcast('shopping.user.login', currentUser);
  }

  logout() {
    return this.$q((resolve) => {
      this.userRepository.logout(() => {
        currentUser = null;
        this.$localStorage.$reset({shoppingUser: null});
        this.$rootScope.$broadcast('shopping.user.logout', null);
        resolve();
      });
    });
  }

  isLogged() {
    return currentUser !== null;
  }

  connectedUser() {
    return currentUser;
  }

  autoConnect() {
    if(this.$localStorage.shoppingUser){
      this.login(this.$localStorage.shoppingUser);
    }
  }
}