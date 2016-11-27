const baseUrl = '/api/user';

export default ($resource) => $resource(baseUrl, null, {
  login: {
    url: baseUrl + '/login',
    method: 'POST'
  },
  logout: {
    url: baseUrl + '/logout',
    method: 'GET'
  },
  password: {
    url: baseUrl + '/password',
    method: 'POST'
  }
});