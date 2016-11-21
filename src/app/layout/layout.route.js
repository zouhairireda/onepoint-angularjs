const mainLayoutTemplate = require('./mainLayout.html');

export default ($stateProvider) => {
    console.log('test unit bootstrap');
    console.log('test unit bootstrap');
    console.log('test unit bootstrap');
    console.log('test unit bootstrap');
    $stateProvider.state('mainLayout', {
        abstract: true,
        template: mainLayoutTemplate
    });
}