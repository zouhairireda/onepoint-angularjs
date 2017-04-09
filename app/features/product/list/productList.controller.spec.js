import angular from 'angular';
import '../product.module';

// Standard writing syntax
  describe('shopping.feature.product: ProductListController', () => {

  let $controller;
  let $rootScope;
  let scope;
  let productService;
  let $q;

  beforeEach(angular.mock.module('shopping.feature.product'));
  beforeEach(angular.mock.module(function($provide) {
    $provide.service('productService', () => {
      let productList = null;
      return {
        getList: () => ($q((resolve) => resolve(productList))),
        setList: (list) => productList = list
      }
    });
  }));

  beforeEach(angular.mock.inject(function(_$controller_, _$rootScope_, _$q_, _productService_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $q = _$q_;
    productService = _productService_;
    scope = $rootScope.$new();
  }));

  it('should init controller with products', testInitWithProducts);

  function testInitWithProducts() {
    // Given
    productService.setList([{id: 1}, {id: 2}, {id: 3}]);

    // When
    let ctl = $controller('ProductListController', {$scope: scope});
    ctl.$onInit();
    $rootScope.$apply();

    // Then
    expect(ctl.products.length).toBe(3);
  }
});

// ngDescribe writing syntax
ngDescribe({
  modules: 'shopping.feature.product',
  mocks: {'shopping.feature.product': {productService: mockProductService()}},
  inject: ['$controller', '$rootScope', '$q', 'productService'],
  tests: function(deps) {
    it('should init controller with products', testInitWithProducts);

    function testInitWithProducts() {
      // Given
      deps.productService.setList([{id: 1}, {id: 2}, {id: 3}]);

      // When
      let ctl = deps.$controller('ProductListController', {$scope: deps.$rootScope.$new()});
      ctl.$onInit();
      deps.step();

      // Then
      expect(ctl.products.length).toBe(3);
    }
  }
});

function mockProductService() {
  let productList = null;
  return {
    getList: ($q) => ($q((resolve) => resolve(productList))),
    setList: (list) => productList = list
  }
}