const formFieldTemplate = require('./formField.html');

export default () => ({
  restrict: 'A',
  transclude: true,
  template: formFieldTemplate,
  controller: FormFieldController,
  controllerAs: 'fieldCtl',
  scope: true
});

class FormFieldController {

  constructor($element, $attrs, $transclude, $interpolate, $scope, $sce) {
    this.$element = $element;
    this.$attrs = $attrs;
    this.$transclude = $transclude;
    this.$interpolate = $interpolate;
    this.$scope = $scope;
    this.$sce = $sce;
    this.id = null;
  }

  $onInit() {
    this._initInputElement();
    this._parseLabel();
  }

  _parseLabel() {
    if (angular.isUndefined(this.$attrs['label'])) {
      throw new Error('Label attribute is mandatory');
    }
    this.label = this.$sce.trustAsHtml(this.$interpolate(this.$attrs['label'])(this.$scope));
  }

  _initInputElement() {
    this._addInputElement();
    this._registerUntouchedEvent();
  }

  _addInputElement() {
    this.$transclude((clone) => {
      this.$element.find('div').append(clone);
      this.inputElement = this.$element.find('input');
      if (!this.inputElement.length) {
        throw new Error('No input element provided in directive body');
      }
      this._initId();
    });
  }

  _registerUntouchedEvent() {
    this.inputElement.on('focus', () => {
      this.$scope.$apply(() => this.inputElement.controller('ngModel').$setUntouched());
    });
  }

  _initId() {
    let name = this.inputElement.attr('name');
    if (!name) {
      throw new Error('No name attribute provided for the input');
    }
    this.id = name + '_' + Date.now();
    this.inputElement.attr('id', this.id);
    this.inputElement.addClass('form-control');
    this.$element.find('label').attr('for', this.id);
  }
}