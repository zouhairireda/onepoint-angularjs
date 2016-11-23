
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

    range(count) {
        let ratings = [];
        for (let i = 0; i < count; i++) {
            ratings.push(i)
        }
        return ratings;
    }
}