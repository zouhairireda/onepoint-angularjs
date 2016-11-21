const footerTemplate = require('./footer.html');

export default class FooterDirective {
    constructor() {
        this.restrict = 'E';
        this.template = footerTemplate;
        this.controller = FooterController;
        this.controllerAs = 'footCtl';
    }
}

class FooterController {
    constructor() {
    }

    $onInit() {

    }
}