export default class BasePage {
  constructor (url) {
    this.url = url;
    this.load();
  }

  load() {
    browser.get(`${browser.baseUrl}/${this.url}`);
  }
}