const productTemplate = require('./product.html');

export default class ProductDirective {
    constructor() {
        this.restrict = 'E';
        this.template = productTemplate;
        this.bindToController = true;
        this.scope = {product: '=data'};
        this.controller = ProductController;
        this.controllerAs = 'prodCtl';
        this.link = link;
    }
}

class ProductController {
    constructor() {
    }

    $onInit() {
    }

    range(count) {
        let ratings = [];
        for (let i = 0; i < count; i++) {
            ratings.push(i)
        }
        return ratings;
    }
}

function link(scope, iElement, iAttrs) {
    iElement.addClass('slideshow');
    console.log('slideshow  class added');
}
