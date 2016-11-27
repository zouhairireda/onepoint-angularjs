import BasePage from '../base.page';

const url = '#/account';
export default class AccountPage extends BasePage {
  constructor(loadPage = true) {
    super(url, loadPage);
  }
}

