export function configureLogDecorator($provide) {
  $provide.decorator('$log', ($delegate) => new LogDecorator($delegate).decoratedService);
}

export class LogDecorator {

  constructor($delegate) {
    this.originalFunctions = {
      debug: $delegate.debug
    };
    $delegate.debug = (...args) => {
      let timestamp = Date.now();
      args[0] = `${timestamp} - ${args[0]}`;
      return this.originalFunctions.debug.apply(null, args);
    };

    this.decoratedService = $delegate;
  }
}