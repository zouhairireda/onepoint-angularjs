import BasePage from '../base.page';

const url = '#/';
export default class ProductListPage extends BasePage {
  constructor() {
    super(url);
  }

  getProducts() {
    return element.all(by.css('.main-container product'))
  }
}

