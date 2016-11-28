export default (shopBootstrapServiceProvider) => {
  shopBootstrapServiceProvider.register(($q, $timeout) => {
    // Fake async task on startup could be restoring user session
    // or fetching configuration from server
    return $q((resolve) => $timeout(() => resolve(), 500));
  });
}
