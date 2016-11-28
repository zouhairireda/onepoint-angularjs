import {configureLogDecorator, LogDecorator} from './log.decorator';

ngDescribe({
  name: 'shopping.services.log: LogDecorator',
  tests: function(deps) {
    it('should add timestamp to debug', testAddTimestampToDebug);
    function testAddTimestampToDebug() {
      // Having
      let originalService = {debug: (message) => message};
      let decorator = new LogDecorator(originalService);

      // When
      let message = decorator.decoratedService.debug('test');

      // Then
      expect(message).toMatch(/^\d{13} - .+$/);
    }
  }
});