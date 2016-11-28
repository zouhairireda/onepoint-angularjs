import BootstrapService from './bootstrap.service';

export default class BootstrapProvider {
  constructor() {
    this.bootstrapQueue = [];
  }

  register(task) {
    this.bootstrapQueue.push(task);
  }

  $get($rootScope, $q, $state, $injector) {
    return new BootstrapService($rootScope, $q, $state, $injector, this.bootstrapQueue);
  }
}

