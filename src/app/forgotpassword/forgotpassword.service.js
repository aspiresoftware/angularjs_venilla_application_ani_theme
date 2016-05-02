(function() {
  angular.module('nd')
    .factory('ForgotPasswordService', ForgotPasswordService);

  function ForgotPasswordService (
    REST_URL,
    DelegatorService,
    urlTemplate,
    CachedRequestHandler
    ) {

    var forgotPasswordService, urls;

    urls = {
      forgotPasswordUrl: urlTemplate(REST_URL.forgotPassword, {}, {type: 'post'})
    };

    forgotPasswordService = angular.extend(
      {},
      CachedRequestHandler,
      {
        modelName: 'user',
        baseURL: urls.base,
        urls: urls
      },
      {
        forgotPassword: forgotPassword
      });

    return forgotPasswordService;

    function forgotPassword (user) {
      return DelegatorService.post(urls.forgotPasswordUrl,null, user);
    }

  }
})();
