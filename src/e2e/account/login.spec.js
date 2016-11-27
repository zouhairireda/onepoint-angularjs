import LoginPage from './login.page';
import AccountPage from './account.page';

describe('Login Page:', () => {

  let page;
  beforeEach(() => page = new LoginPage());

  it('should redirect to account on login OK', testRedirectLoginOk);

  function testRedirectLoginOk() {

    page.clickFillFormLink();
    page.submitForm();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/' + new AccountPage().url);
  }

});


