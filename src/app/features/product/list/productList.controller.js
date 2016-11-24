
export default class ProductListController {
    constructor(productService) {
        this.productService = productService;
    }

    $onInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService
            .getList()
            .then((products) => {
                this.products = products;
            });
    }
}