import angular from 'angular';
import '../layout.module.js';

// Standard test syntax
describe('shopping.layout: HeaderDirective', () => {

  let $rootScope;
  let $compile;
  beforeEach(angular.mock.module('shopping.layout'));
  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it('should contain main menu', () => {
    // Given
    let template = angular.element('<header></header>');

    // when
    let element = $compile(template)($rootScope);

    // then
    expect(element.find('nav').length > 0).toEqual(true);
  });
});

// ngDescribe test syntax
ngDescribe({
  name: 'shopping.layout: HeaderDirective',
  modules: 'shopping.layout',
  element: '<header></header>',
  tests: function(deps) {
    it('should contain main menu', () => {
      // then
      expect(deps.element.find('nav').length > 0).toEqual(true);
    });
  }
});