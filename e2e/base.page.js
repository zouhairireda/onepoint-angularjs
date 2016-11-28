export default class BasePage {
  constructor(url, loadPage = true) {
    this.url = url;
    if (loadPage) {
      this.load();
    }
  }

  load() {
    browser.get(`${browser.baseUrl}/${this.url}`);
  }

  wait(time) {
    return browser.driver.sleep(time);
  }

  dumpElementsAsHtml(elements) {
    elements.map((el) => {
      el.getOuterHtml().then((html) => console.log(html));
    });
  }
}