import angular from 'angular';
import BootstrapProvider from './bootstrap.provider';
import BootstrapService from './bootstrap.service';

ngDescribe({
  name: 'shopping.services.bootstrap: BootstrapProvider',
  module: 'ui.router',
  inject: ['$rootScope', '$q', '$state', '$injector'],
  tests: function(deps) {
    it('should register task', testConfigRegistration);
    it('should return a bootstrap service instance', testInstantiateBootstrapService);

    function testConfigRegistration() {
      // Given
      let task = () => deps.$q((resolve) => resolve());
      let bootstrapProvider = new BootstrapProvider();

      // When
      bootstrapProvider.register(task);

      // Then
      expect(bootstrapProvider.bootstrapQueue.length).toEqual(1);
    }

    function testInstantiateBootstrapService() {
      // Given
      let bootstrapProvider = new BootstrapProvider();

      // When
      let bootstrapService = bootstrapProvider.$get(deps.$rootScope, deps.$q, deps.$state, deps.$injector);

      // Then
      expect(bootstrapService instanceof BootstrapService).toBe(true);
    }
  }
});

function myAsynchronousMethod($http, $q) {


  return $q(function(resolve, reject) {
    $http.get()
      .then(function(response) {
        resolve(response.data);
      })
      .catch(function(error) {
        reject(error.status);
      });
  });


}

function myAsynchronousMethod2($http, $q) {

  var deferred = $q.defer();
  $http.get()
    .then(function(response) {
      deferred.resolve(response.data);
    })
    .catch(function(error) {
      deferred.reject(error.status);
    });
  return deferred.promise;

}


function chainPromise(service1, service2, service3, service4, finalTask) {

  service1
    .then(service1)
    .then(service2)
    .then(service3)
    .then(service4)
    .catch(function(error) {
      // error depend on which service has reject or throw
    })
    .finally(finalTask);


}


function exceptionPromise($http, $q) {


}




