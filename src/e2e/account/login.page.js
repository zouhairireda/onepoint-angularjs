import BasePage from '../base.page';

const url = '#/login';
export default class LoginPage extends BasePage {
  constructor() {
    super(url);
  }

  clickFillFormLink() {
    element(by.css('.main-container .fill-form')).click();
  }

  submitForm() {
    element(by.css('.main-container form button[type="submit"]')).click();
  }
}

