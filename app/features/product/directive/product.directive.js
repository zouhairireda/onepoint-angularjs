const productTemplate = require('./product.html');

export default () => ({
    restrict: 'E',
    template: productTemplate,
    scope: {product: '<data'},
    controller: ProductController,
    bindToController: true,
    controllerAs: 'prodCtl',
    compile: compile
});

class ProductController {
    range(count) {
        return new Array(count);
    }
}

function compile(element, attrs) {
    element.find('img').addClass(attrs['cssClass']);
}
