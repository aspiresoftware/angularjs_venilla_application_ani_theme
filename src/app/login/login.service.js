(function() {
  angular.module('nd')
    .factory('LoginService', LoginService);

  function LoginService (
    REST_URL,
    DelegatorService,
    urlTemplate,
    CachedRequestHandler
    ) {

    var loginService, urls;

    urls = {
      loginUrl: urlTemplate(REST_URL.login, {}, {type: 'post'})
    };

    loginService = angular.extend(
      {},
      CachedRequestHandler,
      {
        modelName: 'user',
        baseURL: urls.base,
        urls: urls
      },
      {
        authentication: authentication,
        refreshToken: refreshToken,
        logout: logout
      });

    return loginService;

    function authentication (user) {
      return DelegatorService.post(urls.loginUrl,null, user);
    }

    function refreshToken(refreshTokenValue) {
      var data  = {grantType: 'accessToken', refreshToken: refreshTokenValue};
      var config  = {noDelay: true};

      return DelegatorService.post(REST_URL.login, null, data, config);
    }

    function logout() {
      return DelegatorService.remove(REST_URL.logout, null, null);
    }
  }
})();
