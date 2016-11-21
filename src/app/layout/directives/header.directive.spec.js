import angular from 'angular';
import 'angular-mocks';
import 'ng-describe';
import '../layout.module.js';


describe('Karma test suite validation', () => {

    let $http;

    beforeEach(angular.mock.module('shopping.layout'));

    beforeEach(angular.mock.inject(function(_$http_) {
        $http = _$http_;
    }));

    it('should work', () => {
        console.log('in test');
        console.log($http);
        expect(true).toEqual(true);
    });
});

ngDescribe({
    modules: 'shopping.layout',
    tests: function ($http) {
        it('finally a test', () => {
            console.log($http);
            expect(true).toEqual(true);
        });
    }
});