import ConfigService from './config.service';

ngDescribe({
  name: 'shopping.services.config: ConfigService',
  tests: function(deps) {
    it('should get registered configuration', testGetConfiguration);
    it('should throw exception on undefined config param', testThrowOnUndefined);

    function testGetConfiguration() {
      // Having
      const [config, configService] = _initConfig();

      // When
      const value = configService.get('plip', 'test');

      // Then
      expect(value).toEqual(config.test.plip);
    }

    function testThrowOnUndefined() {
      // Having
      const [config, configService] = _initConfig();

      // When
      const retrieveValue = () => (configService.get('plop', 'test'));

      // Then
      expect(retrieveValue).toThrow();
    }

    function _initConfig() {
      const config = {test: {plip: 'plop'}};
      return [config, new ConfigService(config, 'default')];
    }
  }
});