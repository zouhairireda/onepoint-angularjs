
export default class ProductListController {
    constructor(productService, shopConfigService) {
        this.productService = productService;
        this.configService = shopConfigService;
    }

    $onInit() {
        this.getProducts(this.configService.get('listProductPaginate', 'product'));
    }

    getProducts() {
        this.productService
            .getList()
            .then((products) => {
                this.products = products;
            });
    }
}