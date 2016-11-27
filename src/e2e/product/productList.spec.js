import ProductListPage from './productList.page.js';

describe('Home Page:', () => {

  let page;
  beforeEach(() => page = new ProductListPage());

  it('should display products', testDisplayProduct);

  function testDisplayProduct() {

    page.getProducts().count()
      .then((productCount) => {
        expect(productCount > 0).toBe(true);
      });
  }

});


