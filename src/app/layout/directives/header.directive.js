const headerTemplate = require('./header.html');

export default class HeaderDirective {
    constructor() {
        this.restrict = 'E';
        this.template = headerTemplate;
        this.controller = HeaderController;
        this.controllerAs = 'headCtl';
    }
}

class HeaderController {
    constructor() {
    }

    $onInit() {

    }
}