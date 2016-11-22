import ProductListPage from './productList.page.js';

describe('Home Page:', () => {

  let page;
  beforeEach(() => page = new ProductListPage('/#/'));

  it('should display products', testDisplayProduct);

  function testDisplayProduct() {
    var productList = element.all(by.css('.main-container .product'));
    expect(productList.count()).toEqual(6);
  }

});