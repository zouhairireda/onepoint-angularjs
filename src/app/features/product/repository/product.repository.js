export default ($resource) => $resource('/api/product', null, {
    getList: {
        method: 'GET',
        isArray: true
    }
});