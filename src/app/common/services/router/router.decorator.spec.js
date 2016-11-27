import {configureRouterDecorator, RouterDecorator} from './router.decorator';

ngDescribe({
  name: 'shopping.services.router: RouterDecorator',
  tests: function(deps) {
    it('should add reload option by default', testAddTimestampToDebug);
    function testAddTimestampToDebug() {
      // Having
      let originalService = {go: (name, params, options) => [name, params, options]};
      let decorator = new RouterDecorator(originalService);

      // When
      let [name, params, options] = decorator.decoratedService.go('fakestate', null);

      // Then
      expect(options.reload).toBe(true);
    }
  }
});

