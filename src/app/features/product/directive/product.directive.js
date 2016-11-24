const productTemplate = require('./product.html');

export default () => ({
    restrict: 'E',
    template: productTemplate,
    bindToController: true,
    scope: {product: '=data'},
    controller: ProductController,
    controllerAs: 'prodCtl',
    compile: compile
});

class ProductController {
    range(count) {
        return new Array(count);
    }
}

function compile(element, attrs) {
    element.find('img').addClass('slider');
}
