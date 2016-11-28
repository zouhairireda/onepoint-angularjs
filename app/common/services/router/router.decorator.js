import angular from 'angular';

export function configureRouterDecorator($provide) {
  $provide.decorator('$state', ($delegate) => new RouterDecorator($delegate).decoratedService);
}

export class RouterDecorator {

  constructor($delegate) {
    this.originalFunctions = {
      go: $delegate.go
    };

    $delegate.go = (to, params, options = {}) => {
      if (angular.isUndefined(options.reload)) {
        options.reload = true;
      }
      return this.originalFunctions.go.apply(null, [to, params, options]);
    };

    this.decoratedService = $delegate;
  }
}

