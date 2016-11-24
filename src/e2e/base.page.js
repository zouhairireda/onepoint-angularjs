export default class BasePage {
  constructor(url) {
    this.url = url;
    this.load();
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