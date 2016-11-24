import BasePage from '../base.page';

export default class extends BasePage {
  constructor(url) {
    browser.manage().timeouts().pageLoadTimeout(10000);
    super(url);
  }

  getProducts() {
    return element.all(by.css('.main-container product'))
  }
}