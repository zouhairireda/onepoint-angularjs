import angular from 'angular';
import './form.module';

describe('shopping.directives.form: shopPasswordComplexityDirective', () => {

  let $compile;
  let $rootScope;
  let scope;
  beforeEach(angular.mock.module('shopping.directives.form'));

  beforeEach(angular.mock.inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    scope = $rootScope.$new();
  }));

  it('should throw exception on bad param', testExceptionOnBadParam);
  it('should override default params', testOverrideDefaultParam);

  function testExceptionOnBadParam() {
    // Having
    let template = angular.element('<input type="test" ng-model="test" shop-password-complexity="param">');
    scope.param = 'badparamtype';

    // When
    let compileExecution = () => $compile(template)(scope);

    // Then
    expect(compileExecution).toThrow();
  }

  function testOverrideDefaultParam() {
    // Having
    let template = angular.element('<input type="test" ng-model="test" shop-password-complexity="params">');
    scope.params = {minLength: 1, shouldHaveNumber: true, shouldHaveSpecialChar: true};

    // When
    let compiledElement = $compile(template)(scope);
    $rootScope.$digest();

    // Then
    expect(template.controller('shopPasswordComplexity').complexityParams).toEqual(scope.params);

  }
});