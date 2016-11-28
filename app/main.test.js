import 'angular';
import 'angular-mocks';
import 'ng-describe';

const testsContext = require.context('.', true, /.spec.js$/);
testsContext.keys().forEach(testsContext);