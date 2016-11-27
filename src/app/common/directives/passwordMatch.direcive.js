export default () => ({
  restrict: 'A',
  require: {
    modelCtl: 'ngModel'
  },
  controller: PasswordMatchController,
  scope: true,
  bindToController: true
});

class PasswordMatchController {

  constructor($attrs, $parse, $scope) {
    this.$parse = $parse;
    this.$attrs = $attrs;
    this.$scope = $scope;
  }

  $onInit() {
    this.modelCtl.$validators.shopPasswordMatch = (modelValue, viewValue) => this._validate(modelValue, viewValue);
    this.passwordReferenceFn = this.$parse(this.$attrs.shopPasswordMatch);
    this.$scope.$watch(this.$attrs.shopPasswordMatch, () => {
      this.modelCtl.$validate();
    });
  }

  _validate(modelValue, viewValue) {
    let value = viewValue || modelValue;
    return value ? value === this.passwordReferenceFn(this.$scope) : true;
  }
}