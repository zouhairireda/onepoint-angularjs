import angular from 'angular';

export default () => ({
  restrict: 'A',
  require: {
    modelCtl: 'ngModel'
  },
  controller: PasswordComplexityController,
  scope: true,
  bindToController: true
});

const complexities = [
  {name: 'minLength', test: (value, param) => String(value).length >= param},
  {name: 'shouldHaveNumber', test: (value, param) => !!String(value).match(/\d+/g)},
  {name: 'shouldHaveSpecialChar', test: (value, param) => !!String(value).match(/[^\w]+/g)}
];

class PasswordComplexityController {

  constructor($attrs, $scope) {
    this.$attrs = $attrs;
    this.$scope = $scope;
    this.complexityDefaultParams = {
      minLength: 6,
      shouldHaveNumber: false,
      shouldHaveSpecialChar: false
    };
    this.complexityParams = null;
  }

  $onInit() {
    this.modelCtl.$validators.shopPasswordComplexity = (modelValue, viewValue) => this._validate(modelValue, viewValue);
    this._parseOptions();
  }

  _parseOptions() {
    let userComplexityParams = {};
    if (angular.isDefined(this.$attrs.shopPasswordComplexity)) {
      userComplexityParams = this.$scope.$eval(this.$attrs.shopPasswordComplexity);
      if (!angular.isObject(userComplexityParams)) {
        throw new Error('Password complexity param must be a valid object ' + typeof this.complexityParams + ' given');
      }
    }
    this.complexityParams = angular.merge(this.complexityDefaultParams, userComplexityParams);
  }

  _validate(modelValue, viewValue) {
    let value = viewValue || modelValue;
    return complexities.reduce((validity, complexityCriteria) => {
      if (validity) {
        return this.complexityParams[complexityCriteria.name] ?
          complexityCriteria.test(value, this.complexityParams[complexityCriteria.name]) : true;
      } else {
        return validity;
      }
    }, true);
  }
}