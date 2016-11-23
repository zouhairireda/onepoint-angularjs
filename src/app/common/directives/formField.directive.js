const formFieldTemplate = require('./formField.html');

export default class ShopFormFieldDirective {
  constructor() {
    this.restrict = 'A';
    this.transclude = true;
    this.template = formFieldTemplate;
    this.controller = FormFieldController;
    this.controllerAs = 'fieldCtl';
    this.scope = true;
  }
}

class FormFieldController {

  constructor($element, $attrs, $transclude) {
    this.$element = $element;
    this.$attrs = $attrs;
    this.$transclude = $transclude;
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
    this.label = this.$attrs['label'];
  }

  _initInputElement() {
    this.$transclude((clone) => {
      this.$element.append(clone);
      this.inputElement = this.$element.find('input');
      if (!this.inputElement.length) {
        throw new Error('No input element provided in directive body');
      }
      this._initId();
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