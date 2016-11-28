import angular from 'angular';
import './form.module';

ngDescribe({
  modules: 'shopping.directives.form',
  element: '<input type="password" ng-model="passwordMatch" shop-password-match="password">',
  tests: function(deps) {
    it('should add error on model when different', testAddErrorOnDifferent);
    it('should not add error on model when different', testNotAddErrorOnSame);
    it('should add error when password change', testAddErrorOnChange);

    function testAddErrorOnDifferent() {
      // Having
      let scope = deps.element.scope();
      let controller = deps.element.controller('ngModel');
      scope.password = 'test';

      // When
      scope.passwordMatch = 'testtest';
      deps.step();

      // Then
      expect(angular.isDefined(controller.$error.shopPasswordMatch)).toBe(true);
    }

    function testNotAddErrorOnSame() {
      // Having
      let scope = deps.element.scope();
      let controller = deps.element.controller('ngModel');
      scope.password = 'test';

      // When
      scope.passwordMatch = 'test';
      deps.step();

      // Then
      expect(angular.isDefined(controller.$error.shopPasswordMatch)).toBe(false);
    }

    function testAddErrorOnChange() {
      // Having
      let scope = deps.element.scope();
      let controller = deps.element.controller('ngModel');
      scope.password = 'test';
      scope.passwordMatch = 'test';
      deps.step();

      // When
      scope.password = 'plip';
      deps.step();

      // Then
      expect(angular.isDefined(controller.$error.shopPasswordMatch)).toBe(true);
    }
  }
});

