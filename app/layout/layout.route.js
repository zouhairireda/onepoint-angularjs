const mainLayoutTemplate = require('./mainLayout.html');

export default ($stateProvider) => {
    $stateProvider.state('mainLayout', {
        abstract: true,
        template: mainLayoutTemplate
    });
}