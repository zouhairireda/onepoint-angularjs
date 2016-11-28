import angular from 'angular';

export default class BootstrapService {

  constructor($rootScope, $q, $state, $injector, bootstrapQueue) {
    this.$rootScope = $rootScope;
    this.$q = $q;
    this.$state = $state;
    this.$injector = $injector;
    this.bootstrapQueue = bootstrapQueue;
    this.unsubscribeRoutingEvent = null;
    this.originalTagetRoute = {
      state: null,
      toParams: null
    };
  }

  process() {
    this._preventRouting();
    this._processQueue();
  }

  _preventRouting() {
    this.unsubscribeRoutingEvent = this.$rootScope.$on('$stateChangeStart', (event, toState, toParams) => {
      this.originalTagetRoute.name = toState;
      this.originalTagetRoute.toParams = toParams;
      event.preventDefault();
    });
  }

  _processQueue() {
    if (this.bootstrapQueue.length === 0) {
      throw new Error('No queued task to process');
    }
    let promisesQueue = [];
    angular.forEach(this.bootstrapQueue, (task) => {
      promisesQueue.push(this.$q((resolve) => {
        this.$injector.invoke(task).finally(resolve);
      }));
    });
    this.$q.all(promisesQueue).finally(() => this._restoreRouting());
  }

  _restoreRouting() {
    this.unsubscribeRoutingEvent();
    if (this.originalTagetRoute.name) {
      this.$state.go(this.originalTagetRoute.name, this.originalTagetRoute.toParams);
    }
  }
}