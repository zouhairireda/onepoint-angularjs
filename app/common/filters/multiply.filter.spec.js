import './multiply.filter';

ngDescribe({
  modules: 'shop.filters.multiply',
  inject: ['$filter'],
  tests: function(deps) {
    it('should multiply by given factor', testMultiplyByFactor);

    function testMultiplyByFactor() {
      // Given
      let multiplyFilter = deps.$filter('multiply');

      // When
      let result = multiplyFilter(2, 3);

      // Then
      expect(result).toEqual(6);
    }
  }
});

