import Product from '../model/product.entity.js';

export default class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }

    getList() {
      let query = this.productRepository.getList(this._onProductsSuccess);
      return query.$promise;
    }

    _onProductsSuccess(products) {
      let productCollection = [];
      for (let product of products) {
        productCollection.push(new Product(product));
      }
      return productCollection;
    }
}
